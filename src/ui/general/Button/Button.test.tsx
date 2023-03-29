import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe.concurrent("Card", () => {
  const renderFn = (props: React.ComponentProps<typeof Button>) =>
    render(<Button {...props} />);

  test.concurrent("test", () => {
    expect(renderFn({})).toBeDefined();
  });
});
