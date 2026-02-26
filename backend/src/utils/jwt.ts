import jwt from "jsonwebtoken";
import { env } from "../config/env";

export function signAccessToken(userId: string) {

  return jwt.sign(
    { userId },
    env.jwtAccessSecret as string,
    {
      expiresIn: env.accessExpire as any,
    }
  );

}

export function signRefreshToken(userId: string) {

  return jwt.sign(
    { userId },
    env.jwtRefreshSecret as string,
    {
      expiresIn: env.refreshExpire as any,
    }
  );

}

export function verifyRefreshToken(token: string) {

  return jwt.verify(
    token,
    env.jwtRefreshSecret as string
  ) as { userId: string };

}