import { describe, test, expect } from "vitest";
import { failure } from "./util";

describe.concurrent("failure", () => {
  test.fails("do reject", async () => {
    await expect(failure()).rejects.toThrow();
  });
});
