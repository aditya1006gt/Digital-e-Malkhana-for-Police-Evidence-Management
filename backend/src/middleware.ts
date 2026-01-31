import express from "express";
import jwt from "jsonwebtoken";
import config from "./config.js";
const { JWT_SECRET } = config;
const router = express.Router();
interface JwtPayload {
  userId: string;
}

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

const authMiddleware= async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ error: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({ error: "Token missing" });
    }

    try{
        const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
        req.userId = payload.userId;
        next();
    }catch(err){
        return res.status(403).json({ error: "Invalid token" });
    }
};

export default authMiddleware;