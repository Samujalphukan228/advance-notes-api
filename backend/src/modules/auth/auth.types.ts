import { Document } from "mongoose";

export interface Iuser extends Document {
    email: string;
    password: string;
    name: string;
    createdAt: Date;
    updatedAt: Date
}