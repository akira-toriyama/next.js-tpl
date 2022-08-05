import * as workFlow from "~/useCase/user/workFlow";
import * as repository from "~/useCase/user/repository";
import useSWR from "swr";
import { match, P } from "ts-pattern";
import * as type from "./User.type";
import { toFetcher } from "~/ui/util/toFetcher";
import { swrPath } from "~/ui/util/swrPath";
import type { SWRResponse } from "swr";

const useFetch = () =>
  useSWR(
    swrPath["/fetchUser"],
    toFetcher({
      fetcher: workFlow.fetchUser({ repository }),
    }),
    {
      refreshInterval: 10,
    }
  );

const toUIData = (p: SWRResponse<type.Props>) =>
  match(p)
    .with(
      { data: undefined, error: undefined },
      () =>
        ({
          __type: "loading",
        } as const)
    )
    .with(
      { data: { __type: "success" } },
      (rr) =>
        ({
          __type: "success",
          data: rr.data.data,
        } as const)
    )
    .with(
      { data: { __type: "error" } },
      (ee) =>
        ({
          __type: "error",
          error: {
            message: ee.data.error.message,
          },
        } as const)
    )
    .with(
      { error: P._ },
      () =>
        ({
          __type: "error",
          error: {
            message: "エラーです。再取得をしています。",
          },
        } as const)
    )
    .exhaustive();

type UseUser = () => type.Props;
export const useUser: UseUser = () => {
  const r = useFetch();
  return toUIData(r);
};
