import { describe, test, expect } from "vitest";
import * as tag from "~/ui/util/tag";
import { toProps } from "./service";

describe.concurrent("toProps", () => {
  test.concurrent("failure", () => {
    // @ts-expect-error
    expect(toProps(tag.pattern.query.failure)).toMatchObject({
      items: tag.pattern.ui.failure,
    });
  });

  test.concurrent("loading", () => {
    // @ts-expect-error
    expect(toProps(tag.pattern.query.loading)).toMatchObject({
      items: tag.pattern.ui.loading,
    });
  });

  test.concurrent("success -- items doesn't have value", () => {
    const items = null;

    expect(
      // @ts-expect-error
      toProps({ ...tag.pattern.query.success, data: { items } })
    ).toMatchObject({ items: tag.pattern.ui.empty });
  });

  test.concurrent("success --  items have value", () => {
    const items = ["value"];

    expect(
      // @ts-expect-error
      toProps({ ...tag.pattern.query.success, data: { items } })
    ).toMatchObject({ items: { data: items } });
  });
});
