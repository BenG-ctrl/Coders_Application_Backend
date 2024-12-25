const fetchTopCodersController = (request, response, id) => {
  response.status(200).send(TopCodersLeaderboard);
};

export { fetchLeaderboardController };
