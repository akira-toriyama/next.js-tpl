import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import * as c from "./Items";
import * as mock from "./items.mock";

describe.concurrent("Empty", () => {
  test.concurrent("test", () => {
    expect(render(<c.Empty />)).toBeDefined();
  });
});

describe.concurrent("Loading", () => {
  test.concurrent("test", () => {
    expect(render(<c.Loading />)).toBeDefined();
  });
});

describe.concurrent("Items", () => {
  const renderFn = (props: React.ComponentProps<typeof c.Items>) =>
    render(<c.Items {...props} />);

  test.concurrent("hasn't item", () => {
    expect(renderFn({ items: [] })).toBeDefined();
  });

  test.concurrent("has item", () => {
    const props = mock.makeItemsProps();
    expect(renderFn(props).getAllByTestId("data").length).toEqual(
      props.items.length,
    );
  });
});
