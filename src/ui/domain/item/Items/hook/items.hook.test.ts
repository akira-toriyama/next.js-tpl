import { describe, test, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useItems } from "./items.hook";
import { server } from "~/mock/server";
import { wrapper } from "~/mock/wrapper";
import * as ItemsGql from "~/ui/domain/item/Items/coLocation/Items.gql.generated";
import { graphql } from "msw";

describe.concurrent("useItem", () => {
  test.concurrent("test", () => {
    server.use(
      graphql.query(ItemsGql.ItemsDocument, (_, res, ctx) =>
        res.once(
          ctx.data({
            items: [
              {
                id: "",
                title: "",
              },
            ],
          })
        )
      )
    );

    expect(renderHook(() => useItems(), { wrapper })).toBeDefined();
  });
});
