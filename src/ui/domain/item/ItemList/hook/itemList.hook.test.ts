import { describe, test, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useItemList } from "./itemList.hook";
import { server } from "~/mock/test/server";
import { wrapper } from "~/mock/test/wrapper";
import * as GQL from "./coLocation/ItemList.gql.generated";
import { graphql } from "msw";
import * as tag from "~/ui/util/tag";

describe.concurrent("useItem", () => {
  const renderHookFn = () => renderHook(() => useItemList(), { wrapper });

  test.concurrent("success", async () => {
    server.use(
      graphql.query(GQL.ItemListDocument, (_, res, ctx) =>
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

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current.items).toMatchObject(tag.pattern.ui.success)
    );
  });

  test.concurrent("loading", async () => {
    server.use(
      graphql.query(GQL.ItemListDocument, (_, res, ctx) =>
        res.once(ctx.delay("infinite"))
      )
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current.items).toMatchObject(tag.pattern.ui.loading)
    );
  });

  test.concurrent("failure", async () => {
    server.use(
      graphql.query(GQL.ItemListDocument, (_, res, ctx) =>
        res.once(ctx.errors([]))
      )
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current.items).toMatchObject(tag.pattern.ui.failure)
    );
  });

  test.concurrent("empty -- array", async () => {
    server.use(
      graphql.query(GQL.ItemListDocument, (_, res, ctx) =>
        res.once(
          ctx.data({
            items: [],
          })
        )
      )
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current.items).toMatchObject(tag.pattern.ui.empty)
    );
  });
});
