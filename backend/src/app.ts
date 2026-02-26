import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import { connectDB } from "./config/db";

import authRoutes from "./modules/auth/auth.routes";
import notesRoutes from "./modules/notes/notes.routes";
import foldersRoutes from "./modules/folders/folders.routes";
import tagsRoutes from "./modules/tags/tags.routes";
import versionsRoutes from "./modules/versions/versions.routes";

const app = express();

app.use(helmet());

app.use(cors({
  origin: "https://frontend-notes-eight.vercel.app",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// 👇 THIS IS THE FIX - Connect DB on every request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Routes
app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);
app.use("/folders", foldersRoutes);
app.use("/tags", tagsRoutes);
app.use("/versions", versionsRoutes);

// Test routes
app.get("/test", (req, res) => {
  res.json({
    status: "OK",
    message: "API working"
  });
});

app.get("/db-test", async (req, res) => {
  res.json({
    mongoState: mongoose.connection.readyState,
    status: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

export default app;