import {
  checkEncryption,
  encrypt,
  generateToken,
} from "./services/encryption.service.js";
import { getManagerHeatMap, managers } from "./services/manager.service.js";
import {
  checkIfManagerExists,
  createManager,
} from "./services/manager.service.js";

const CreateManagerController = async (request, response) => {
  //check if user exits
  let ManagerExists = await checkIfManagerExists(request.body.email);
  if (ManagerExists) return response.status(400).send("User already Exists");
  //encrypt password
  let password = encrypt(request.body.password);
  //create user
  let Manager = await createManager({ ...request.body, password });
  response.status(201).send(Manager);
};

const loginManagerController = async (request, response) => {
  try {
    let payload = request.body; //email and password
    //check if User has an account
    let Manager = await checkIfManagerExists(payload.email);
    if (!Manager) return response.status(400).send("User does not exists");
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

const fetchManagerController = (request, response) => {
  response.status(200).send(managers);
};

const fetchManagerHeatmapController = (request, response) => {
  response.status(200).send(getManagerHeatMap(Heatmap));
};

const UpdateManagerController = (request, response) => {
  let index = managers.findIndex((item) => item.id == request.params.id);
  managers[index] = { ...managers[index], ...request.body };
  response.status(202).send("update successful");
};

const updateManagerNameController = (request, response) => {
  response.status(200).send("name updated!");
};

const updateManagerAboutController = (request, response) => {
  response.status(200).send("about updated!");
};

export {
  CreateManagerController,
  loginManagerController,
  fetchManagerController,
  fetchManagerHeatmapController,
  UpdateManagerController,
  updateManagerNameController,
  updateManagerAboutController,
};
