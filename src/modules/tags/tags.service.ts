import { createTag, findTags, deleteTag } from "./tags.repository";

export async function createTagService(userId: string, name: string) {
  return createTag({
    userId,
    name,
  });
}

export async function getTagsService(userId: string) {
  return findTags(userId);
}

export async function deleteTagService(id: string, userId: string) {
  return deleteTag(id, userId);
}
