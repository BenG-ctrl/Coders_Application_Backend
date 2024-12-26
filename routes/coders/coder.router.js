import express from "express";
import { validateData } from "../../middleware/zodValidation.middleware.js";
import {
  userLoginSchema,
  userSingupSchema,
} from "../../middleware/zodSchema.js";
import {
  CreateCoderController,
  fetchCoderController,
  fetchHeatmapCoderController,
  loginCoderController,
  UpdateCoderController,
  updateCoderNameController,
} from "../../modules/Users/services/coder.controller.js";

const router = express.Router();

router.post("/login", validateData(userLoginSchema), loginCoderController);
router.get("/", fetchCoderController);
router.post("/signup", validateData(userSingupSchema), CreateCoderController);
router.put("/:id", UpdateCoderController);
router.patch("/:id/about", UpdateCoderController);
router.patch("/:id/name", updateCoderNameController);
router.get("/", fetchHeatmapCoderController);

export default router;
