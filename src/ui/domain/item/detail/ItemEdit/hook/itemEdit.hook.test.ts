import { describe, test, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useItemEdit } from "./itemEdit.hook";
import { wrapper } from "~/mock/test/wrapper";
import { useFetch } from "../../common/hook/fetch";
import { Lookup } from "~/ui/util/type/Lookup";
import type * as type from "../ItemEdit.type";
import { server } from "~/mock/test/server";
import { graphql } from "msw";
import * as ItemEditGQL from "./coLocation/ItemEdit.gql.generated";

vi.mock("../../common/hook/fetch");
vi.mock("next/router", () => ({
  useRouter: () => ({
    push: () => null,
  }),
}));

vi.mock("react-hook-form", () => ({
  useForm: () => ({
    reset: () => null,
    formState: {
      errors: {
        title: {
          message: "",
        },
        body: {
          message: "",
        },
      },
    },
  }),
}));

describe.concurrent("useItemEdit", () => {
  const renderHookFn = () =>
    renderHook(() => useItemEdit({ id: "" }), { wrapper });

  test.concurrent("loading", () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockReturnValueOnce({ isLoading: true });

    const r = renderHookFn();
    expect(r.result.current).toMatchObject({ __tag: "loading" });
  });

  test.concurrent("failure", () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockReturnValueOnce({ isError: true });

    const r = renderHookFn();
    expect(r.result.current).toMatchObject({ __tag: "failure" });
  });

  test.concurrent("empty", () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockReturnValueOnce({
      isSuccess: true,
      data: { item: null },
    });

    const r = renderHookFn();
    expect(r.result.current).toMatchObject({ __tag: "empty" });
  });

  test.concurrent("success", async () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockImplementation((o) => {
      // @ts-expect-error
      o.onSuccess({ item: { id: "", title: "", body: "" } });
      return {
        isSuccess: true,
        data: { item: { id: "", title: "", body: "" } },
      };
    });

    const r = renderHookFn();

    await waitFor(() => {
      type Success = Lookup<type.Props, "success">;
      const o = r.result.current as Success;
      expect(o).toMatchObject({ __tag: "success" });
    });
  });

  test.concurrent("mutation success", async () => {
    vi.mocked(useFetch).mockReturnValue({
      isSuccess: true,
      // @ts-expect-error
      data: { item: true },
    });

    server.use(
      graphql.mutation(ItemEditGQL.ItemEditDocument, (_, res, ctx) =>
        res.once(
          ctx.data({
            updateItem: {
              id: "",
            },
            publishItem: {
              id: "",
            },
          }),
        ),
      ),
    );
    const r = renderHookFn();

    await waitFor(() => {
      type Success = Lookup<type.Props, "success">;
      const o = r.result.current as Success;
      expect(o).toMatchObject({ __tag: "success" });
      o.operations.onSubmit({ title: "", body: "" });
    });
  });

  test.concurrent("mutation error", async () => {
    vi.mocked(useFetch).mockReturnValue({
      isSuccess: true,
      // @ts-expect-error
      data: { item: true },
    });

    server.use(
      graphql.mutation(ItemEditGQL.ItemEditDocument, (_, res, ctx) =>
        res.once(ctx.errors([])),
      ),
    );
    const r = renderHookFn();

    await waitFor(() => {
      type Success = Lookup<type.Props, "success">;
      const o = r.result.current as Success;
      expect(o).toMatchObject({ __tag: "success" });
      o.operations.onSubmit({ title: "", body: "" });
    });

    await waitFor(() => {
      type Success = Lookup<type.Props, "success">;
      const o = r.result.current as Success;
      expect(o.selectors.serverErrorMessage).toEqual("Update failed.");
    });
  });
});
