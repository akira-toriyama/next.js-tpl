import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import * as c from "./ItemDetail";
import * as mock from "./itemDetail.mock";

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

describe.concurrent("ItemDetail", () => {
  test.concurrent("test", () => {
    expect(
      render(<c.ItemDetail {...mock.makeItemDetailProps()} />)
    ).toBeDefined();
  });
});
