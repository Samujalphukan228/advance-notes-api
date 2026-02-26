import { Document, Types } from "mongoose";

export interface INote extends Document {

  userId: Types.ObjectId;        // ✅ FIXED

  title: string;

  content?: string;

  folderId?: Types.ObjectId;     // ✅ FIXED

  tags?: Types.ObjectId[];       // ✅ ADDED (missing before)

  isArchived: boolean;

  isDeleted: boolean;

  isPinned: boolean;

  createdAt: Date;

  updatedAt: Date;
}