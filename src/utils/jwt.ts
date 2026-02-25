import jwt from "jsonwebtoken";
import { env } from "../config/env";

export function signAccessToken(userId: string) {
    return jwt.sign(
        { userId },
        env.jwtAccessSecret,
        { expiresIn: env.accessExpire as jwt.SignOptions["expiresIn"] }
    );
}

export function signRefreshToken(userId: string) {
    return jwt.sign(
        { userId },
        env.jwtRefreshSecret,
        { expiresIn: env.refreshExpire as jwt.SignOptions["expiresIn"] }
    );
}

export function verifyAccessToken(token: string) {
    return jwt.verify(token, env.jwtAccessSecret);
}