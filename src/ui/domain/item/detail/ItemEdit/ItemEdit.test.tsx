import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { ItemEdit } from "./ItemEdit";

describe.concurrent("ItemEdit", () => {
  test.concurrent("test", () => {
    expect(render(<ItemEdit />)).toBeDefined();
  });
});
