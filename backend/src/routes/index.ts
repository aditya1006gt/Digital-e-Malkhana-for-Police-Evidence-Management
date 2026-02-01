import express from "express";
import userRouter from "./user.js";
import caseRouter from "./case.js";
import messageRouter from "./messages.js";
const router = express.Router();

router.use("/user", userRouter);
router.use("/case",caseRouter);
router.use("/message", messageRouter);
export default router;