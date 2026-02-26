import {
  createNote,
  findNotes,
  updateNote,
  softDeleteNote,
} from "./notes.repository";

import {
  findTrashNotes,
  restoreNote,
  permanentDeleteNote,
  archiveNote,
  pinNote,
} from "./notes.repository";

import { addTagToNote, removeTagFromNote } from "./notes.repository";

export async function createNoteService(userId: string, data: any) {
  return createNote({
    ...data,
    userId,
  });
}

export async function getNotesService(userId: string, options: any) {
  const { search, tag, folder, page = 1, limit = 10 } = options;

  const query: any = {
    userId,
    isDeleted: false,
  };

  if (search) {
    query.title = {
      $regex: search,
      $options: "i",
    };
  }

  if (tag) {
    query.tags = tag;
  }

  if (folder) {
    query.folderId = folder;
  }

  const skip = (page - 1) * limit;

  return NoteModel.find(query)

    .skip(skip)

    .limit(limit)

    .sort({ createdAt: -1 });
}

export async function updateNoteService(id: string, userId: string, data: any) {
  return updateNote(id, userId, data);
}

export async function deleteNoteService(id: string, userId: string) {
  return softDeleteNote(id, userId);
}

export async function getTrashService(userId: string) {
  return findTrashNotes(userId);
}

export async function restoreNoteService(id: string, userId: string) {
  return restoreNote(id, userId);
}

export async function permanentDeleteService(id: string, userId: string) {
  return permanentDeleteNote(id, userId);
}

export async function archiveNoteService(
  id: string,
  userId: string,
  value: boolean,
) {
  return archiveNote(id, userId, value);
}

export async function pinNoteService(
  id: string,
  userId: string,
  value: boolean,
) {
  return pinNote(id, userId, value);
}

export async function addTagService(
  noteId: string,
  userId: string,
  tagId: string,
) {
  return addTagToNote(noteId, userId, tagId);
}

export async function removeTagService(
  noteId: string,
  userId: string,
  tagId: string,
) {
  return removeTagFromNote(noteId, userId, tagId);
}
