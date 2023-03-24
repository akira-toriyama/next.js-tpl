import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import * as tag from "~/ui/util/tag";
import { Success, Item, ItemContainer } from "./Item";

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

describe.concurrent("ItemContainer", () => {
  const renderFn = (props: React.ComponentProps<typeof ItemContainer>) =>
    render(<ItemContainer {...props} />);

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

describe.concurrent("Item", () => {
  vi.mock("../hook/item.hook", () => ({
    useItem: () => ({ item: { ...tag.pattern.ui.loading } }),
  }));

  test.concurrent("test", () => {
    expect(render(<Item {...{ id: "" }} />)).toBeDefined();
  });
});
