import { Schema, model } from "mongoose";

const ChallengeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ChallengeModel = model("Challenge", ChallengeSchema, "challenges");
