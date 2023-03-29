import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe.concurrent("Card", () => {
  const renderFn = (props: React.ComponentProps<typeof Card>) =>
    render(<Card {...props} />);

  test.concurrent("test", () => {
    expect(renderFn({ title: "" })).toBeDefined();
    expect(renderFn({ title: "", body: "value" })).toBeDefined();
  });
});
