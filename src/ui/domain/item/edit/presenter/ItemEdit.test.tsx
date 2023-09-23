import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import * as c from "./ItemEdit";
import * as mock from "./itemEdit.mock";

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

describe.concurrent("ItemEditComponent", () => {
  test.concurrent("test", () => {
    expect(
      render(<c.ItemEditComponent {...mock.makeItemEditProps()} />)
    ).toBeDefined();
  });
});
