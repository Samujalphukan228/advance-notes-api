import mongoose from "mongoose";
import { IFolder } from "./folders.types";

const folderSchema = new mongoose.Schema<IFolder>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FolderModel =
  mongoose.model<IFolder>("Folder", folderSchema);