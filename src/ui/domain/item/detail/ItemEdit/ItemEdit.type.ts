import { Prettify } from "~/ui/util/type/Prettify";
import type * as commonType from "../common/common.type";
import type { UseFormReturn } from "react-hook-form";

export type FormValue = {
  title: string;
  body: string | null;
};

export type Props =
  | {
      __tag: "success";
      form: UseFormReturn<FormValue>;
      selectors: Prettify<
        {
          ids: Record<keyof FormValue, string>;
          errorMessages: Record<keyof FormValue, Array<string>>;
          serverErrorMessage: string;
          canSubmit: boolean;
        } & commonType.OuterProps
      >;
      operations: {
        onSubmit: (p: FormValue) => void;
      };
    }
  | {
      __tag: "failure";
    }
  | {
      __tag: "loading";
    }
  | {
      __tag: "empty";
    };
