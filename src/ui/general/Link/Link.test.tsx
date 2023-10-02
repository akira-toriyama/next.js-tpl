import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import * as c from "./Link";

describe.concurrent("Link", () => {
  test.concurrent("test", () => {
    expect(render(<c.Link {...{ href: "" }}>link</c.Link>)).toBeDefined();
  });
});
