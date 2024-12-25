import express from "express";
import { fetchLeaderboardController } from "../../modules/Leaderboard/leaderboard.controller";

const router = express.Router();

router.post("/", fetchLeaderboardController);

export default router;
