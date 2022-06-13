import * as workFlow from "~/useCase/user/workFlow";
import * as repository from "~/useCase/user/repository";
import useSWR from "swr";
import { match, P } from "ts-pattern";
import * as type from "./User.type";

type UseUser = () => type.Props;
export const useUser: UseUser = () => {
  const r = useSWR(
    "fetchUser",
    workFlow.fetchUser({
      repository: {
        ...repository,
      },
    })
  );

  return match(r)
    .with({ data: P.nullish }, () => ({ __type: "loading" } as const))
    .with(
      { data: { __type: "error" } },
      (ee) =>
        ({
          __type: "error",
          error: {
            msg: ee.data.error.msg,
          },
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
      { error: P._ },
      () =>
        ({
          __type: "error",
          error: {
            msg: "想定外エラー",
          },
        } as const)
    )
    .exhaustive();
};
