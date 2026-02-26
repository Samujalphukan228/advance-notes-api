import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes"
import notesRoutes from "./modules/notes/notes.routes"

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use("/auth", authRoutes)
app.use("/notes", notesRoutes)

export default app;