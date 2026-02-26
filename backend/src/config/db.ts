import mongoose from "mongoose";
import { env } from "./env";

export async function connectDB() {

  try {

    await mongoose.connect(env.mongoUri);

    console.log("MongoDB Connected");

  } catch (error) {

    console.error("MongoDB Error:", error);

  }

}