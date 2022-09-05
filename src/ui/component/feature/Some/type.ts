// isLoading, isError などは、 as const との相性が悪い
export type Props =
  | {
      __type: "success";
      // APIのレスポンスと同じ型でも、そのまま使用しない
      // APIの型をそのまま使用すると、APIの変更発生する度に修正が必要になる
      // APIのレスポンスの変更があった場合も、useSomeで差分を吸収する DDD的にな思考
      id: string;
      name: string;
    }
  | {
      __type: "loading";
    }
  | {
      __type: "failure";
    };
