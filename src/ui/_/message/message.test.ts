import { describe, test, expect } from "vitest";
import { errorMessages } from "./message";

describe.concurrent("errorMessages/maxLength", () => {
  type TestData = {
    param: Parameters<typeof errorMessages.maxLength>[0];
    expected: ReturnType<typeof errorMessages.maxLength>;
  };
  const testData: TestData[] = [
    { param: { length: 10 }, expected: "10文字以上で入力してください。" },
  ];

  test.each(testData)("I/O %o", ({ param, expected }) => {
    expect(errorMessages.minLength(param)).toEqual(expected);
  });
});

describe.concurrent("errorMessages/maxLength", () => {
  type TestData = {
    param: Parameters<typeof errorMessages.maxLength>[0];
    expected: ReturnType<typeof errorMessages.maxLength>;
  };
  const testData: TestData[] = [
    { param: { length: 10 }, expected: "10文字以下で入力してください。" },
  ];

  test.each(testData)("I/O %o", ({ param, expected }) => {
    expect(errorMessages.maxLength(param)).toEqual(expected);
  });
});
