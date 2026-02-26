import {
  createFolder,
  findFolders,
  updateFolder,
  deleteFolder,
} from "./folders.repository";

export async function createFolderService(userId: string, name: string) {
  return createFolder({
    userId,
    name,
  });
}

export async function getFoldersService(userId: string) {
  return findFolders(userId);
}

export async function updateFolderService(
  id: string,
  userId: string,
  name: string,
) {
  return updateFolder(id, userId, name);
}

export async function deleteFolderService(id: string, userId: string) {
  return deleteFolder(id, userId);
}
