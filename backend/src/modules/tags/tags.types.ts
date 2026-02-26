import { Document } from "mongoose";

export interface ITag extends Document {
  userId: string;

  name: string;

  createdAt: Date;

  updatedAt: Date;
}
