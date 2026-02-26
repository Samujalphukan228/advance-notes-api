import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { connectDB } from "./config/db";

import authRoutes from "./modules/auth/auth.routes";
import notesRoutes from "./modules/notes/notes.routes";
import foldersRoutes from "./modules/folders/folders.routes";
import tagsRoutes from "./modules/tags/tags.routes";
import versionsRoutes from "./modules/versions/versions.routes";

const app = express();

// ✅ Manual CORS - most reliable for Vercel
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://frontend-notes-eight.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization,Cookie");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  next();
});

// ✅ Body parsers
app.use(express.json());
app.use(cookieParser());

// ✅ Connect DB
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// ✅ Routes
app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);
app.use("/folders", foldersRoutes);
app.use("/tags", tagsRoutes);
app.use("/versions", versionsRoutes);

// ✅ Test route
app.get("/test", (req, res) => {
  res.json({ status: "OK" });
});

// ✅ Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: err.message });
});

export default app;