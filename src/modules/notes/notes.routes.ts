import { Router } from "express";

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "./notes.controller";

import { requireAuth } from "../../middleware/auth.middleware";

import { validate } from "../../middleware/validate.middleware";

import { createNoteSchema, updateNoteSchema } from "./notes.validation";

const router = Router();

router.post("/", requireAuth, validate(createNoteSchema), createNote);

router.get("/", requireAuth, getNotes);

router.patch("/:id", requireAuth, validate(updateNoteSchema), updateNote);

router.delete("/:id", requireAuth, deleteNote);

export default router;
