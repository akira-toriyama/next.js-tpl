import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Input } from "./Input";

describe.concurrent("Card", () => {
  const renderFn = (props: React.ComponentProps<typeof Input>) =>
    render(<Input {...props} />);

  test.concurrent("required", () => {
    expect(
      renderFn({
        id: "test",
        wrapper: {
          label: "label",
          required: true,
          error: {
            messages: [""],
          },
          helper: {
            texts: [""],
          },
        },
      }).getByTestId("required"),
    ).toBeDefined();
  });
});
