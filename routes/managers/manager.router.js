import express from "express";
import {
  CreateManagerController,
  fetchManagerController,
  fetchManagerHeatmapController,
  loginManagerController,
  updateManagerAboutController,
  UpdateManagerController,
  updateManagerNameController,
} from "../../modules/Users/manager.controller.js";

import { validateData } from "../../middleware/zodValidation.middleware.js";
import {
  userLoginSchema,
  userSingupSchema,
} from "../../middleware/zodSchema.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", validateData(userLoginSchema), loginManagerController);
router.get("/", fetchManagerController);
router.post("/signup", validateData(userSingupSchema), CreateManagerController);
router.put("/:id", UpdateManagerController);
router.patch("/:id/about", authMiddleware, updateManagerAboutController);
router.patch("/:id/name", authMiddleware, updateManagerNameController);
router.get("/", fetchManagerHeatmapController);

export default router;
