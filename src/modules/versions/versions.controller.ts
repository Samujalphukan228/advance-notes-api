import { Response } from "express";

import { AuthRequest } from "../../types/express";

import { getVersionsService, restoreVersionService } from "./versions.service";

export async function getVersions(req: AuthRequest, res: Response) {
  const versions = await getVersionsService(req.params.noteId, req.userId!);

  res.json(versions);
}

export async function restoreVersion(req: AuthRequest, res: Response) {
  const note = await restoreVersionService(req.params.versionId, req.userId!);

  res.json(note);
}
