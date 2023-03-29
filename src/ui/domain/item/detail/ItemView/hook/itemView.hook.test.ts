import { describe, test, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useItemView } from "./itemView.hook";
import { wrapper } from "~/mock/test/wrapper";
import { useFetch } from "../../common/hook/fetch";

vi.mock("../../common/hook/fetch");

describe.concurrent("useItemView", () => {
  const renderHookFn = () =>
    renderHook(() => useItemView({ id: "" }), { wrapper });

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

  test.concurrent("success", () => {
    vi.mocked(useFetch).mockReturnValueOnce({
      isSuccess: true,
      // @ts-expect-error
      data: { item: true },
    });

    const r = renderHookFn();
    expect(r.result.current).toMatchObject({ __tag: "success" });
  });
});
