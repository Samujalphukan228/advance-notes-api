import { NoteModel } from "./notes.model";

export async function createNote(data: any) {
  return NoteModel.create(data);
}

export async function findNotes(userId: string, query: any) {
  return NoteModel.find({
    userId,
    isDeleted: false,
    ...query,
  });
}

export async function findNoteById(id: string, userId: string) {
  return NoteModel.findOne({
    _id: id,
    userId,
  });
}

export async function updateNote(id: string, userId: string, data: any) {
  return NoteModel.findByIdAndUpdate({ _id: id, userId }, data, { new: true });
}

export async function softDeleteNote(id: string, userId: string) {
  return NoteModel.findByIdAndUpdate({ _id: id, userId }, { isDeleted: true });
}

export async function findTrashNotes(userId: string) {
  return NoteModel.find({
    userId,
    isDeleted: true,
  }).sort({ updatedAt: -1 });
}

export async function restoreNote(id: string, userId: string) {
  return NoteModel.findOneAndUpdate(
    { _id: id, userId },
    { isDeleted: false },
    { new: true },
  );
}

export async function permanentDeleteNote(id: string, userId: string) {
  return NoteModel.findOneAndDelete({
    _id: id,
    userId,
  });
}

export async function archiveNote(id: string, userId: string, value: boolean) {
  return NoteModel.findOneAndUpdate(
    { _id: id, userId },
    { isArchived: value },
    { new: true },
  );
}

export async function pinNote(id: string, userId: string, value: boolean) {
  return NoteModel.findOneAndUpdate(
    { _id: id, userId },
    { isPinned: value },
    { new: true },
  );
}
