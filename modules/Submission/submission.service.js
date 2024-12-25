const Submission = [
  {
    challenge_id: "65feaac34c7c0fa50a47fb3e",
    lang: "py",
    code: "def factorial(n):\n\tif n == 0: return 2 \n\treturn n *factorial(n-1)",
  },
];

const submissionExists = (ChallengeId) => {
  return Submission.find((item) => item.ChallengeId == ChallengeId);
};

const createSubmission = (data) => {
  let Sub = { ...data };
  Submission.push(Sub);
  return Sub;
};

export { submissionExists, Submission, createSubmission };
