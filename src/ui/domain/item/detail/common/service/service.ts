import { z } from "zod";
import type * as type from "../common.type";

export const parameterSchema: z.ZodSchema<type.OuterProps> = z.object({
  id: z.string(),
});
