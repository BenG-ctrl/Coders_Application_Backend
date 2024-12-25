const fetchLeaderboardController = (request, response) => {
  response.status(200).send(Leaderboard);
};

export { fetchLeaderboardController };
