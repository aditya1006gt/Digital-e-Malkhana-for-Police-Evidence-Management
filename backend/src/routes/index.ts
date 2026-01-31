import express from "express";
import userRouter from "./user.js";
import caseRouter from "./case.js";
const router = express.Router();

router.use("/user", userRouter);
router.use("/case",caseRouter);

export default router;