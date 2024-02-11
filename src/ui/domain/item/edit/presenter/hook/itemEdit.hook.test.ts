import { useItemEdit } from "./itemEdit.hook";
import { describe, test, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import * as repository from "../../repository";
import { useRouter } from "next/navigation";

vi.mock("next/navigation");
vi.mock("../../repository");

describe("useItemEdit", () => {
  test("mutation success", async () => {
    // @ts-expect-error
    vi.mocked(repository).save.mockResolvedValueOnce(null);

    const mockPush = vi.fn();
    // @ts-expect-error
    vi.mocked(useRouter).mockReturnValue({
      push: mockPush,
    });

    const r = renderHook(() =>
      useItemEdit({ item: { id: "", title: "", body: "" } }),
    );

    await act(
      async () => await r.result.current.onSubmit({ title: "", body: "" }),
    );

    expect(mockPush).toBeCalledTimes(1);
  });

  test("mutation error", async () => {
    vi.mocked(repository).save.mockRejectedValueOnce(null);

    const mock = vi.fn();
    // @ts-expect-error
    vi.mocked(useRouter).mockReturnValue({
      push: mock,
    });

    const r = renderHook(() =>
      useItemEdit({ item: { id: "", title: "", body: "" } }),
    );

    expect(r.result.current.serverErrorMessage).toEqual("");

    await act(
      async () => await r.result.current.onSubmit({ title: "", body: "" }),
    );

    expect(mock).toBeCalledTimes(0);
    expect(r.result.current.serverErrorMessage).toEqual(expect.any(String));
  });
});
