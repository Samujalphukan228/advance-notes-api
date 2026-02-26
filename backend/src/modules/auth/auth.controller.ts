import { Request, Response } from "express";
import { registerUser, loginUser} from "./auth.service";
import { setAuthCookies } from "../../utils/cookies";
import { AuthRequest } from "../../types/express";
import { refreshUser, logoutUser } from "./auth.service";
import { signAccessToken } from "../../utils/jwt";


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


export async function me(
  req: AuthRequest,
  res: Response
) {

  res.json({
    userId: req.userId
  });

}



export async function refresh(
  req: Request,
  res: Response
) {

  const refreshToken =
    req.cookies.refreshToken;

  if (!refreshToken) {

    return res.status(401).json({
      message: "Unauthorized"
    });

  }

  const tokens =
    await refreshUser(refreshToken);

  setAuthCookies(
    res,
    tokens.accessToken,
    tokens.refreshToken
  );

  res.json({
    success: true
  });

}



export async function logout(
  req: Request,
  res: Response
) {

  res.clearCookie("accessToken");

  res.clearCookie("refreshToken");

  res.json({
    success: true
  });

}