import { Response } from "express";
import { env } from "../config/env";

export function setAuthCookies(
  res: Response,
  accessToken: string,
  refreshToken: string
) {
  const isProduction = env.nodeEnv === "production";

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: isProduction,              // ✅ true on Vercel (HTTPS)
    sameSite: isProduction ? "none" : "lax", // ✅ "none" for cross-origin
    path: "/",
    maxAge: 15 * 60 * 1000,           // 15 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: isProduction,              // ✅ true on Vercel (HTTPS)
    sameSite: isProduction ? "none" : "lax", // ✅ "none" for cross-origin
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
}