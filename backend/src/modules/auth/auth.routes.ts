import { Router } from "express";

import {
  register,
  login,
  me,
  refresh,
  logout
} from "./auth.controller";

import { validate } from "../../middleware/validate.middleware";

import {
  registerSchema,
  loginSchema
} from "./auth.validation";

import { requireAuth } from "../../middleware/auth.middleware";

const router = Router();


router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

router.get(
  "/me",
  requireAuth,
  me
);

router.post(
  "/refresh",
  refresh
);

router.post(
  "/logout",
  logout
);

export default router;