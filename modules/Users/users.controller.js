import {
  checkEncryption,
  encrypt,
  generateToken,
} from "./services/encryption.service.js";
import {
  checkIfUserExists,
  createUser,
  getHeatMap,
  users,
} from "./services/user.service.js";

const CreateUserController = (request, response) => {
  //check if user exits
  let userExists = checkIfUserExists(request.body.email);
  if (userExists) return response.status(400).send("User already Exists");
  //encrypt password
  let password = encrypt(request.body.password);
  //create user
  let user = createUser({ ...request.body, password });
  response.status(201).send(user);
};

const loginUserController = (request, response) => {
  try {
    let payload = request.body; //email and password
    //check if User has an account
    let user = checkIfUserExists(payload.email);
    if (!user) return response.status(400).send("User does not exists");
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

const fetchUserController = (request, response) => {
  response.status(200).send(users);
};

const fetchHeatmapController = (request, response) => {
  response.status(200).send(getHeatMap(Heatmap));
};

const UpdateUserController = (request, response) => {
  let index = users.findIndex((item) => item.id == request.params.id);
  users[index] = { ...users[index], ...request.body };
  response.status(202).send("update successful");
};

const updateNameController = (request, response) => {
  response.status(200).send("name updated!");
};

const updateAboutController = (request, response) => {
  response.status(200).send("about updated!");
};

export {
  CreateUserController,
  fetchUserController,
  UpdateUserController,
  loginUserController,
  updateAboutController,
  updateNameController,
  fetchHeatmapController,
};
