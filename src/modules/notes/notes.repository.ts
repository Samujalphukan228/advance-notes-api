import { NoteModel } from "./notes.model";

export async function createNote(data: any) {
    return NoteModel.create(data);
}


export async function findNotes(
    userId: string,
    query: any
) {
    return NoteModel.find({
        userId,
        isDeleted: false,
        ...query
    })
}


export async function findNoteById(
    id: string,
    userId: string
) {
    return NoteModel.findOne({
        _id: id,
        userId
    });
}


export async function updateNote(
    id: string,
    userId: string,
    data: any
) {
    return NoteModel.findByIdAndUpdate(
        {_id: id, userId},
        data,
        { new: true }
    );
}


export async function softDeleteNote(
    id: string,
    userId: string
) {
    return NoteModel.findByIdAndUpdate(
        { _id: id, userId },
        { isDeleted: true }
    );
}