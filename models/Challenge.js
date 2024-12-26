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
    user: {
      type: Schema.types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const ChallengeModel = model("Challenge", ChallengeSchema, "challenges");
