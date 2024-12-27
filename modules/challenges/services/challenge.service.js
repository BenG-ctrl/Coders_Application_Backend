import { ChallengeModel } from "../../../models/Challenge";
import { CoderModel } from "../../../models/Coder";

const challenges = [
  {
    title: "factorial",
    category: "Math",
    description:
      "### Problem Statement:\nCompute the factorial of a non-negative integer `n`, denoted as `n!`. The factorial of `n` is the product of all positive integers less than or equal to `n`.\n\n### Example:\nFor example, the factorial of `5` is `5! = 5 * 4 * 3 * 2 * 1 = 120`.\n\n### Constraints:\n- The input `n` is a non-negative integer.\n- `0 <= n <= 20`.\n\n### Approach:\nA simple approach to compute the factorial of `n` is to use recursion. We define a recursive function `factorial(n)` that returns the factorial of `n`. The base case of the recursion is when `n` is `0` or `1`, in which case the factorial is `1`. Otherwise, we recursively compute the factorial of `n-1` and multiply it by `n`.\n\n### Implementation:\nTo implement this, we can define a recursive function `factorial(n)` that takes a non-negative integer `n` as input and returns its factorial. In the function, we handle the base case when `n` is `0` or `1`, and recursively call `factorial(n-1)` for other values of `n`. Finally, we return the product of `n`and the factorial of `n-1`.",
    level: "Hard",
    code: {
      function_name: "factorial",
      code_text: [
        { language: "py", text: "def factorial(n):\n return 1" },
        { language: "js", text: "function factorial(n) {\n return 1\n}" },
      ],
      inputs: [{ name: "n", type: "number" }],
    },
    tests: [{ weight: 0.8, inputs: [{ name: "n", value: 5 }], output: 120 }],
  },
];

const challengeExists = (description) => {
  return ChallengeModel.findOne({ description });
};

const createChallenge = (data) => {
  return ChallengeModel.create({ data });
};

const countCompletedChallenges = () => {
  if ((Coder.status = true)) {
    challenges.display((Coder.status = false));
  }
  return count;
};

const countTrendingCategorys = () => {
  let countTrend = 0;
  if ((Category === mostVotesCategory) == true) {
    mostVotesCategory = Category.length;
  }
  return count;
};

export {
  challengeExists,
  createChallenge,
  challenges,
  countCompletedChallenges,
};
