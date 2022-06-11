import * as WorkFlow from "~/domain/user/WorkFlow";
import { match } from "ts-pattern";

export const fetchUser: WorkFlow.FetchUser = (p) => () =>
  p.repository.fetchUser().then((r) =>
    match(r)
      .with(
        { __type: "success" },
        (rr) =>
          ({
            __type: rr.__type,
            data: { ...rr.data, nickname: rr.data.name },
          } as const)
      )
      .with(
        { __type: "error" },
        (ee) => ({ __type: ee.__type, error: { msg: "xxx" } } as const)
      )
      .exhaustive()
  );
