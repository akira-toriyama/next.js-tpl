import { describe, test, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useView } from "./view.hook";
import { server } from "~/mock/test/server";
import { wrapper } from "~/mock/test/wrapper";
import * as GQL from "./coLocation/View.gql.generated";
import { graphql } from "msw";
import * as tag from "~/ui/util/tag";

describe.concurrent("useView", () => {
  const renderHookFn = () => renderHook(() => useView({ id: "" }), { wrapper });

  test.concurrent("success", async () => {
    server.use(
      graphql.query(GQL.ViewDocument, (_, res, ctx) =>
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

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current.item).toMatchObject(tag.pattern.ui.success)
    );
  });

  test.concurrent("loading", async () => {
    server.use(
      graphql.query(GQL.ViewDocument, (_, res, ctx) =>
        res.once(ctx.delay("infinite"))
      )
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current.item).toMatchObject(tag.pattern.ui.loading)
    );
  });

  test.concurrent("failure", async () => {
    server.use(
      graphql.query(GQL.ViewDocument, (_, res, ctx) => res.once(ctx.errors([])))
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current.item).toMatchObject(tag.pattern.ui.failure)
    );
  });

  test.concurrent("empty", async () => {
    server.use(
      graphql.query(GQL.ViewDocument, (_, res, ctx) =>
        res.once(
          ctx.data({
            item: null,
          })
        )
      )
    );

    const r = renderHookFn();

    await waitFor(() =>
      expect(r.result.current.item).toMatchObject(tag.pattern.ui.empty)
    );
  });
});
