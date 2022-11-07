import { describe, test, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useItem } from "./item.hook";

describe.concurrent("useItem", () => {
  vi.mock("./service", () => ({
    toProps: () => null,
    determineFetcher: () => ({ fetcher: null, opt: null }),
  }));

  vi.mock("@tanstack/react-query", () => ({
    useQuery: () => null,
  }));

  vi.mock("next/router", () => ({
    useRouter: () => ({ query: { id: "" } }),
  }));

  test.concurrent("test", () => {
    expect(renderHook(useItem)).toBeDefined();
  });
});
