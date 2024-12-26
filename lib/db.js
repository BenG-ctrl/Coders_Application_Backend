import mongoose from "mongoose";
import { MONGO_URI } from "./variables.js";

export async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
  }
}
