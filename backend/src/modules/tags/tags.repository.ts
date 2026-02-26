import { TagModel } from "./tags.model";

export async function createTag(data: any) {
  return TagModel.create(data);
}

export async function findTags(userId: string) {
  return TagModel.find({
    userId,
  });
}

export async function deleteTag(id: string, userId: string) {
  return TagModel.findOneAndDelete({
    _id: id,
    userId,
  });
}
