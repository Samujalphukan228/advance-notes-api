import { FolderModel } from "./folders.model";

export async function createFolder(data: any) {
  return FolderModel.create(data);
}

export async function findFolders(userId: string) {
  return FolderModel.find({
    userId,
  }).sort({ createdAt: 1 });
}

export async function updateFolder(id: string, userId: string, name: string) {
  return FolderModel.findOneAndUpdate(
    { _id: id, userId },

    { name },

    { new: true },
  );
}

export async function deleteFolder(id: string, userId: string) {
  return FolderModel.findOneAndDelete({
    _id: id,
    userId,
  });
}
