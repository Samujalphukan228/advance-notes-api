import mongoose from "mongoose";
import { INote } from "./notes.types";

const noteSchema = new mongoose.Schema<INote>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,   // ✅ FIXED
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
    },

    folderId: {
      type: mongoose.Schema.Types.ObjectId,   // ✅ FIXED
    },

    tags: [
      {
        type: mongoose.Schema.Types.ObjectId, // ✅ FIXED
        ref: "Tag",
      },
    ],

    isArchived: {
      type: Boolean,
      default: false,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    isPinned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const NoteModel =
  mongoose.model<INote>("Note", noteSchema);