import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Success, ItemView, ItemViewContainer } from "./ItemView";

vi.mock("~/ui/general/Card", () => ({
  Card: () => null,
}));

vi.mock("./hook/itemView.hook", () => ({
  useItemView: () => ({ __tag: "loading" }),
}));

describe.concurrent("Success", () => {
  const renderFn = (props: React.ComponentProps<typeof Success>) =>
    render(<Success {...props} />);

  test.concurrent("test", () => {
    expect(
      renderFn({
        __tag: "success",
        selectors: { id: "", title: "", body: "" },
      }),
    ).toBeDefined();
  });
});

describe.concurrent("ItemViewContainer", () => {
  const renderFn = (props: React.ComponentProps<typeof ItemViewContainer>) =>
    render(<ItemViewContainer {...props} />);

  test.concurrent("failure", () => {
    expect(renderFn({ __tag: "failure" })).toBeDefined();
  });

  test.concurrent("Empty", () => {
    expect(renderFn({ __tag: "empty" })).toBeDefined();
  });

  test.concurrent("Loading", () => {
    expect(renderFn({ __tag: "loading" })).toBeDefined();
  });

  test.concurrent("Success", () => {
    expect(
      renderFn({
        __tag: "success",
        selectors: { id: "", title: "", body: "" },
      }),
    ).toBeDefined();
  });
});

describe.concurrent("ItemView", () => {
  test.concurrent("test", () => {
    expect(render(<ItemView {...{ id: "" }} />)).toBeDefined();
  });
});
