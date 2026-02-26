import { Document } from "mongoose";

export interface IFolder extends Document {
    userId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
