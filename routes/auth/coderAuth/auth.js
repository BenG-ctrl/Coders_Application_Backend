import express from "express";
import verifyToken from "../../middleware/authMiddleware.js";
import {
  userLoginSchema,
  userSingupSchema,
} from "../../../middleware/zodSchema.js";
import bcrypt from "bcrypt";
import { CoderModel } from "../../../models/Coder.js";
import jwt from "jsonwebtoken";
import { coders } from "../../../modules/Users/services/Coder.service.js";

const router = express.Router();

app.post("auth/signup", validateData(userSingupSchema), async (req, res) => {
  let coder = await CoderModel.findOne({ email: req.body.email });
  if (coder) res.status(400).send("User already exists");
  let hashedPassword = await bcrypt.hash(req.body.password, 10);
  let savedCoder = await CoderModel.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  res.status(201).send("Signed up successfully");
  const emailToken = jwt.sign({ id: coder._id, role: coder.role }, "Emailkey");
  emails.verifyUserEmail(req.body.name, req.body.email, emailToken);
  coders
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
  coder.verified = true;
});

app.post("auth/login", validateData(userLoginSchema), async (req, res) => {
  let coder = await CoderModel.findOne({ email: req.body.email });
  if (!coder) return res.status(400).send("User does not exists exists");
  let isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    coder.password
  );
  if (!isPasswordCorrect) return res.status(400).send("Password is incorrect");
  let token = jwt.sign({ id: coder._id, email: user.email }, "SecretKey");
  res.status(200).send({ token });
  if ((coder = verified == true)) {
    let verifiedToken = jwt.verify(
      { id: coder._id, email: user.email },
      "SecretKey"
    );
  }
});
