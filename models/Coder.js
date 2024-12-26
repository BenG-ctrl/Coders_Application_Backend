import { Schema, model } from "mongoose";

const CoderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    Bio: {
      type: String,
      required: false,
    },
    Score: {
      type: number,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      value: "coder",
    },
  },
  {
    timestamps: true,
  }
);

export const CoderModel = model("Coder", CoderSchema, "coders");
