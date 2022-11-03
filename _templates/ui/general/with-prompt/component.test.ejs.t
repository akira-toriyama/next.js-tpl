---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.test.tsx
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.test.tsx
---

import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import type React from "react";
import { <%= h.changeCase.upperCaseFirst(name) %> } from "./<%= h.changeCase.upperCaseFirst(name) %>";

describe.concurrent("<%= h.changeCase.upperCaseFirst(name) %>", () => {
  const renderFn = (props: React.ComponentProps<typeof <%= h.changeCase.upperCaseFirst(name) %>>) =>
    render(<<%= h.changeCase.upperCaseFirst(name) %> {...props} />);

  test.concurrent("test", () => {
    expect(renderFn({ name: "" })).toBeDefined();
  });
});
