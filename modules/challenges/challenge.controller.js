import {
  challengeExists,
  challenges,
  countCompletedChallenges,
  createChallenge,
} from "./services/challenge.service";

const createChallengeController = async (request, response) => {
  let checkChallengeExists = await challengeExists(request.body.description);
  if (checkChallengeExists)
    return response.status(400).send("Challenge already exists");
  let challengetext = await createChallenge(...request.body);
  response.status(201).send("Challenge successfully created!");
};

const fetchAllChallengeController = (request, response) => {
  response.status(200).send(challenges);
};

const fetchCompletedChallengeController = async (request, response) => {
  let showChallengesToComplete = countCompletedChallenges();
  if ((role = coder && coder._id == request.body.coder._id))
    return await response.status(200).send(showChallengesToComplete);
  else role = manager;
  return challenges == manager._id;
};

const fetchChallengeIdController = (request, response) => {
  response.status(200).send(challenges.id);
};

const fetchChallengeCategoriesController = (request, response) => {
  response.status(200).send(challenges.category);
};

const fetchTrendingCategoryController = (request, response) => {
  response.status(200).send(countTrendingCategorys(mostVotesCategory));
};

export {
  createChallengeController,
  fetchAllChallengeController,
  fetchChallengeIdController,
  fetchChallengeCategoriesController,
  fetchCompletedChallengeController,
  fetchTrendingCategoryController,
};
