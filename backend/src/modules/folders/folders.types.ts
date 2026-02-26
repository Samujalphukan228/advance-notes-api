import { Document, Types } from "mongoose";

export interface IFolder extends Document {
  userId: Types.ObjectId;   // ✅ FIXED
  name: string;
  createdAt: Date;
  updatedAt: Date;
}