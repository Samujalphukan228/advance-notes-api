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

// ✅ Security headers
app.use(helmet());

// ✅ Allowed origins
const allowedOrigins = [
  "https://frontend-notes-eight.vercel.app",
  "http://localhost:5500",
  "http://127.0.0.1:5500",
];

// ✅ Updated CORS
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, mobile)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // ✅ Required for cookies
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle preflight requests
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());

// ✅ Connect DB on every request (for Vercel serverless)
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