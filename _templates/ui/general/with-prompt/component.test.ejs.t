---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(component) %>/<%= h.changeCase.upperCaseFirst(component) %>.test.tsx
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(component) %>/<%= h.changeCase.upperCaseFirst(component) %>.test.tsx
---

import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import type React from "react";
import { <%= h.changeCase.upperCaseFirst(component) %> } from "./<%= h.changeCase.upperCaseFirst(component) %>";

describe.concurrent("<%= h.changeCase.upperCaseFirst(component) %>", () => {
  const renderFn = (props: React.ComponentProps<typeof <%= h.changeCase.upperCaseFirst(component) %>>) =>
    render(<<%= h.changeCase.upperCaseFirst(component) %> {...props} />);

  test.concurrent("test", () => {
    expect(renderFn({ name: "" })).toBeDefined();
  });
});
