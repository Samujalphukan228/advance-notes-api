import { Response } from "express";
import { AuthRequest } from "../../types/express";

import {
  createTagService,
  getTagsService,
  deleteTagService,
} from "./tags.service";

export async function createTag(req: AuthRequest, res: Response) {

  const tag = await createTagService(
    req.userId as string,
    req.body.name
  );

  res.json(tag);
}

export async function getTags(req: AuthRequest, res: Response) {

  const tags = await getTagsService(
    req.userId as string
  );

  res.json(tags);
}

export async function deleteTag(req: AuthRequest, res: Response) {

  await deleteTagService(
    req.params.id as string,
    req.userId as string
  );

  res.json({
    success: true,
  });
}