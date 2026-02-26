import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
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
app.use(cookieParser()); // FIXED

app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);
app.use("/folders", foldersRoutes);
app.use("/tags", tagsRoutes);
app.use("/versions", versionsRoutes);

app.get("/test", (req, res) => {
 res.json({
  status: "OK",
  message: "API working"
 });
});

export default app;