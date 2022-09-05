import { someReducer, useSome } from "./useSome";
import { renderHook } from "@testing-library/react";
import { fetchSome } from "./fetchSome";

jest.mock("./fetchSome");

jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({ data: undefined, error: undefined }),
}));

describe("someReducer", () => {
  test("__type: loadingを期待する", () => {
    // @ts-expect-error
    expect(someReducer({ error: undefined, data: undefined })).toEqual({
      __type: "loading",
    });
  });

  test("__type: failureを期待する", () => {
    // @ts-expect-error
    expect(someReducer({ error: {} })).toEqual({
      __type: "failure",
    });
  });

  test("__type: successを期待する", () => {
    // @ts-expect-error
    // テスト対象を考慮すると、toMatchObjectで十分
    expect(someReducer({ data: {} })).toMatchObject({
      // 値の確認は、必要最小限い留める
      // idやnameは、型が担保している
      __type: "success",
    });
  });
});

describe("useSome", () => {
  test("動作確認", () => {
    expect(renderHook(useSome)).toBeDefined();
  });
});

describe("mock化の備忘録", () => {
  // モック化は、オブジェクト化することで、補完が入りわかりやすい
  const mock = {
    fetchSome: fetchSome as jest.Mock<ReturnType<typeof fetchSome>>,
  } as const;

  test("fetchSomeが成功した場合", () => {
    mock.fetchSome.mockImplementationOnce(() =>
      Promise.resolve({ id: "", name: "" })
    );

    // テスト対象があっさりな為書くこと無し
    expect(true).toBeDefined();
  });

  test("fetchSomeが失敗した場合", () => {
    mock.fetchSome.mockImplementationOnce(() => Promise.reject());

    // テスト対象があっさりな為書くこと無し
    expect(true).toBeDefined();
  });
});
