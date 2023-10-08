import { formSchema } from "./service";
import { describe, test, expect } from "vitest";
import * as service from "../../../../_/service";

describe.concurrent("formSchema", () => {
  const validTitle = "".padStart(formParam.title.maxLength, "o");
  const validBody = "".padStart(formParam.body.maxLength, "o");

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
        title: validTitle,
        body: validBody,
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
        title: `${validTitle}-`,
        body: validBody,
      },
      expected: {
        success: false,
        error: expect.anything(),
      },
    },
    {
      param: {
        title: validTitle,
        body: `${validBody}-`,
      },
      expected: {
        success: false,
        error: expect.anything(),
      },
    },
  ];

  test.each(testData)("I/O %o", ({ param, expected }) => {
    expect(formSchema.safeParse(param)).toEqual(expected);
  });
});
