---
to: src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/<%= h.changeCase.upperCaseFirst(name) %>.test.tsx
sh: yarn prettier --write src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/<%= h.changeCase.upperCaseFirst(name) %>.test.tsx
---
import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import * as tag from "~/ui/util/tag";
import { Success, <%= h.changeCase.upperCaseFirst(name) %>, <%= h.changeCase.upperCaseFirst(name) %>Container } from "./<%= h.changeCase.upperCaseFirst(name) %>";

describe.concurrent("Success", () => {
  vi.mock("~/ui/general/Card", () => ({
    Card: () => null,
  }));

  const renderFn = (props: React.ComponentProps<typeof Success>) =>
    render(<Success {...props} />);

  test.concurrent("test", () => {
    expect(
      renderFn({
        ...tag.pattern.ui.success,
        data: { id: "", title: "", body: "" },
      })
    ).toBeDefined();
  });
});

describe.concurrent("<%= h.changeCase.upperCaseFirst(name) %>Container", () => {
  const renderFn = (props: React.ComponentProps<typeof <%= h.changeCase.upperCaseFirst(name) %>Container>) =>
    render(<<%= h.changeCase.upperCaseFirst(name) %>Container {...props} />);

  test.concurrent("failure", () => {
    expect(
      renderFn({ item: { ...tag.pattern.ui.failure, data: null } })
    ).toBeDefined();
  });

  test.concurrent("Empty", () => {
    expect(
      renderFn({ item: { ...tag.pattern.ui.empty, data: null } })
    ).toBeDefined();
  });

  test.concurrent("Loading", () => {
    expect(
      renderFn({ item: { ...tag.pattern.ui.loading, data: null } })
    ).toBeDefined();
  });

  test.concurrent("Success", () => {
    vi.mock("~/ui/general/Card", () => ({
      Card: () => null,
    }));
    expect(
      renderFn({
        item: {
          ...tag.pattern.ui.success,
          data: { id: "", title: "", body: "" },
        },
      })
    ).toBeDefined();
  });
});

describe.concurrent("<%= h.changeCase.upperCaseFirst(name) %>", () => {
  vi.mock("../hook/<%= name %>.hook", () => ({
    use<%= h.changeCase.upperCaseFirst(name) %>: () => ({ item: { ...tag.pattern.ui.loading } }),
  }));

  test.concurrent("test", () => {
    expect(render(<<%= h.changeCase.upperCaseFirst(name) %> />)).toBeDefined();
  });
});
