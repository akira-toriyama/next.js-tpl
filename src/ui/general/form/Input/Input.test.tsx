import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Input } from "./Input";

describe.concurrent("Card", () => {
  const renderFn = (props: React.ComponentProps<typeof Input>) =>
    render(<Input {...props} />);

  test.concurrent("test", () => {
    expect(renderFn({})).toBeDefined();
  });
});
