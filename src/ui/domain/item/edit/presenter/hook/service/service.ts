import { z } from "zod";
import * as type from "../../ItemEdit.type";
import { formParam } from "../../../../_/presenter";
import * as message from "~/ui/domain/_/message";

export const title = z
  .string()
  .trim()
  .min(formParam.title.minLength, {
    message: message.errorMessages.minLength({
      length: formParam.title.minLength,
    }),
  })
  .max(formParam.title.maxLength, {
    message: message.errorMessages.maxLength({
      length: formParam.title.maxLength,
    }),
  });

export const body = z
  .string()
  .trim()
  .min(formParam.body.minLength, {
    message: message.errorMessages.minLength({
      length: formParam.body.minLength,
    }),
  })
  .max(formParam.body.maxLength, {
    message: message.errorMessages.maxLength({
      length: formParam.body.maxLength,
    }),
  });

export const formSchema: z.ZodSchema<type.FormValue> = z.object({
  title,
  body,
});
