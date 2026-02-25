import { Request, Response } from "express";
import { registerUser, loginUser} from "./auth.service";
import { setAuthCookies } from "../../utils/cookies"

export as