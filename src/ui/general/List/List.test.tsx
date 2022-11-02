import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Items, Item } from "./List";

describe.concurrent("Items", () => {
  test.concurrent("test", () => {
    expect(render(<Items {...{ children: <></> }} />)).toBeDefined();
  });
});

describe.concurrent("Item", () => {
  test.concurrent("test", () => {
    expect(render(<Item {...{ children: <></> }} />)).toBeDefined();
  });
});
