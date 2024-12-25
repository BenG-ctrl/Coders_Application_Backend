import express from "express";
import {
  createChallengeController,
  fetchChallengeCategoriesController,
  fetchChallengeController,
  fetchChallengeIdController,
  fetchCompletedChallengeController,
} from "../../modules/challenges/challenge.controller";
import { validateData } from "../../middleware/zodValidation.middleware";
import { challengeCreateSchema } from "../../middleware/zodSchema";

const router = express.Router();

router.post(
  "/",
  validateData(challengeCreateSchema),
  createChallengeController
);
router.get("/", fetchChallengeController);
router.get("/:id", fetchChallengeIdController);
router.get("/", fetchChallengeCategoriesController);
router.get("/", fetchCompletedChallengeController);

export default router;
