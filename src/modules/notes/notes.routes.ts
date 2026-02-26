import { Router } from "express";

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "./notes.controller";

import {
  getTrash,
  restoreNote,
  permanentDelete,
  archiveNote,
  unarchiveNote,
  pinNote,
  unpinNote,
  addTag,
  removeTag
} from "./notes.controller";

import { requireAuth } from "../../middleware/auth.middleware";

import { validate } from "../../middleware/validate.middleware";

import { createNoteSchema, updateNoteSchema } from "./notes.validation";

const router = Router();

router.post("/", requireAuth, validate(createNoteSchema), createNote);

router.get("/", requireAuth, getNotes);

router.patch("/:id", requireAuth, validate(updateNoteSchema), updateNote);

router.delete("/:id", requireAuth, deleteNote);

router.get("/trash", requireAuth, getTrash);

router.post("/:id/restore", requireAuth, restoreNote);

router.delete("/:id/permanent", requireAuth, permanentDelete);

router.patch("/:id/archive", requireAuth, archiveNote);

router.patch("/:id/unarchive", requireAuth, unarchiveNote);

router.patch("/:id/pin", requireAuth, pinNote);

router.patch("/:id/unpin", requireAuth, unpinNote);

router.post("/:id/tags", requireAuth, addTag);

router.delete("/:id/tags", requireAuth, removeTag);

export default router;
