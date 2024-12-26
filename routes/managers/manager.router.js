import express from "express";
import {
  CreateUserController,
  fetchHeatmapController,
  fetchUserController,
  loginUserController,
  updateAboutController,
  updateNameController,
  UpdateUserController,
} from "../../modules/Users/manager.controller.js";

import { validateData } from "../../middleware/zodValidation.middleware.js";
import {
  userLoginSchema,
  userSingupSchema,
} from "../../middleware/zodSchema.js";

const router = express.Router();

router.post("/login", validateData(userLoginSchema), loginUserController);
router.get("/", fetchUserController);
router.post("/signup", validateData(userSingupSchema), CreateUserController);
router.put("/:id", UpdateUserController);
router.patch("/:id/about", updateAboutController);
router.patch("/:id/name", updateNameController);
router.get("/", fetchHeatmapController);

export default router;
