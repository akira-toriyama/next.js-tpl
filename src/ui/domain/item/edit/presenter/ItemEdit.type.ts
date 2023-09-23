import type { UseFormReturn } from "react-hook-form";

export type OuterProps = {
  item: {
    id: string;
    title: string;
    body: string | null;
  };
};

export type FormValue = {
  title: string;
  body: string | null;
};

export type Props = {
  form: UseFormReturn<FormValue>;
  serverErrorMessage: string;
  onSubmit: (p: FormValue) => void;
} & OuterProps;
