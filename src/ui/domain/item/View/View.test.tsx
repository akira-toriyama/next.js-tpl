import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import * as tag from "~/ui/util/tag";
import { Success, View, ViewContainer } from "./View";

vi.mock("~/ui/general/Card", () => ({
  Card: () => null,
}));

vi.mock("./hook/view.hook", () => ({
  useView: () => ({ item: { ...tag.pattern.ui.loading } }),
}));

describe.concurrent("Success", () => {
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

describe.concurrent("ViewContainer", () => {
  const renderFn = (props: React.ComponentProps<typeof ViewContainer>) =>
    render(<ViewContainer {...props} />);

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

describe.concurrent("View", () => {
  test.concurrent("test", () => {
    expect(render(<View {...{ id: "" }} />)).toBeDefined();
  });
});
