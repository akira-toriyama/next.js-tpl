import { z } from "zod";
import type * as type from "../common.type";

const schema: z.ZodSchema<type.OuterProps> = z.object({
  id: z.string(),
});

export const isValidParam = (p: unknown): p is type.OuterProps =>
  schema.safeParse(p).success;
