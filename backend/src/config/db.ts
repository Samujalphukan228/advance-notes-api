import mongoose from "mongoose";
import { env } from "./env";

let isConnected = false;

export async function connectDB() {
  // Skip if already connected
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(env.mongoUri);
    isConnected = true;
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("MongoDB Error:", error);
    throw error;
  }
}