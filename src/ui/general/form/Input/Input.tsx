import { Prettify } from "~/ui/util/type/Prettify";

type Base = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "id" | "aria-describedby" | "aria-errormessage"
> & {
  id: string;
};

type Wrapper = {
  wrapper: {
    label: string;
    error?: {
      messages: string[];
    };
    helper?: {
      texts: string[];
    };
    required?: boolean;
  };
};

type Injection = {
  _input?: Record<string, unknown>;
};

type Props = Prettify<Base & Wrapper & Injection>;

const aria = {
  helperText: "helper-text",
  errorMessage: "error-message",
} as const;

export const Input: React.FC<Props> = ({ _input, ...props }) => (
  <>
    <label htmlFor={props.id}>
      {props.wrapper.label}
      {props.wrapper.required && <span data-testid="required">*</span>}
    </label>
    <input
      {...{
        ..._input,
        ...props,
        "aria-describedby": `${props.id}-${aria.helperText}`,
        "aria-errormessage": `${props.id}-${aria.errorMessage}`,
      }}
    />

    <ul>
      {props.wrapper.error?.messages.map((v, k) => (
        <li key={k} id={`${props.id}`}>
          {v}
        </li>
      ))}
    </ul>

    <ul>
      {props.wrapper.helper?.texts.map((v, k) => (
        <li key={k} id={`${props.id}-${aria.helperText}`}>
          {v}
        </li>
      ))}
    </ul>
  </>
);
