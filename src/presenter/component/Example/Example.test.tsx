import { render } from "@testing-library/react";
import { Example } from "./Example";

describe("Example", () => {
  test("動作確認", () => {
    expect(render(<Example />)).toBeDefined();
  });
});
