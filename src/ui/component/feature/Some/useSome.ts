import useSWR, { SWRResponse } from "swr";
import type { Props } from "./type";
import { match, P } from "ts-pattern";
import { fetchSome } from "./fetchSome";
import type { SomeResponse } from "./fetchSome";
import { swrPath } from "~/ui/util/swrPath";

// useSome内にあるとテスタビリティが下がるので切り出す。別ファイルでも良い
type SomeReducer = (p: SWRResponse<SomeResponse>) => Props;
export const someReducer: SomeReducer = (p) =>
  // if や switchでも良い
  match(p)
    .with(
      { data: undefined, error: undefined },
      () => ({ __type: "loading" } as const)
    )
    .with({ error: P.not(undefined) }, () => ({ __type: "failure" } as const))
    .with(
      { data: P.not(undefined) },
      (v) => ({ __type: "success", ...v.data } as const)
    )
    .exhaustive();

// hooksは、ドメインに対してのAPIにする
// ここにロジックをなるべく書かない
type UseSome = () => Props;
export const useSome: UseSome = () => {
  const r = useSWR(swrPath["/fetchUser"], fetchSome);
  return someReducer(r);
};
