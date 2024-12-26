import { Schema, model } from "mongoose";

const ManagerSchema = new Schema(
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
    verified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      value: "manager",
    },
  },
  {
    timestamps: true,
  }
);

export const ManagerModel = model("Manager", ManagerSchema, "Manager");
