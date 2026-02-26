import { hashPassword, verifyPassword } from "../../utils/hash";
import { createUser, findUserByEmail } from "./auth.repository";
import { signAccessToken, signRefreshToken } from "../../utils/jwt";
import { verifyRefreshToken } from "../../utils/jwt"

export async function registerUser(
    name: string,
    email: string,
    password: string
) {
    const exists = await findUserByEmail(email);

    if (exists) {
        throw new Error("Email already exists");
    }

    const hashed = await hashPassword(password);

    const user = await createUser({
        name,
        email,
        password: hashed
    });

    const accessToken = signAccessToken(user.id);

    const refreshToken = signRefreshToken(user.id);

    return {
        user,
        accessToken,
        refreshToken
    };
}


export async function loginUser(
    email: string,
    password: string
) {
    const user = await findUserByEmail(email);

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const valid = await verifyPassword(
        user.password,
        password
    );

    const accessToken = signAccessToken(user.id);

    const refreshToken = signRefreshToken(user.id);

    return {
        user,
        accessToken,
        refreshToken
    };
}


export async function refreshUser(
    refreshToken: string
) {

    const payload =
    verifyRefreshToken(refreshToken);

    const accessToken =
        signAccessToken(payload.userId);

    const newRefreshToken =
        signRefreshToken(payload.userId);

    return {
        accessToken,
        refreshToken: newRefreshToken
    };

}

export function logoutUser() {
    return true;
}