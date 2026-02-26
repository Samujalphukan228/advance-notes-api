import mongoose from "mongoose";
import { ITag } from "./tags.types";

const tagSchema = new mongoose.Schema<ITag>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,   // ✅ FIXED
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

export const TagModel =
  mongoose.model<ITag>("Tag", tagSchema);