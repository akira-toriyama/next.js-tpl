---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/service/service.test.ts
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/service/service.test.ts
---

import { describe, test, expect, vi } from "vitest";
import * as tag from "~/ui/util/tag";
import { toProps, isValid, determineFetcher } from "./service";


describe.concurrent("toProps", () => {
  test.concurrent("failure", () => {
    // @ts-expect-error
    expect(toProps(tag.pattern.query.failure)).toMatchObject({
      item: tag.pattern.ui.failure,
    });
  });

  test.concurrent("loading", () => {
    // @ts-expect-error
    expect(toProps(tag.pattern.query.loading)).toMatchObject({
      item: tag.pattern.ui.loading,
    });
  });

  test.concurrent("success -- item doesn't have value", () => {
    const item = null;

    expect(
      // @ts-expect-error
      toProps({ ...tag.pattern.query.success, data: { item } })
    ).toMatchObject({ item: tag.pattern.ui.empty });
  });

  test.concurrent("success --  item have value", () => {
    const item = "value";

    expect(
      // @ts-expect-error
      toProps({ ...tag.pattern.query.success, data: { item } })
    ).toMatchObject({ item: { data: item } });
  });
});

describe.concurrent("isValid", () => {
  type TestData = {
    param: Parameters<typeof isValid>[0];
    expected: ReturnType<typeof isValid>;
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
    expect(isValid(param)).toEqual(expected);
  });
});

describe.concurrent("determineFetcher", () => {
  type TestData = {
    param: Parameters<typeof determineFetcher>[0];
    expected: ReturnType<typeof determineFetcher>;
  };

  const testData: TestData[] = [
    {
      param: { id: "1" },
      // @ts-expect-error
      expected: tag.pattern.util.success,
    },
    {
      param: { id: null },
      // @ts-expect-error
      expected: tag.pattern.util.failure,
    },
  ];

  vi.mock("../../coLocation/dao", () => ({
    find: () => null,
    failure: () => null,
  }));

  test.each(testData)("No.%#: %o", ({ param, expected }) => {
    const r = determineFetcher(param);
    r.fetcher();
    expect(r).toMatchObject(expected);
  });
});
