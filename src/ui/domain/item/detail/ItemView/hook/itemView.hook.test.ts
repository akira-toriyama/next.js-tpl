import { describe, test, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useItemView } from "./itemView.hook";
import { wrapper } from "~/mock/test/wrapper";
import * as tag from "~/ui/util/tag";
import { useFetch } from "../../common/hook/fetch";

vi.mock("../../common/hook/fetch");

describe.concurrent("useItemView", () => {
  const renderHookFn = () =>
    renderHook(() => useItemView({ id: "" }), { wrapper });

  test.concurrent("loading", () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockReturnValueOnce(tag.pattern.query.loading);

    const r = renderHookFn();
    expect(r.result.current.item).toMatchObject(tag.pattern.ui.loading);
  });

  test.concurrent("failure", () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockReturnValueOnce(tag.pattern.query.failure);

    const r = renderHookFn();
    expect(r.result.current.item).toMatchObject(tag.pattern.ui.failure);
  });

  test.concurrent("empty", () => {
    // @ts-expect-error
    vi.mocked(useFetch).mockReturnValueOnce({
      ...tag.pattern.query.success,
      data: { item: null },
    });

    const r = renderHookFn();
    expect(r.result.current.item).toMatchObject(tag.pattern.ui.empty);
  });

  test.concurrent("success", () => {
    vi.mocked(useFetch).mockReturnValueOnce({
      ...tag.pattern.query.success,
      // @ts-expect-error
      data: { item: true },
    });

    const r = renderHookFn();
    expect(r.result.current.item).toMatchObject(tag.pattern.ui.success);
  });
});
