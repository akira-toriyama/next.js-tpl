import React from "react";
import { Some, SomeContainer, Success, Loading, Failure } from "./Some";
import { render } from "@testing-library/react";

jest.mock("./useSome", () => ({ useSome: () => ({ __type: "loading" }) }));

// 単体テストなので、内部で使用しているコンポーネントを意識しない。
// テスタビリティを上げる為のコンポーネント
describe("Some", () => {
  test("動作確認", () => {
    expect(render(<Some />)).toBeDefined();
  });
});

// 単体テストなので、内部で使用しているコンポーネントを意識しない。
// `as const` と `__type` の組み合わせてで適切なコンポーネントが選択される。
describe("SomeContainer", () => {
  // 3パターンするので抽象化
  const renderFn = (props: React.ComponentProps<typeof SomeContainer>) =>
    render(<SomeContainer {...props} />);

  test("__type: loadingの場合", () => {
    const __type = "loading";
    expect(renderFn({ __type }).getByTestId(__type)).toBeDefined();
  });

  test("__type: failureの場合", () => {
    const __type = "failure";
    expect(renderFn({ __type }).getByTestId(__type)).toBeDefined();
  });

  test("__type: successの場合", () => {
    const __type = "success";

    // 必要な部分だけ書く
    // @ts-expect-error -- Containerのテストなので省略
    expect(renderFn({ __type }).getByTestId(__type)).toBeDefined();
  });
});

describe("Success", () => {
  test("動作確認", () => {
    // 必要に応じて期待通りのUIかテストする
    // @ts-expect-error -- これで十分
    expect(render(<Success {...{ id: "", name: "" }} />)).toBeDefined();
  });
});

describe("Loading", () => {
  test("動作確認", () => {
    // 必要に応じて期待通りのUIかテストする
    expect(render(<Loading />)).toBeDefined();
  });
});

describe("Failure", () => {
  test("動作確認", () => {
    // 必要に応じて期待通りのUIかテストする
    expect(render(<Failure />)).toBeDefined();
  });
});
