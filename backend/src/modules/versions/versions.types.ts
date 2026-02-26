import { Document } from "mongoose";

export interface INoteVersion extends Document {
  noteId: string;

  userId: string;

  title: string;

  content?: string;

  createdAt: Date;
}
