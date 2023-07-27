import { describe, test, expect, vi, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useItemEdit } from "./itemEdit.hook";
import { wrapper } from "~/mock/test/wrapper";
import { useFetch } from "../../common/hook/fetch";
import { Lookup } from "~/ui/util/type/Lookup";
import type * as type from "../ItemEdit.type";
import { server } from "~/mock/test/server";
import { graphql } from "msw";
import * as ItemEditGQL from "./coLocation/ItemEdit.gql.generated";
import * as service from "./service";

vi.mock("./service");

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

describe("useItemEdit", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  const renderHookFn = () =>
    renderHook(() => useItemEdit({ id: "" }), { wrapper });

  test("loading", () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockReturnValueOnce({ isLoading: true });

    const r = renderHookFn();
    expect(r.result.current).toMatchObject({ __tag: "loading" });
  });

  test("failure", () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockReturnValueOnce({ isError: true });

    const r = renderHookFn();
    expect(r.result.current).toMatchObject({ __tag: "failure" });
  });

  test("empty", () => {
    vi.mocked(service.isEmpty).mockReturnValue(true);

    vi.mocked(useFetch).mockReturnValueOnce({
      isSuccess: true,
      // @ts-expect-error
      data: {},
    });

    const r = renderHookFn();
    expect(r.result.current).toMatchObject({ __tag: "empty" });
  });

  test("success", async () => {
    vi.mocked(service.isSuccess).mockReturnValue(true);

    // @ts-expect-error
    vi.mocked(useFetch).mockImplementation((o) => {
      // @ts-expect-error
      o.onSuccess({ item: { id: "", title: "", body: "" } });
      return {
        isSuccess: true,
        data: {},
      };
    });

    const r = renderHookFn();

    await waitFor(() => {
      type Success = Lookup<type.Props, "success">;
      const o = r.result.current as Success;
      expect(o).toMatchObject({ __tag: "success" });
    });
  });

  test("mutation success", async () => {
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
          })
        )
      )
    );

    vi.mocked(service.isSuccess).mockReturnValue(true);

    vi.mocked(useFetch).mockReturnValue({
      isSuccess: true,
      // @ts-expect-error
      data: {},
    });

    const r = renderHookFn();

    await waitFor(() => {
      type Success = Lookup<type.Props, "success">;
      const o = r.result.current as Success;
      expect(o).toMatchObject({ __tag: "success" });
      o.operations.onSubmit({ title: "", body: "" });
    });
  });

  test("mutation error", async () => {
    vi.mocked(service.isSuccess).mockReturnValue(true);

    vi.mocked(useFetch).mockReturnValue({
      isSuccess: true,
      // @ts-expect-error
      data: {},
    });

    server.use(
      graphql.mutation(ItemEditGQL.ItemEditDocument, (_, res, ctx) =>
        res.once(ctx.errors([]))
      )
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
