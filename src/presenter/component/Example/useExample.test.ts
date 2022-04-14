// import { renderHook } from "@testing-library/react-hooks";
import { useExample } from "./useExample";

describe("useContent", () => {
  test("動作確認", () => {
    expect(useExample).toBeDefined();
    // expect(renderHook(useExample)).toBeDefined();
  });
});
