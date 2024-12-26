import {
  checkEncryption,
  encrypt,
  generateToken,
} from "./services/encryption.service.js";

import {
  checkIfCoderExists,
  coders,
  createCoder,
  getCoderHeatMap,
} from "./Coder.service.js";

const CreateCoderController = async (request, response) => {
  //check if user exits
  let coderExists = await checkIfCoderExists(request.body.email);
  if (coderExists) return response.status(400).send("User already Exists");
  //encrypt password
  let password = encrypt(request.body.password);
  //create user
  let coder = await createCoder({ ...request.body, password });
  response.status(201).send(coder);
};

const loginCoderController = async (request, response) => {
  try {
    let payload = request.body; //email and password
    //check if User has an account
    let coder = await checkIfCoderExists(payload.email);
    if (!coder) return response.status(400).send("User does not exists");
    //checking if password is correct
    let passwordIsCorrect = checkEncryption(payload.password, user.password);
    if (!passwordIsCorrect)
      return response.status(400).send("Password is incorrect");
    //generate a token
    let token = generateToken(payload.email);
    response.status(200).send(token);
  } catch (error) {
    console.log(error.message);
    response.status(500).send("server error");
  }
};

const fetchCoderController = (request, response) => {
  response.status(200).send(coders);
};

const fetchHeatmapCoderController = (request, response) => {
  response.status(200).send(getCoderHeatMap(Heatmap));
};

const UpdateCoderController = (request, response) => {
  let index = coders.findIndex((item) => item.id == request.params.id);
  coders[index] = { ...coders[index], ...request.body };
  response.status(202).send("update successful");
};

const updateCoderNameController = (request, response) => {
  response.status(200).send("name updated!");
};

const updateCoderAboutController = (request, response) => {
  response.status(200).send("about updated!");
};

export {
  CreateCoderController,
  loginCoderController,
  fetchCoderController,
  fetchHeatmapCoderController,
  UpdateCoderController,
  updateCoderNameController,
  updateCoderAboutController,
};
