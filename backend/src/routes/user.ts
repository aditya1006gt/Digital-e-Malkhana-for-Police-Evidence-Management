import express from "express";
import type { Request } from "express";
import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import authMiddleware from "../middleware.js";
import { z } from "zod";

const { JWT_SECRET } = config;
const router = express.Router(); 

// Signup Route 
const signupSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    rank: z.string().min(1),
    stationId: z.string().min(1),
});
router.post("/signup", async (req, res) => {
    try {
        const validation = signupSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ error: "Invalid inputs", details: validation.error.issues });
        }

        const { username, email, password, firstname, lastname, rank, stationId } = req.body;
        
        const extuser = await prisma.user.findFirst({
            where: { OR: [{ email }, { username }] }
        });

        if (extuser) {
            return res.status(411).json({ error: "Email or Username already exists" });
        }

        const user = await prisma.user.create({
            data: { username, email, password, firstname, lastname, rank, stationId }
        });

        const token = jwt.sign({ userId: user.id }, JWT_SECRET);

        return res.json({
            message: "Officer registered successfully",
            token: token
        });
    } catch (err) {
        return res.status(500).json({ error: "Server error during signup" });
    }
});

// Login Route
const signinSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
router.post("/signin", async (req, res) => {
    try {
        if (!signinSchema.safeParse(req.body).success) {
            return res.status(400).json({ error: "Invalid inputs" });
        }

        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET);

        return res.json({
            message: "Signed in successfully",
            token: token
        });
    } catch (err) {
        return res.status(500).json({ error: "Server error during signin" });
    }
});

// Update Profile Route 
const updateSchema = z.object({
    firstname: z.string().min(1).optional(),
    lastname: z.string().min(1).optional(),
    rank: z.string().optional(),
    stationId: z.string().optional(),
    profilepic: z.string().url().optional(),
});
router.put("/update", authMiddleware, async (req, res) => {
    try {
        if (!updateSchema.safeParse(req.body).success) {
            return res.status(400).json({ error: "Invalid inputs" });
        }

        const userId = req.userId!;
        const { firstname, lastname, rank, stationId, profilepic } = req.body;

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { firstname, lastname, rank, stationId, profilepic },
        });

        return res.json({
            message: "Profile updated successfully",
            user: updatedUser
        });
    } catch (err) {
        return res.status(500).json({ error: "Server error during update" });
    }
});

// Get Current Logged-in Officer Info
router.get("/info", authMiddleware, async (req: Request, res) => {
    try {
        const userId = req.userId!;
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                firstname: true,
                lastname: true,
                profilepic: true,
                email: true,
                username: true,
                rank: true,
                stationId: true,
                role: true,
                _count: {
                    select: {
                        cases: true // Count of cases assigned to this officer
                    }
                }
            },
        });

        if (!user) return res.status(404).json({ error: "User not found" });

        return res.json({ user });
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
});


export default router;