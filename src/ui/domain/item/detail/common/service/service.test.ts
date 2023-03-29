import { describe, test, expect } from "vitest";
import { parameterSchema } from "./service";

describe.concurrent("isValidParam", () => {
  type TestData = {
    param: unknown;
    expected: boolean;
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
    {
      param: {},
      expected: false,
    },
  ];

  test.each(testData)("No.%#: %o", ({ param, expected }) => {
    expect(parameterSchema.safeParse(param).success).toEqual(expected);
  });
});
