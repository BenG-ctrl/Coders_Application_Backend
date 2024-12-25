import { createSubmission, submissionExists } from "./submission.service";

const CreateSubmissionController = (request, response) => {
  const SubExists = submissionExists(request.body.ChallengeId);
  if (SubExists) response.status(400).send("Challenge already exists");
  let Submissiontext = createSubmission(...request.body);
  response.status(201).send(Submissiontext);
};

export { CreateSubmissionController };
