import { describe, test, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useItems } from "./items.hook";

describe.concurrent("useItem", () => {
  vi.mock("./service", () => ({
    toProps: () => null,
  }));

  vi.mock("@tanstack/react-query", () => ({
    useQuery: () => null,
  }));

  test.concurrent("test", () => {
    expect(renderHook(useItems)).toBeDefined();
  });
});
