import express from "express";
import coderRouter from "./routes/coders/coder.router.js";
import managerRouter from "./routes/managers/manager.router.js";
import challengeRouter from "./routes/challenges/challenge.router.js";
import helmet from "helmet";
import { connectToDB } from "./lib/db.js";
import { UserModel } from "./models/Coder.js";
import { ChallengeModel } from "./models/Challenge.js";

const app = express();

app.use(express.json());

app.use(helmet());

app.use("/coder", coderRouter);

app.post("/users", async (req, res) => {
  let user = await UserModel.create({
    name: "Ben",
    email: "Ben@gmail.com",
    password: "passkey",
    isActive: true,
  });
  res.status(201).send(user);
});

app.post("/challenges", async (req, res) => {
  let challenge = await ChallengeModel.create({
    title: "Ben",
    Category: "Human",
    Description: "safkdjsfjfksdlfsljkfdlksfkldlsfjdslqasdd",
    user: "676d2427c46dc8da7fe17163",
  });
  res.status(201).send(challenge);
});

app.get("/challenges/:id", async (req, res) => {
  let challenge = await ChallengeModel.findById(req.params.id).populate({
    path: "user",
    select: "name email",
  });
});

app.use("/manager", managerRouter);

app.use("/challenge", challengeRouter);

app.listen(5000, () => {
  console.log(`Example app listening on port ${5000}`);
  connectToDB();
});
