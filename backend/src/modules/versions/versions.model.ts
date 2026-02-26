import mongoose from "mongoose";
import { INoteVersion } from "./versions.types";

const versionSchema = new mongoose.Schema<INoteVersion>(
  {
    noteId: {
      type: mongoose.Schema.Types.ObjectId,   // ✅ FIXED
      required: true,
      index: true,
    },

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
  },
  {
    timestamps: true,
  }
);

export const VersionModel =
  mongoose.model<INoteVersion>(
    "Version",
    versionSchema
  );