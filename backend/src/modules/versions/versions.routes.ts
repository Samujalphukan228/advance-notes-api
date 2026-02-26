import { Router } from "express";

import { getVersions, restoreVersion } from "./versions.controller";

import { requireAuth } from "../../middleware/auth.middleware";

const router = Router();

router.get("/:noteId", requireAuth, getVersions);

router.post("/restore/:versionId", requireAuth, restoreVersion);

export default router;
