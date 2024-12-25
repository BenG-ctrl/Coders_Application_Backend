import {
  challengeExists,
  challenges,
  createChallenge,
} from "./services/challenge.service";

const createChallengeController = (request, response) => {
  let checkChallengeExists = challengeExists(request.body.description);
  if (checkChallengeExists)
    return response.status(400).send("Challenge already exists");
  let challengetext = createChallenge(...request.body);
  response.status(201).send(challengetext);
};

const fetchChallengeController = (request, response) => {
  response.status(200).send(challenges);
};

const fetchChallengeIdController = (request, response) => {
  response.status(200).send(challenges.id);
};

const fetchChallengeCategoriesController = (request, response) => {
  response.status(200).send(challenges.category);
};

const fetchCompletedChallengeController = (request, response) => {
  response.status(200).send(countCompletedChallenges(count));
};

const fetchTrendingCategoryController = (request, response) => {
  response.status(200).send(countTrendingCategorys(mostVotesCategory));
};

export {
  createChallengeController,
  fetchChallengeController,
  fetchChallengeIdController,
  fetchChallengeCategoriesController,
  fetchCompletedChallengeController,
  fetchTrendingCategoryController,
};
