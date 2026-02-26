import mongoose from "mongoose";
import { ITag } from "./tags.types";

const tagSchema = new mongoose.Schema<ITag>(
  {
    userId: {
      type: mongoose.Types.ObjectId,
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
  },
);

export const TagModel = mongoose.model<ITag>("Tag", tagSchema);
