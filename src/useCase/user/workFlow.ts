import * as WorkFlow from "~/domain/user/WorkFlow";
import { match } from "ts-pattern";

export const fetchUser: WorkFlow.FetchUser = (p) => () =>
  p.repository.fetchUser().then((r) =>
    match(r)
      .with(
        { __type: "success" },
        (rr) =>
          ({
            __type: "success",
            data: { id: rr.data.id.toString(), nickname: rr.data.name },
          } as const)
      )
      .with(
        { __type: "error" },
        (ee) =>
          ({ __type: "error", error: { message: ee.error.message } } as const)
      )
      .exhaustive()
  );
// TODO どうしましょ？
// hoge fuga
