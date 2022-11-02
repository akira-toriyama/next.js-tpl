import { describe, test, expect } from "vitest";
import { pattern, to } from "./tag";

describe.concurrent("pattern", () => {
  test.concurrent("test", () => {
    expect(pattern).toBeDefined();
  });
});

describe.concurrent("wrapper", () => {
  test.concurrent("loadingProps", () => {
    expect(to.loadingProps({ data: "" })).toMatchObject(pattern.ui.loading);
  });

  test.concurrent("failureProps", () => {
    expect(to.failureProps({ data: "" })).toMatchObject(pattern.ui.failure);
  });

  test.concurrent("successProps", () => {
    expect(to.successProps({ data: "" })).toMatchObject(pattern.ui.success);
  });

  test.concurrent("emptyProps", () => {
    expect(to.emptyProps({ data: "" })).toMatchObject(pattern.ui.empty);
  });
});
