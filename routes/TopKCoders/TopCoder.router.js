import express from "express";
import { fetchTopCodersController } from "../../modules/TopCoders/topCoders.controller";

const router = express.Router();

router.post("/", fetchTopCodersController);

export default router;
