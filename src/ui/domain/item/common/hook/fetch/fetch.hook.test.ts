import { useFetch } from "./fetch.hook";
import { describe, test, expect } from "vitest";
import * as GQL from "./coLocation/Common.gql.generated";
import { graphql } from "msw";
import { server } from "~/mock/test/server";
import { renderHook, waitFor } from "@testing-library/react";
import { wrapper } from "~/mock/test/wrapper";

describe.concurrent("useFetch", () => {
  const renderHookFn = () =>
    renderHook(() => useFetch({ id: "" }), { wrapper });

  test.concurrent("test", async () => {
    server.use(
      graphql.query(GQL.CommonDocument, (_, res, ctx) =>
        res.once(ctx.delay("infinite"))
      )
    );

    const r = renderHookFn();

    await waitFor(() => expect(r.result.current).toBeDefined());
  });
});
