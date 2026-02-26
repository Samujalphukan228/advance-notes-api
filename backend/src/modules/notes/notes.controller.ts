import { Response } from "express";
import { AuthRequest } from "../../types/express";

import {
  getTrashService,
  restoreNoteService,
  permanentDeleteService,
  archiveNoteService,
  pinNoteService,
  createNoteService,
  getNotesService,
  updateNoteService,
  deleteNoteService,
  addTagService,
  removeTagService,
} from "./notes.service";

export async function createNote(req: AuthRequest, res: Response) {
  const note = await createNoteService(
    req.userId as string,
    req.body
  );

  res.json(note);
}

export async function getNotes(req: AuthRequest, res: Response) {

  const search = req.query.search as string;

  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.limit) || 10;

  const notes = await getNotesService(
    req.userId as string,
    search,
    page,
    limit
  );

  res.json(notes);
}

export async function updateNote(req: AuthRequest, res: Response) {

  const note = await updateNoteService(
    req.params.id as string,
    req.userId as string,
    req.body
  );

  res.json(note);
}

export async function deleteNote(req: AuthRequest, res: Response) {

  await deleteNoteService(
    req.params.id as string,
    req.userId as string
  );

  res.json({
    success: true,
  });
}

export async function getTrash(req: AuthRequest, res: Response) {

  const notes = await getTrashService(
    req.userId as string
  );

  res.json(notes);
}

export async function restoreNote(req: AuthRequest, res: Response) {

  const note = await restoreNoteService(
    req.params.id as string,
    req.userId as string
  );

  res.json(note);
}

export async function permanentDelete(req: AuthRequest, res: Response) {

  await permanentDeleteService(
    req.params.id as string,
    req.userId as string
  );

  res.json({
    success: true,
  });
}

export async function archiveNote(req: AuthRequest, res: Response) {

  const note = await archiveNoteService(
    req.params.id as string,
    req.userId as string,
    true
  );

  res.json(note);
}

export async function unarchiveNote(req: AuthRequest, res: Response) {

  const note = await archiveNoteService(
    req.params.id as string,
    req.userId as string,
    false
  );

  res.json(note);
}

export async function pinNote(req: AuthRequest, res: Response) {

  const note = await pinNoteService(
    req.params.id as string,
    req.userId as string,
    true
  );

  res.json(note);
}

export async function unpinNote(req: AuthRequest, res: Response) {

  const note = await pinNoteService(
    req.params.id as string,
    req.userId as string,
    false
  );

  res.json(note);
}

export async function addTag(req: AuthRequest, res: Response) {

  const note = await addTagService(
    req.params.id as string,
    req.userId as string,
    req.body.tagId
  );

  res.json(note);
}

export async function removeTag(req: AuthRequest, res: Response) {

  const note = await removeTagService(
    req.params.id as string,
    req.userId as string,
    req.body.tagId
  );

  res.json(note);
}