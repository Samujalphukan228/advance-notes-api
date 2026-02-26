import { Router } from "express";

import { createTag, getTags, deleteTag } from "./tags.controller";

import { requireAuth } from "../../middleware/auth.middleware";

import { validate } from "../../middleware/validate.middleware";

import { createTagSchema } from "./tags.validation";

const router = Router();

router.post("/", requireAuth, validate(createTagSchema), createTag);

router.get("/", requireAuth, getTags);

router.delete("/:id", requireAuth, deleteTag);

export default router;
