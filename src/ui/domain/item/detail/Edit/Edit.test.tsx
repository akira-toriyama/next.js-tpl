import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Edit } from "./Edit";

describe.concurrent("Edit", () => {
  test.concurrent("test", () => {
    expect(render(<Edit />)).toBeDefined();
  });
});
