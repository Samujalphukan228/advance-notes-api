import jwt from "jsonwebtoken";
import { env } from "../config/env";

export function signAccessToken(userId: string) {

  return jwt.sign(
    { userId },
    env.jwtAccessSecret,
    { expiresIn: env.accessExpire }
  );

}

export function signRefreshToken(userId: string) {

  return jwt.sign(
    { userId },
    env.jwtRefreshSecret,
    { expiresIn: env.refreshExpire }
  );

}

export function verifyRefreshToken(token: string) {

  return jwt.verify(
    token,
    env.jwtRefreshSecret
  ) as { userId: string };

}