import * as workFlow from "~/useCase/user/workFlow";
import * as repository from "~/useCase/user/repository";
import useSWR from "swr";
import { match, P } from "ts-pattern";
import * as type from "./User.type";

const f = async () => {
  const r = await workFlow.fetchUser({
    repository: {
      ...repository,
    },
  })();

  return r.__type === "error" ? Promise.reject<typeof r>(r) : r;
};

type UseUser = () => type.Props;
export const useUser: UseUser = () => {
  const r = useSWR("/api/fetchUser", f, {
    errorRetryCount: 10,
    errorRetryInterval: 100,
  });

  console.log(r.data.__type);

  return match(r)
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
            msg: ee.data.error.msg,
          },
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
