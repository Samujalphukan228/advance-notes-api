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

// ✅ Handle preflight first
app.options("*", (req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://frontend-notes-eight.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Cookie"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "86400");
  res.status(200).end();
});

// ✅ Apply CORS headers to ALL requests
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://frontend-notes-eight.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Cookie"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// ✅ Helmet after CORS
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

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

// ✅ Test routes
app.get("/test", (req, res) => {
  res.json({
    status: "OK",
    message: "API working",
  });
});

app.get("/db-test", async (req, res) => {
  res.json({
    mongoState: mongoose.connection.readyState,
    status:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

// ✅ Global error handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Global error:", err.message);
    res.status(500).json({
      error: "Internal server error",
      message: err.message,
    });
  }
);

export default app;