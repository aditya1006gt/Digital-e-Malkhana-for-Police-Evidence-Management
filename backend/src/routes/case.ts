import express from "express";
import { prisma } from "../lib/prisma.js";
import authMiddleware from "../middleware.js";
import { z } from "zod";

const router = express.Router();

// Validation Schema for creating a Case
const propertySchema = z.object({
    category: z.enum(["ELECTRONICS", "WEAPON", "VEHICLE", "CASH", "NARCOTICS", "DOCUMENTS", "OTHER"]),
    belongingTo: z.enum(["ACCUSED", "COMPLAINANT", "VICTIM", "UNKNOWN"]),
    nature: z.enum(["RECOVERED", "SEIZED", "ABANDONED"]),
    quantity: z.number().int().positive(),
    location: z.string().min(1),
    description: z.string().min(1),
    qrString: z.string().min(1), // Unique ID for the QR code
    photoUrl: z.string().url().optional(),
});

const createCaseSchema = z.object({
    policeStation: z.string().min(1),
    ioName: z.string().min(1),
    ioId: z.string().min(1),
    crimeYear: z.number().int(),
    firDate: z.string().datetime(),    // ISO Date string
    seizureDate: z.string().datetime(), // ISO Date string
    actLaw: z.string().min(1),
    sectionLaw: z.string().min(1),
    properties: z.array(propertySchema).optional(),
});

// 1. Create a New Case (with optional properties)
router.post("/create", authMiddleware, async (req, res) => {
    try {
        const validation = createCaseSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ error: "Invalid inputs", details: validation.error.issues });
        }

        const userId = req.userId!;
        const { 
            policeStation, ioName, ioId , crimeYear, 
            firDate, seizureDate, actLaw, sectionLaw, properties 
        } = req.body;

        // Use a transaction to ensure both Case and Properties are created together
        const newCase = await prisma.$transaction(async (tx:any) => {
            // 1. Find the latest case for this year to determine the next serial number
            const lastCase = await tx.caseRecord.findFirst({
                where: { crimeYear: crimeYear },
                orderBy: { createdAt: 'desc' }
            });

            // 2. Generate the next number (e.g., FIR-2026-001)
            let nextSequence = 1;
            if (lastCase && lastCase.crimeNumber) {
                const parts = lastCase.crimeNumber.split('-');
                const lastNum = parseInt(parts[parts.length - 1]);
                if (!isNaN(lastNum)) nextSequence = lastNum + 1;
            }
            
            const autoCrimeNumber = `FIR-${crimeYear}-${nextSequence.toString().padStart(3, '0')}`;

            return await tx.caseRecord.create({
                data: {
                    policeStation,
                    ioName,
                    ioId,
                    crimeNumber: autoCrimeNumber, // Use the generated number
                    crimeYear,
                    firDate: new Date(firDate),
                    seizureDate: new Date(seizureDate),
                    actLaw,
                    sectionLaw,
                    userId,
                    // If properties are provided, create them linked to this case
                    properties: {
                        create: properties?.map((p: any) => ({
                            ...p,
                        }))
                    }
                },
                include: {
                    properties: true
                }
            });
        });

        return res.status(201).json({
            message: "Case and properties registered successfully",
            case: newCase
        });
    } catch (err: any) {
        if (err.code === 'P2002') {
            return res.status(409).json({ error: "Property with this QR String already exists" });
        }
        return res.status(500).json({ error: "Server error during case creation" });
    }
});

// 2. Get All Cases for the Logged-in Officer
router.get("/my-cases", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId!;
        const cases = await prisma.caseRecord.findMany({
            where: { userId },
            include: {
                _count: { select: { properties: true } }
            },
            orderBy: { createdAt: 'desc' }
        });
        return res.json({ cases });
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch cases" });
    }
});

// 3. Get Specific Case Details
router.get("/specific/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: "Case ID is required" });
        console.log("Request received for ID:", id); // Check your terminal!
        
        const foundCase = await prisma.caseRecord.findFirst({
            where: {
                OR: [
                    { id },
                    { crimeNumber: id }
                ],
            },

            include: {
                properties: {
                    include: {
                        custodyLogs: true,
                        disposal: true
                    }
                },
                user: {
                    select: { firstname: true, lastname: true, rank: true }
                }
            }
        });

        console.log("Database result:", foundCase ? "Found" : "Not Found");

        if (!foundCase) return res.status(404).json({ error: "Case not found" });
        return res.json({ case: foundCase });
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
});

export default router;