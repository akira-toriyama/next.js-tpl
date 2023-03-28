import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import * as tag from "~/ui/util/tag";
import { Success, ItemList, ItemListContainer } from "./ItemList";

vi.mock("~/ui/general/List", async () => ({
  ...(await vi.importActual<typeof import("~/ui/general/List")>(
    "~/ui/general/List"
  )),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Item: (props: any) => <div {...props} />,
}));

vi.mock("./hook/itemList.hook", () => ({
  useItemList: () => ({ items: { ...tag.pattern.ui.loading } }),
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
          ...tag.pattern.ui.success,
          data: [...Array(n)].map((_, i) => ({ id: `${i}`, title: "" })),
        }).getAllByTestId(target).length
      ).toEqual(3);
    }
  );
});

describe.concurrent("ItemListContainer", () => {
  const renderFn = (props: React.ComponentProps<typeof ItemListContainer>) =>
    render(<ItemListContainer {...props} />);

  test.concurrent("failure", () => {
    expect(
      renderFn({ items: { ...tag.pattern.ui.failure, data: null } })
    ).toBeDefined();
  });

  test.concurrent("Empty", () => {
    expect(
      renderFn({ items: { ...tag.pattern.ui.empty, data: null } })
    ).toBeDefined();
  });

  test.concurrent("Loading", () => {
    expect(
      renderFn({ items: { ...tag.pattern.ui.loading, data: null } })
    ).toBeDefined();
  });

  test.concurrent("Success", () => {
    expect(
      renderFn({
        items: { ...tag.pattern.ui.success, data: [] },
      })
    ).toBeDefined();
  });
});

describe.concurrent("ItemList", () => {
  test.concurrent("test", () => {
    expect(render(<ItemList />)).toBeDefined();
  });
});
