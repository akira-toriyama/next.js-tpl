import { renderHook } from "@testing-library/react-hooks";
import { useExample } from "./useExample";

describe("useContent", () => {
  test("動作確認", () => {
    expect(renderHook(useExample)).toBeDefined();
  });
});
