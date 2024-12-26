import express from "express";
import { validateData } from "../../../middleware/zodValidation.middleware.js";
import {
  userLoginSchema,
  userSingupSchema,
} from "../../../middleware/zodSchema.js";
import bcrypt from "bcrypt";

import { ManagerModel } from "../../../models/Manager.js";
import jwt from "jsonwebtoken";
import { managers } from "../../../modules/Users/services/manager.service.js";

const router = express.Router();

app.post("auth/signup", validateData(userSingupSchema), async (req, res) => {
  let manager = await Model.findOne({ email: req.body.email });
  if (manager) res.status(400).send("User already exists");
  let hashedPassword = await bcrypt.hash(req.body.password, 10);
  let savedmanager = await ManagerModel.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  res.status(201).send("Signed up successfully");
  const emailToken = jwt.sign(
    { id: coder._id, role: manager.role },
    "Emailkey"
  );
  emails.verifyUserEmail(req.body.name, req.body.email, emailToken);
  managers
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
  coder.verified = true;
});

app.post("auth/login", verifyToken, async (req, res) => {
  let manager = await ManagerModel.findOne({ email: req.body.email });
  if (!manager) return res.status(400).send("User does not exists exists");
  let isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    manager.password
  );
  if (!isPasswordCorrect) return res.status(400).send("Password is incorrect");
  let token = jwt.sign({ id: manager._id, email: manager.email }, "SecretKey");
  res.status(200).send({ token });
});
