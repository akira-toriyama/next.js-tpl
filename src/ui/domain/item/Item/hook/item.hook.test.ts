import { describe, test, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useItem } from "./item.hook";
import { server } from "~/mock/test/server";
import { wrapper } from "~/mock/test/wrapper";
import * as ItemGql from "~/ui/domain/item/Item/coLocation/Item.gql.generated";
import { graphql } from "msw";

describe.concurrent("useItem", () => {
  vi.mock("./service", () => ({
    toProps: () => null,
    determineFetcher: () => ({ fetcher: () => null, opt: null }),
  }));

  vi.mock("next/router", () => ({
    useRouter: () => ({ query: { id: "" } }),
  }));

  test.concurrent("test", () => {
    server.use(
      graphql.query(ItemGql.ItemDocument, (_, res, ctx) =>
        res.once(
          ctx.data({
            item: {
              id: "",
              title: "",
              body: "",
            },
          })
        )
      )
    );
    expect(renderHook(() => useItem(), { wrapper })).toBeDefined();
  });
});
