import express from "express";
import { prisma } from "../lib/prisma.js";
import authMiddleware from "../middleware.js";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid"; // Correct way to import uuid
import QRCode from "qrcode";        // Add this line

const router = express.Router();

// Validation Schema for creating a Case
const propertySchema = z.object({
    category: z.enum(["ELECTRONICS", "WEAPON", "VEHICLE", "CASH", "NARCOTICS", "DOCUMENTS", "OTHER"]),
    belongingTo: z.enum(["ACCUSED", "COMPLAINANT", "VICTIM", "UNKNOWN"]),
    nature: z.enum(["RECOVERED", "SEIZED", "ABANDONED"]),
    quantity: z.number().int().positive(),
    location: z.string().min(1),
    description: z.string().min(1),
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
        if (!validation.success) return res.status(400).json({ error: "Invalid inputs", details: validation.error.issues });

        const userId = req.userId!;
        const { policeStation, ioName, ioId, crimeYear, firDate, seizureDate, actLaw, sectionLaw, properties } = req.body;

        // 1. Generate QR Codes
        const propertiesWithQR = await Promise.all((properties || []).map(async (p: any) => {
            const token = `PROP-${uuidv4()}`;
            const qr = await QRCode.toDataURL(token);
            return { ...p, qrString: token, qrCodeImage: qr };
        }));

        // 2. Find Serial Number (Standard query)
        const lastCase = await prisma.caseRecord.findFirst({
            where: { crimeYear },
            orderBy: { createdAt: 'desc' }
        });

        let nextSequence = 1;
        if (lastCase?.crimeNumber) {
            const parts = lastCase.crimeNumber.split('-');
            const lastNum = parseInt(parts[parts.length - 1] ?? '0', 10);
            if (!isNaN(lastNum)) nextSequence = lastNum + 1;
        }
        const autoCrimeNumber = `FIR-${crimeYear}-${nextSequence.toString().padStart(3, '0')}`;

        // 3. Create Case and Properties (Standard create)
        const newCase = await prisma.caseRecord.create({
            data: {
                policeStation, ioName, ioId, crimeNumber: autoCrimeNumber,
                crimeYear, actLaw, sectionLaw, userId,
                firDate: new Date(firDate),
                seizureDate: new Date(seizureDate),
                properties: { create: propertiesWithQR }
            },
            include: { properties: true }
        });

        return res.status(201).json({ message: "Registered successfully", case: newCase });

    } catch (err: any) {
        console.error("DEBUG ERROR:", err);
        return res.status(500).json({ error: "DB Connection Error", details: err.message });
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


// 4. Log a Scan Event (When someone scans the physical tag)
router.post("/scan/:qrString", authMiddleware, async (req, res) => {
    try {
        const { qrString } = req.params;
        const userId = req.userId!;

        if (!qrString) return res.status(400).json({ error: "QR String is required" });

        // 1. Find the property
        const property = await prisma.property.findUnique({
            where: { qrString },
            include: { 
                case: true,
                custodyLogs: {
                    orderBy: {
                        movedAt: 'desc' // Shows newest movements first
                    }
                }
            }
        });

        if (!property) return res.status(404).json({ error: "Invalid QR Code" });

        // 2. Create the Audit Log (The "Who" and "When")
        // Note: Ensure you added ScanLog to your Prisma Schema first!
        await prisma.scanLog.create({
            data: {
                userId: userId,
                propertyId: property.id,
            }
        });

        return res.json({ 
            message: "Scan logged successfully", 
            property 
        });
    } catch (err) {
        return res.status(500).json({ error: "Failed to log scan" });
    }
});

// 5. Update Property Data via QR String
router.put("/update-qr/:qrString", authMiddleware, async (req, res) => {
    try {
        const { qrString } = req.params;
        const userId = req.userId!;

        if (!qrString) {
            return res.status(400).json({ error: "QR String is required" });
        }

        // Validation schema for updating property
        const updatePropertySchema = z.object({
            category: z.enum(["ELECTRONICS", "WEAPON", "VEHICLE", "CASH", "NARCOTICS", "DOCUMENTS", "OTHER"]).optional(),
            belongingTo: z.enum(["ACCUSED", "COMPLAINANT", "VICTIM", "UNKNOWN"]).optional(),
            nature: z.enum(["RECOVERED", "SEIZED", "ABANDONED"]).optional(),
            quantity: z.number().int().positive().optional(),
            location: z.string().min(1).optional(),
            description: z.string().min(1).optional(),
            photoUrl: z.string().url().optional(),
        });

        const validation = updatePropertySchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ 
                error: "Invalid inputs", 
                details: validation.error.issues 
            });
        }

        const { category, belongingTo, nature, quantity, location, description, photoUrl } = validation.data;

        // Create a clean object by only including keys that are NOT undefined
        const updateData = Object.fromEntries(
            Object.entries({
                category,
                belongingTo,
                nature,
                quantity,
                location,
                description,
                photoUrl
            }).filter(([_, value]) => value !== undefined)
        );

        // 1. Find the property and verify ownership
        const property = await prisma.property.findUnique({
            where: { qrString },
            include: { case: true }
        });

        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }

        // 2. Verify that the user owns this case
        if (property.case.userId !== userId) {
            return res.status(403).json({ 
                error: "Unauthorized: You can only update properties from your own cases" 
            });
        }

        // 3. Update the property
        // 3. Update the property using the cleaned data object
        const updatedProperty = await prisma.property.update({
            where: { qrString },
            data: updateData, // No more TypeScript errors here
            include: {
                case: {
                    select: {
                        crimeNumber: true,
                        policeStation: true,
                        ioName: true
                    }
                }
            }
        });

        // 4. Optional: Log the update action
        await prisma.scanLog.create({
            data: {
                userId: userId,
                propertyId: property.id,
            }
        });

        return res.json({ 
            message: "Property updated successfully", 
            property: updatedProperty 
        });

    } catch (err: any) {
        console.error("Update QR Error:", err);
        return res.status(500).json({ 
            error: "Failed to update property", 
            details: err.message 
        });
    }
});

// case.ts - Add this endpoint
router.get("/analytics-stats", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId!;

        // 1. Get counts grouped by category for this specific user
        const categoryStats = await prisma.property.groupBy({
            by: ['category'],
            where: {
                case: {
                    userId: userId
                }
            },
            _count: {
                _all: true
            }
        });

        // 2. Format it into a simple object for the frontend
        // e.g., { ELECTRONICS: 5, WEAPON: 2 }
        const formattedStats = categoryStats.reduce((acc: any, curr) => {
            acc[curr.category] = curr._count._all;
            return acc;
        }, {});

        return res.json({ categories: formattedStats });
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch analytics" });
    }
});

// Validation Schema for Custody Movement
const custodyMovementSchema = z.object({
    toOfficer: z.string().min(1),
    purpose: z.string().min(1),
    remarks: z.string().optional(),
    newLocation: z.string().min(1), // Every move usually changes physical location
});

// 6. Log Property Movement (Chain of Custody)
router.post("/property/:id/move", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params; // Property ID
        const userId = req.userId!;
        const validation = custodyMovementSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({ error: "Invalid movement data", details: validation.error.issues });
        }

        if (!id) {
            return res.status(400).json({ error: "Property ID is required" });
        }

        const { toOfficer, purpose, remarks, newLocation } = validation.data;

        // Fetch property and current officer/location
        const property = await prisma.property.findUnique({
            where: { id },
            include: { case: { select: { ioName: true } } }
        });

        if (!property) return res.status(404).json({ error: "Property record not found" });

        // Perform move inside a Transaction
        const updatedLog = await prisma.$transaction(async (tx) => {
            // 1. Create the Custody Log entry
            const log = await tx.custodyLog.create({
                data: {
                    propertyId: id,
                    fromOfficer: property.case.ioName, // Or fetch the last 'toOfficer' from logs
                    toOfficer,
                    purpose,
                    remarks: remarks ?? null,
                    movedAt: new Date(),
                }
            });

            // 2. Update the Property's current location field
            await tx.property.update({
                where: { id },
                data: { location: newLocation }
            });

            return log;
        });

        return res.json({ 
            message: "Movement recorded in Chain of Custody", 
            log: updatedLog 
        });

    } catch (err) {
        console.error("CoC Error:", err);
        return res.status(500).json({ error: "Failed to log movement" });
    }
});
export default router;