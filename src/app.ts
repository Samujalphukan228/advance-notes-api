import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(cookieParser());

export default app;