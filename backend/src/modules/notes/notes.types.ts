import { Document } from "mongoose";

export interface INote extends Document {
    userId: string;
    title: string;
    content?: string;
    folderId?: string;
    isArchived: boolean;
    isDeleted: boolean;
    isPinned: boolean;
    createdAt: Date;
    updatedAt: Date;
} 