import { Response } from "express";
import { AuthRequest } from "../../types/express";

import {
  createFolderService,
  getFoldersService,
  updateFolderService,
  deleteFolderService,
} from "./folders.service";

export async function createFolder(req: AuthRequest, res: Response) {
  const folder = await createFolderService(
    req.userId as string,
    req.body.name
  );

  res.json(folder);
}

export async function getFolders(req: AuthRequest, res: Response) {
  const folders = await getFoldersService(
    req.userId as string
  );

  res.json(folders);
}

export async function updateFolder(req: AuthRequest, res: Response) {
  const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  const folder = await updateFolderService(
    id,
    req.userId as string,
    req.body.name
  );

  res.json(folder);
}

export async function deleteFolder(req: AuthRequest, res: Response) {
  const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  await deleteFolderService(
    id,
    req.userId as string
  );

  res.json({
    success: true,
  });
}