import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { AuthRequest } from "../types/express";

export function requireAuth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {

  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  try {

    const payload = jwt.verify(
      token,
      env.jwtAccessSecret
    ) as { userId: string };

    req.userId = payload.userId;

    next();

  } catch {

    return res.status(401).json({
      message: "Invalid token"
    });

  }

}