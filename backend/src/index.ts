import "dotenv/config";
import { prisma } from "./lib/prisma.js";
import express from "express";
import cors from "cors";
import rootRouter from "./routes/index.js";
import type { Request, Response } from "express";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
