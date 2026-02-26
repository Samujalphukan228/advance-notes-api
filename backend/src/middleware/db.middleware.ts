import { Request, Response, NextFunction } from "express";
import { connectDB } from "../config/db";

export async function dbMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
}