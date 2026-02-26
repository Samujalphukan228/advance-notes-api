import { VersionModel } from "./versions.model";

export async function createVersion(data: any) {
  return VersionModel.create(data);
}

export async function getVersions(noteId: string, userId: string) {
  return VersionModel.find({
    noteId,
    userId,
  }).sort({ createdAt: -1 });
}

export async function getVersionById(versionId: string, userId: string) {
  return VersionModel.findOne({
    _id: versionId,
    userId,
  });
}
