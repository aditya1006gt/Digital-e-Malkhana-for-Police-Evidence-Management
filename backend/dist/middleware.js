import express from "express";
import jwt from "jsonwebtoken";
import config from "./config.js";
const { JWT_SECRET } = config;
const router = express.Router();
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "Authorization header missing" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Token missing" });
    }
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.userId = payload.userId;
        next();
    }
    catch (err) {
        return res.status(403).json({ error: "Invalid token" });
    }
};
export default authMiddleware;
//# sourceMappingURL=middleware.js.map