import { title, body } from "./service";
import { describe, test, expect } from "vitest";
import { formParam } from "../../../../_/presenter";
import * as message from "~/ui/domain/_/message";

describe.concurrent("title", () => {
  const validTitle = "".padStart(formParam.title.maxLength, "o");

  type TestData = {
    param: unknown;
    expected: ReturnType<(typeof title)["safeParse"]>;
  };

  const testData: TestData[] = [
    {
      param: validTitle,
      expected: {
        success: true,
        data: validTitle,
      },
    },
    {
      param: `  ${validTitle}  `,
      expected: {
        success: true,
        data: validTitle,
      },
    },
    {
      param: `x${validTitle}`,
      expected: {
        success: false,
        error: {
          issues: [
            // @ts-expect-error
            {
              message: message.errorMessages.maxLength({
                length: formParam.title.maxLength,
              }),
            },
          ],
        },
      },
    },
    {
      param: "",
      expected: {
        success: false,
        error: {
          issues: [
            // @ts-expect-error
            {
              message: message.errorMessages.minLength({
                length: formParam.title.minLength,
              }),
            },
          ],
        },
      },
    },
  ];

  test.each(testData)("I/O %o", ({ param, expected }) => {
    expect(title.safeParse(param)).toMatchObject(expected);
  });
});

describe.concurrent("body", () => {
  const validBody = "".padStart(formParam.body.maxLength, "o");

  type TestData = {
    param: unknown;
    expected: ReturnType<(typeof body)["safeParse"]>;
  };

  const testData: TestData[] = [
    {
      param: validBody,
      expected: {
        success: true,
        data: validBody,
      },
    },
    {
      param: `  ${validBody}  `,
      expected: {
        success: true,
        data: validBody,
      },
    },
    {
      param: `x${validBody}`,
      expected: {
        success: false,
        error: {
          issues: [
            // @ts-expect-error
            {
              message: message.errorMessages.maxLength({
                length: formParam.body.maxLength,
              }),
            },
          ],
        },
      },
    },
    {
      param: "",
      expected: {
        success: false,
        error: {
          issues: [
            // @ts-expect-error
            {
              message: message.errorMessages.minLength({
                length: formParam.body.minLength,
              }),
            },
          ],
        },
      },
    },
  ];

  test.each(testData)("I/O %o", ({ param, expected }) => {
    expect(body.safeParse(param)).toMatchObject(expected);
  });
});
