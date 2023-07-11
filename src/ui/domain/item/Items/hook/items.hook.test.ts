import { describe, test, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useItems } from "./items.hook";
import { server } from "~/mock/test/server";
import { wrapper } from "~/mock/test/wrapper";
import * as GQL from "./coLocation/Items.gql.generated";
import { graphql } from "msw";

describe.concurrent("useItem", () => {
  const renderHookFn = () => renderHook(() => useItems(), { wrapper });

  test.concurrent("success", async () => {
    server.use(
      graphql.query(GQL.ItemsDocument, (_, res, ctx) =>
        res.once(
          ctx.data({
            items: [
              {
                id: "",
                title: "",
              },
            ],
          }),
        ),
      ),
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current).toMatchObject({ __tag: "success" }),
    );
  });

  test.concurrent("loading", async () => {
    server.use(
      graphql.query(GQL.ItemsDocument, (_, res, ctx) =>
        res.once(ctx.delay("infinite")),
      ),
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current).toMatchObject({ __tag: "loading" }),
    );
  });

  test.concurrent("failure", async () => {
    server.use(
      graphql.query(GQL.ItemsDocument, (_, res, ctx) =>
        res.once(ctx.errors([])),
      ),
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current).toMatchObject({ __tag: "failure" }),
    );
  });

  test.concurrent("empty -- array", async () => {
    server.use(
      graphql.query(GQL.ItemsDocument, (_, res, ctx) =>
        res.once(
          ctx.data({
            items: [],
          }),
        ),
      ),
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current).toMatchObject({ __tag: "empty" }),
    );
  });
});
