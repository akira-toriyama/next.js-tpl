import * as Repository from "~/domain/user/Repository";
import * as user from "~/infra/externalInterface/user";
import { match } from "ts-pattern";

export const fetchUser: Repository.FetchUser = async () =>
  user.fetchUser().then((r) =>
    match(r)
      .with(
        { __type: "success" },
        (rr) =>
          ({
            __type: "success",
            data: {
              ...rr.data,
            },
          } as const)
      )
      .with(
        { __type: "error" },
        () =>
          ({
            __type: "error",
            error: "取得失敗",
          } as const)
      )
      .exhaustive()
  );
