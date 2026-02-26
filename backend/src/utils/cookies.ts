import { Response } from "express";

export function setAuthCookies(
  res: Response,
  accessToken: string,
  refreshToken: string
) {
  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: isProduction,                    // ✅ true on Vercel
    sameSite: isProduction ? "none" : "lax", // ✅ "none" for cross-origin
    path: "/",
    maxAge: 15 * 60 * 1000,                  // 15 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: isProduction,                    // ✅ true on Vercel
    sameSite: isProduction ? "none" : "lax", // ✅ "none" for cross-origin
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000,       // 30 days
  });
}