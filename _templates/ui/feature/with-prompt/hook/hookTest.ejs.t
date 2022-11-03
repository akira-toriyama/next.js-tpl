---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/<%= name %>.hook.test.ts
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/<%= name %>.hook.test.ts
---

import { describe, test, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { use<%= h.changeCase.upperCaseFirst(name) %> } from "./<%= name %>.hook";

describe.concurrent("use<%= h.changeCase.upperCaseFirst(name) %>", () => {
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
    expect(renderHook(use<%= h.changeCase.upperCaseFirst(name) %>)).toBeDefined();
  });
});
