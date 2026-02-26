import { Response } from "express";
import { AuthRequest } from "../../types/express";

import { getVersionsService, restoreVersionService } from "./versions.service";

export async function getVersions(req: AuthRequest, res: Response) {

  const versions = await getVersionsService(
    req.params.noteId as string,
    req.userId as string
  );

  res.json(versions);
}

export async function restoreVersion(req: AuthRequest, res: Response) {

  const note = await restoreVersionService(
    req.params.versionId as string,
    req.userId as string
  );

  res.json(note);
}