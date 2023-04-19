import { z } from "zod";
import * as type from "../../ItemEdit.type";

export const formSchema: z.ZodSchema<type.FormValue> = z.object({
  title: z.string().min(1).max(20),
  body: z.string().min(1).max(15),
});

type ToErrorMessages = (p: string | undefined) => Array<string>;
export const toErrorMessages: ToErrorMessages = (p) =>
  [p].map((v) => (v == null ? [] : [v])).flat();
