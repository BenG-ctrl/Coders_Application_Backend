import express from "express";
import { CreateSubmissionController } from "../../modules/Submission/submission.controller";

const router = express.Router();

router.post("/", CreateSubmissionController);

export default router;
