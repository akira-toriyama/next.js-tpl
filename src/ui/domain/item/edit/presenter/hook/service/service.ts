import { z } from "zod";
import * as type from "../../Type";

export const formSchema: z.ZodSchema<type.FormValue> = z.object({
  title: z.string().min(1).max(20),
  body: z.string().min(1).max(15),
});
