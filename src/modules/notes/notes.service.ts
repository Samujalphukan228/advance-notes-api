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

export async function createNoteService(userId: string, data: any) {
  return createNote({
    ...data,
    userId,
  });
}

export async function getNotesService(
  userId: string,
  search?: string,
  page = 1,
  limit = 10,
) {
  const query: any = {};

  if (search) {
    query.title = {
      $regex: search,
      $options: "i",
    };
  }

  const skip = (page - 1) * limit;

  const notes = await findNotes(userId, query)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  return notes;
}

export async function updateNoteService(id: string, userId: string, data: any) {
  return updateNote(id, userId, data);
}

export async function deleteNoteService(id: string, userId: string) {
  return softDeleteNote(id, userId);
}


export async function getTrashService(
  userId: string
) {

  return findTrashNotes(userId);

}



export async function restoreNoteService(
  id: string,
  userId: string
) {

  return restoreNote(
    id,
    userId
  );

}



export async function permanentDeleteService(
  id: string,
  userId: string
) {

  return permanentDeleteNote(
    id,
    userId
  );

}



export async function archiveNoteService(
  id: string,
  userId: string,
  value: boolean
) {

  return archiveNote(
    id,
    userId,
    value
  );

}



export async function pinNoteService(
  id: string,
  userId: string,
  value: boolean
) {

  return pinNote(
    id,
    userId,
    value
  );

}