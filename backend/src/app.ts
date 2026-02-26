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

// ✅ 1. CORS - FIRST (using the cors package properly)
const corsOptions = {
  origin: [
    "https://frontend-notes-eight.vercel.app",
    "http://127.0.0.1:5500",
    "http://localhost:5500"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  maxAge: 86400
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ✅ 2. Helmet AFTER cors
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

// ✅ 3. Body parsers
app.use(express.json());
app.use(cookieParser());

// ✅ 4. Connect DB
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("DB Error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// ✅ 5. Routes
app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);
app.use("/folders", foldersRoutes);
app.use("/tags", tagsRoutes);
app.use("/versions", versionsRoutes);

// ✅ 6. Test routes
app.get("/test", (req, res) => {
  res.json({
    status: "OK",
    message: "API working",
  });
});

app.get("/db-test", async (req, res) => {
  res.json({
    mongoState: mongoose.connection.readyState,
    status: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

// ✅ 7. Global error handler
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

export default app;s