import { Document, Types } from "mongoose";

export interface INoteVersion extends Document {

  noteId: Types.ObjectId;   // ✅ FIXED

  userId: Types.ObjectId;   // ✅ FIXED

  title: string;

  content?: string;

  createdAt: Date;

  updatedAt: Date;          // ✅ ADD (timestamps require it)
}