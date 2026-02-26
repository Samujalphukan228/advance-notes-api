import mongoose from "mongoose";
import { Iuser } from "./auth.types";

const userSchema = new mongoose.Schema<Iuser>(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

export const UserModel = mongoose.model<Iuser>(
    "User",
    userSchema
)