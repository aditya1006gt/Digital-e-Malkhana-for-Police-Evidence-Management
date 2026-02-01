import express from "express";
import { prisma } from "../lib/prisma.js";
import authMiddleware from "../middleware.js";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid"; // Correct way to import uuid
import QRCode from "qrcode"; // Add this line
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
    firDate: z.string().datetime(), // ISO Date string
    seizureDate: z.string().datetime(), // ISO Date string
    actLaw: z.string().min(1),
    sectionLaw: z.string().min(1),
    properties: z.array(propertySchema).optional(),
});
// 1. Create a New Case (with optional properties)
router.post("/create", authMiddleware, async (req, res) => {
    try {
        const validation = createCaseSchema.safeParse(req.body);
        if (!validation.success)
            return res.status(400).json({ error: "Invalid inputs", details: validation.error.issues });
        const userId = req.userId;
        const { policeStation, ioName, ioId, crimeYear, firDate, seizureDate, actLaw, sectionLaw, properties } = req.body;
        // 1. Generate QR Codes
        const propertiesWithQR = await Promise.all((properties || []).map(async (p) => {
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
            if (!isNaN(lastNum))
                nextSequence = lastNum + 1;
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
    }
    catch (err) {
        console.error("DEBUG ERROR:", err);
        return res.status(500).json({ error: "DB Connection Error", details: err.message });
    }
});
// 2. Get All Cases for the Logged-in Officer
router.get("/my-cases", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const cases = await prisma.caseRecord.findMany({
            where: { userId },
            include: {
                _count: { select: { properties: true } }
            },
            orderBy: { createdAt: 'desc' }
        });
        return res.json({ cases });
    }
    catch (err) {
        return res.status(500).json({ error: "Failed to fetch cases" });
    }
});
// 3. Get Specific Case Details
router.get("/specific/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).json({ error: "Case ID is required" });
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
        if (!foundCase)
            return res.status(404).json({ error: "Case not found" });
        return res.json({ case: foundCase });
    }
    catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
});
// 4. Log a Scan Event (When someone scans the physical tag)
router.post("/scan/:qrString", authMiddleware, async (req, res) => {
    try {
        const { qrString } = req.params;
        const userId = req.userId;
        if (!qrString)
            return res.status(400).json({ error: "QR String is required" });
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
        if (!property)
            return res.status(404).json({ error: "Invalid QR Code" });
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
    }
    catch (err) {
        return res.status(500).json({ error: "Failed to log scan" });
    }
});
// 5. Update Property Data via QR String
router.put("/update-qr/:qrString", authMiddleware, async (req, res) => {
    try {
        const { qrString } = req.params;
        const userId = req.userId;
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
        const updateData = Object.fromEntries(Object.entries({
            category,
            belongingTo,
            nature,
            quantity,
            location,
            description,
            photoUrl
        }).filter(([_, value]) => value !== undefined));
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
    }
    catch (err) {
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
        const userId = req.userId;
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
        const formattedStats = categoryStats.reduce((acc, curr) => {
            acc[curr.category] = curr._count._all;
            return acc;
        }, {});
        return res.json({ categories: formattedStats });
    }
    catch (err) {
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
// Update the move route in your backend case.ts
router.post("/property/:id/move", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const { toOfficer, purpose, remarks, newLocation } = req.body;
        if (!id) {
            return res.status(400).json({ error: "Property ID is required" });
        }
        const property = await prisma.property.findUnique({
            where: { id },
            include: {
                case: true,
                custodyLogs: { orderBy: { movedAt: 'desc' }, take: 1 }
            }
        });
        if (!property)
            return res.status(404).json({ error: "Property not found" });
        // Get the Logged in User's details
        const currentUser = await prisma.user.findUnique({ where: { id: userId } });
        // Trim spaces to prevent "John Doe" !== "John Doe " errors
        const currentUserName = `${currentUser?.firstname} ${currentUser?.lastname}`.trim().toLowerCase();
        // Determine current possessor
        const currentPossessorName = (property.custodyLogs[0]?.toOfficer ?? property.case?.ioName ?? "")
            .trim().toLowerCase();
        // AUTHORIZATION CHECK
        // Allow if Name matches OR if the user is the original creator (userId match)
        const isOriginalCreator = property.case.userId === userId;
        const isCurrentHolder = currentUserName === currentPossessorName;
        if (!isCurrentHolder && !isOriginalCreator) {
            return res.status(403).json({
                error: `Access Denied. Current possessor is ${currentPossessorName}.`
            });
        }
        const updatedLog = await prisma.$transaction(async (tx) => {
            const log = await tx.custodyLog.create({
                data: {
                    propertyId: id,
                    fromOfficer: property.custodyLogs[0]?.toOfficer ?? property.case.ioName,
                    toOfficer, // This will be the new possessor
                    purpose,
                    remarks: remarks ?? null,
                    movedAt: new Date(),
                }
            });
            await tx.property.update({
                where: { id },
                data: { location: newLocation }
            });
            return log;
        });
        return res.json({ message: "Handover complete", log: updatedLog });
    }
    catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
// Validation for Disposal
const disposalSchema = z.object({
    type: z.enum(["AUCTION", "DESTROYED", "RETURNED", "TRANSFERRED"]),
    courtOrderRef: z.string().min(1, "Court order reference is required"),
    dateOfDisposal: z.coerce.date(),
    remarks: z.string().optional(),
});
router.post("/property/:id/dispose", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "Property ID is required" });
        }
        // Validate body
        const parsed = disposalSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.issues });
        }
        const { type, courtOrderRef, dateOfDisposal, remarks } = parsed.data;
        // 1. Ensure property exists and is not already disposed
        const property = await prisma.property.findUnique({
            where: { id },
            select: {
                id: true,
                status: true,
                caseId: true,
            },
        });
        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }
        if (property.status === "DISPOSED") {
            return res.status(400).json({ error: "Property already disposed" });
        }
        // 2. Ensure disposal record does not already exist (idempotency)
        const existingDisposal = await prisma.disposal.findUnique({
            where: { propertyId: id },
        });
        if (existingDisposal) {
            return res.status(400).json({ error: "Disposal already recorded" });
        }
        // 3. Create disposal record
        const disposal = await prisma.disposal.create({
            data: {
                propertyId: id,
                type,
                courtOrderRef,
                disposedAt: dateOfDisposal,
                remarks: remarks ?? null,
            },
        });
        // 4. Update property status
        await prisma.property.update({
            where: { id },
            data: {
                status: "DISPOSED",
            },
        });
        // 5. Check if any active properties remain in the case
        const remainingActive = await prisma.property.count({
            where: {
                caseId: property.caseId,
                status: "IN_CUSTODY",
            },
        });
        // 6. If none remain, close the case
        if (remainingActive === 0) {
            await prisma.caseRecord.update({
                where: { id: property.caseId },
                data: { status: "DISPOSED" },
            });
        }
        return res.json({
            message: "Disposal recorded successfully",
            disposal,
        });
    }
    catch (err) {
        console.error("DISPOSAL ERROR:", err);
        return res.status(500).json({
            error: "Failed to process disposal",
        });
    }
});
router.get("/properties/all", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const properties = await prisma.property.findMany({
            where: {
                case: {
                    userId: userId // Only fetch properties linked to cases created by this user
                }
            },
            include: {
                case: {
                    select: {
                        crimeNumber: true,
                        policeStation: true
                    }
                },
                disposal: true // This provides type (AUCTION, etc.), courtOrderRef, and date
            },
            orderBy: {
                // Since Property doesn't have createdAt, we order by status to 
                // keep IN_CUSTODY items at the top
                status: 'asc'
            }
        });
        return res.json({ properties });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch property registry" });
    }
});
router.get("/dashboard-stats", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        // 1. Total Cases for this user
        const totalCases = await prisma.caseRecord.count({
            where: { userId }
        });
        // 2. Total Items currently "IN_CUSTODY" for this user
        const inCustodyCount = await prisma.property.count({
            where: {
                case: { userId },
                status: "IN_CUSTODY"
            }
        });
        // 3. Items marked for "DISPOSAL" (You can define this as IN_CUSTODY items 
        // that are older than a certain date, or simply items in custody)
        // For now, let's define it as items in custody that need attention
        const pendingDisposal = await prisma.property.count({
            where: {
                case: { userId },
                status: "IN_CUSTODY"
            }
        });
        return res.json({
            totalCases,
            totalItems: inCustodyCount,
            pendingDisposal: pendingDisposal,
            stationId: "STN-" + userId.slice(0, 4).toUpperCase() // Placeholder
        });
    }
    catch (err) {
        return res.status(500).json({ error: "Failed to fetch dashboard stats" });
    }
});
// 7. Update Case Details (Only if User is the Creator or an Admin)
router.put("/update/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        if (!id)
            return res.status(400).json({ error: "Case ID is required" });
        const caseRecord = await prisma.caseRecord.findUnique({
            where: { id }
        });
        if (!caseRecord)
            return res.status(404).json({ error: "Case not found" });
        // Authorization check: Only the creator or an ADMIN can modify the case
        // This handles your "Inspector in charge" logic
        if (caseRecord.userId !== userId) {
            const user = await prisma.user.findUnique({ where: { id: userId } });
            if (user?.role !== "ADMIN") {
                return res.status(403).json({ error: "Unauthorized: You do not own this case record." });
            }
        }
        const { ioName, ioId, actLaw, sectionLaw, policeStation } = req.body;
        const updatedCase = await prisma.caseRecord.update({
            where: { id },
            data: { ioName, ioId, actLaw, sectionLaw, policeStation }
        });
        return res.json({ message: "Case updated successfully", case: updatedCase });
    }
    catch (err) {
        return res.status(500).json({ error: "Update failed" });
    }
});
// 8. Search All Accessible Cases
router.get("/search", authMiddleware, async (req, res) => {
    const { q } = req.query;
    const userId = req.userId;
    if (!q || typeof q !== 'string') {
        return res.status(400).json({ error: "Query parameter 'q' is required" });
    }
    try {
        const cases = await prisma.caseRecord.findMany({
            where: {
                userId: userId, // Filter by user to keep it "My Entries"
                OR: [
                    { crimeNumber: { contains: String(q), mode: 'insensitive' } },
                    { ioName: { contains: String(q), mode: 'insensitive' } },
                ]
            },
            include: { _count: { select: { properties: true } } }
        });
        return res.json({ cases });
    }
    catch (err) {
        return res.status(500).json({ error: "Search failed" });
    }
});
export default router;
//# sourceMappingURL=case.js.map