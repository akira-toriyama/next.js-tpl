import type * as c from "./ItemEdit";

type Props = React.ComponentProps<typeof c.ItemEditComponent>;

const normal: Props = {
  item: {
    id: "1",
    title: "title",
    body: "body",
  },
  serverErrorMessage: "",
  onSubmit: () => {},
  form: {
    // @ts-expect-error -- mock
    register: () => null,
    // @ts-expect-error -- mock
    handleSubmit: () => null,
    // @ts-expect-error -- mock
    formState: {
      isSubmitting: false,
      errors: {},
    },
  },
};

const hasError: Props = {
  item: {
    id: "1",
    title: "title",
    body: "body",
  },
  serverErrorMessage: "server error",
  onSubmit: () => {},
  form: {
    // @ts-expect-error -- mock
    register: () => null,
    // @ts-expect-error -- mock
    handleSubmit: () => null,
    formState: {
      isSubmitting: false,
      errors: {
        // @ts-expect-error -- mock
        body: {
          message: "body error",
        },
        // @ts-expect-error -- mock
        title: {
          message: "title error",
        },
      },
    },
  },
};

type MakeItemEditProps = (p?: { type: "hasError" }) => Props;
export const makeItemEditProps: MakeItemEditProps = (p) => {
  if (p?.type == null) {
    return normal;
  }
  return hasError;
};
