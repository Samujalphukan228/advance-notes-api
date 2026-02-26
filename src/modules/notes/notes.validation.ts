import { z } from "zod";

export const createNoteSchema = z.object({
    title: z.string().min(1),
    content: z.string().optional(),
    folderId: z.string().optional()
});

export const updateNoteSchema = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    isArchived: z.boolean().optional(),
    isPinned: z.boolean().optional()
});