import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { ItemEdit, ItemEditContainer } from "./ItemEdit";

vi.mock("./hook", () => ({
  useItemEdit: () => ({
    __tag: "loading",
  }),
}));

describe.concurrent("ItemEditContainer", () => {
  const renderFn = (props: React.ComponentProps<typeof ItemEditContainer>) =>
    render(<ItemEditContainer {...props} />);

  test.concurrent("failure", () => {
    expect(renderFn({ __tag: "failure" })).toBeDefined();
  });

  test.concurrent("Empty", () => {
    expect(renderFn({ __tag: "empty" })).toBeDefined();
  });

  test.concurrent("Loading", () => {
    expect(renderFn({ __tag: "loading" })).toBeDefined();
  });

  test.concurrent("Success", () => {
    expect(
      renderFn({
        __tag: "success",
        selectors: {
          id: "",
          serverErrorMessage: "",
          ids: {
            title: "",
            body: "",
          },
          errorMessages: {
            title: [],
            body: [],
          },
          canSubmit: true,
        },
        operations: {
          onSubmit: () => null,
        },
        form: {
          // @ts-expect-error -- テストなので
          handleSubmit: () => null,
          // @ts-expect-error -- テストなので
          register: () => null,
        },
      }),
    ).toBeDefined();
  });
});

describe.concurrent("ItemEdit", () => {
  test.concurrent("test", () => {
    expect(render(<ItemEdit {...{ id: "" }} />)).toBeDefined();
  });
});
