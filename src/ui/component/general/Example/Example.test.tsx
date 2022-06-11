import { render } from "@testing-library/react";
import { Example, ExampleComponent } from "./Example";

describe("ExampleComponent", () => {
  test("動作確認", () => {
    expect(
      render(<ExampleComponent {...{ isSome: false }} />).getByTestId("Example")
    ).toBeDefined();
  });
});

describe("Example", () => {
  test("動作確認", () => {
    expect(render(<Example />)).toBeDefined();
  });
});
