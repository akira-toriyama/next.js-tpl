import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Success, Items, ItemsContainer } from "./Items";

vi.mock("~/ui/general/List", async () => ({
  ...(await vi.importActual<typeof import("~/ui/general/List")>(
    "~/ui/general/List",
  )),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Item: (props: any) => <div {...props} />,
}));

vi.mock("./hook/items.hook", () => ({
  useItems: () => ({ __tag: "loading" }),
}));

describe.concurrent("Success", () => {
  const renderFn = (props: React.ComponentProps<typeof Success>) =>
    render(<Success {...props} />);

  test.concurrent(
    "If there are 'n' counts of data, there are 'n' counts of targets.",
    () => {
      const n = 3;
      const target = "item";

      expect(
        renderFn({
          __tag: "success",
          selectors: [...Array(n)].map((_, i) => ({ id: `${i}`, title: "" })),
        }).getAllByTestId(target).length,
      ).toEqual(3);
    },
  );
});

describe.concurrent("ItemsContainer", () => {
  const renderFn = (props: React.ComponentProps<typeof ItemsContainer>) =>
    render(<ItemsContainer {...props} />);

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
        selectors: [{ title: "", id: "" }],
      }),
    ).toBeDefined();
  });
});

describe.concurrent("Items", () => {
  test.concurrent("test", () => {
    expect(render(<Items />)).toBeDefined();
  });
});
