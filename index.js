import express from "express";
import coderRouter from "./routes/coders/coder.router.js";
import managerRouter from "./routes/managers/manager.router.js";
import challengeRouter from "./routes/challenges/challenge.router.js";
import helmet from "helmet";

const app = express();

app.use(express.json());

app.use(helmet());

app.use("/coder", coderRouter);

app.use("/manager", managerRouter);

app.use("/challenge", challengeRouter);

app.listen(5000, () => {
  console.log(`Example app listening on port ${5000}`);
});
