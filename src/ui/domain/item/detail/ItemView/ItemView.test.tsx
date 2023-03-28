import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import * as tag from "~/ui/util/tag";
import { Success, ItemView, ItemViewContainer } from "./ItemView";

vi.mock("~/ui/general/Card", () => ({
  Card: () => null,
}));

vi.mock("./hook/itemView.hook", () => ({
  useItemView: () => ({ item: { ...tag.pattern.ui.loading } }),
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

describe.concurrent("ItemViewContainer", () => {
  const renderFn = (props: React.ComponentProps<typeof ItemViewContainer>) =>
    render(<ItemViewContainer {...props} />);

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

describe.concurrent("ItemView", () => {
  test.concurrent("test", () => {
    expect(render(<ItemView {...{ id: "" }} />)).toBeDefined();
  });
});
