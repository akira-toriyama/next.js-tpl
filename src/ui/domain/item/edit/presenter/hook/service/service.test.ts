import { formSchema } from "./service";
import { describe, test, expect } from "vitest";

describe.concurrent("formSchema", () => {
  const l20 = "".padStart(20, "v");
  const l15 = "".padStart(15, "v");

  type TestData = {
    param: unknown;
    expected: ReturnType<(typeof formSchema)["safeParse"]>;
  };

  const testData: TestData[] = [
    {
      param: {
        title: "t",
        body: "b",
      },
      expected: {
        success: true,
        data: expect.anything(),
      },
    },
    {
      param: {
        title: l20,
        body: l15,
      },
      expected: {
        success: true,
        data: expect.anything(),
      },
    },
    {
      param: {},
      expected: {
        success: false,
        error: expect.anything(),
      },
    },
    {
      param: {
        title: "",
        body: "",
      },
      expected: {
        success: false,
        error: expect.anything(),
      },
    },
    {
      param: {
        title: "t",
        body: "",
      },
      expected: {
        success: false,
        error: expect.anything(),
      },
    },
    {
      param: {
        title: "",
        body: "b",
      },
      expected: {
        success: false,
        error: expect.anything(),
      },
    },
    {
      param: {
        title: `${l20}-`,
        body: l15,
      },
      expected: {
        success: false,
        error: expect.anything(),
      },
    },
    {
      param: {
        title: l20,
        body: `${l15}-`,
      },
      expected: {
        success: false,
        error: expect.anything(),
      },
    },
  ];

  test.each(testData)("No.%#: %o", ({ param, expected }) => {
    expect(formSchema.safeParse(param)).toEqual(expected);
  });
});
