import { describe, test, expect } from "vitest";
import { isValidParam } from "./service";

describe.concurrent("isValidParam", () => {
  type TestData = {
    param: Parameters<typeof isValidParam>[0];
    expected: ReturnType<typeof isValidParam>;
  };

  const testData: TestData[] = [
    {
      param: { id: "1" },
      expected: true,
    },
    {
      param: { id: "" },
      expected: true,
    },
    {
      param: { id: 1 },
      expected: false,
    },
    {
      param: { id: null },
      expected: false,
    },
    {
      param: { id: undefined },
      expected: false,
    },
    {
      param: { id: true },
      expected: false,
    },
  ];

  test.each(testData)("No.%#: %o", ({ param, expected }) => {
    expect(isValidParam(param)).toEqual(expected);
  });
});
