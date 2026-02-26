import {
  createVersion,
  getVersions,
  getVersionById,
} from "./versions.repository";

import { updateNote } from "../notes/notes.repository";

export async function saveVersionService(note: any, userId: string) {
  return createVersion({
    noteId: note._id,
    userId,

    title: note.title,
    content: note.content,
  });
}

export async function getVersionsService(noteId: string, userId: string) {
  return getVersions(noteId, userId);
}

export async function restoreVersionService(versionId: string, userId: string) {
  const version = await getVersionById(versionId, userId);

  if (!version) {
    throw new Error("Version not found");
  }

  return updateNote(
    version.noteId,
    userId,

    {
      title: version.title,
      content: version.content,
    },
  );
}
