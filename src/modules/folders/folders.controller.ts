import { Response } from "express";

import { AuthRequest } from "../../types/express";

import {
  createFolderService,
  getFoldersService,
  updateFolderService,
  deleteFolderService,
} from "./folders.service";

export async function createFolder(req: AuthRequest, res: Response) {
  const folder = await createFolderService(req.userId!, req.body.name);

  res.json(folder);
}

export async function getFolders(req: AuthRequest, res: Response) {
  const folders = await getFoldersService(req.userId!);

  res.json(folders);
}

export async function updateFolder(req: AuthRequest, res: Response) {
  const folder = await updateFolderService(
    req.params.id,
    req.userId!,
    req.body.name,
  );

  res.json(folder);
}

export async function deleteFolder(req: AuthRequest, res: Response) {
  await deleteFolderService(req.params.id, req.userId!);

  res.json({
    success: true,
  });
}
