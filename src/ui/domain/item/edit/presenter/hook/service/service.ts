import { z } from "zod";
import * as type from "../../ItemEdit.type";
import * as service from "../../../../_/service";
import * as message from "~/ui/_/message";

export const formSchema: z.ZodSchema<type.FormValue> = z.object({
  title: z
    .string()
    .trim()
    .min(service.formParam.title.minLength, {
      message: message.errorMessages.minLength({
        length: service.formParam.title.minLength,
      }),
    })
    .max(service.formParam.title.maxLength, {
      message: message.errorMessages.maxLength({
        length: service.formParam.title.maxLength,
      }),
    }),
  body: z
    .string()
    .trim()
    .min(service.formParam.body.minLength, {
      message: message.errorMessages.minLength({
        length: service.formParam.body.minLength,
      }),
    })
    .max(service.formParam.body.maxLength, {
      message: message.errorMessages.maxLength({
        length: service.formParam.body.maxLength,
      }),
    }),
});
