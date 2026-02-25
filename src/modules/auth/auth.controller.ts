import { Request, Response } from "express";
import { registerUser, loginUser} from "./auth.service";
import { setAuthCookies } from "../../utils/cookies"

export async function register(
    req: Request,
    res: Response
) {
    const { name, email, password} = req.body;

    const result = await registerUser(
        name,
        email,
        password
    );

    setAuthCookies(
        res,
        result.accessToken,
        result.refreshToken
    );

    res.json({
        user: result.user
    })
}


export async function login(
    req: Request,
    res: Response
) {
    const { email, password } = req.body;

    const result = await loginUser(
        email,
        password
    );

    setAuthCookies(
        res,
        result.accessToken,
        result.refreshToken
    );

    res.json({
        user: result.user
    });
}