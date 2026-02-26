import dotenv from "dotenv";

dotenv.config();

function required(key: string): string {
    const value = process.env[key];

    if (!value) {
        throw new Error(`Missing env variable ${key}`);
    }

    return value;
}

export const env = {
    port: Number(process.env.PORT) || 5000,

    mongoUri: required("MONGO_URI"),

    jwtAccessSecret: required("JWT_ACCESS_SECRET"),
    jwtRefreshSecret: required("JWT_REFRESH_SECRET"),

    accessExpire: required("ACCESS_TOKEN_EXPIRES"),
    refreshExpire: required("REFRESH_TOKEN_EXPIRES"),

    nodeEnv: process.env.NODE_ENV || "development",

    cookieDomain: process.env.COOKIE_DOMAIN || "localhost"
};