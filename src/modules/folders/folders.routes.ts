import { Router } from "express";

import {
  createFolder,
  getFolders,
  updateFolder,
  deleteFolder,
} from "./folders.controller";

import { requireAuth } from "../../middleware/auth.middleware";

import { validate } from "../../middleware/validate.middleware";

import { createFolderSchema, updateFolderSchema } from "./folders.validation";

const router = Router();

router.post("/", requireAuth, validate(createFolderSchema), createFolder);

router.get("/", requireAuth, getFolders);

router.patch("/:id", requireAuth, validate(updateFolderSchema), updateFolder);

router.delete("/:id", requireAuth, deleteFolder);

export default router;
