import { useUser } from "./useUser";
import * as type from "./User.type";
import React from "react";
import { Example } from "~/ui/component/general/Example";
import { match, P } from "ts-pattern";

const UserComponent: React.FC<type.Props> = (props) =>
  match(props)
    .with({ __type: "loading" }, () => <>取得中</>)
    .with({ __type: "error" }, () => <>エラー: {JSON.stringify(props)}</>)
    .with({ __type: "success" }, () => (
      <>
        成功: {JSON.stringify(props)}
        <hr />
        <Example />
      </>
    ))
    .exhaustive();

const UserContainer: React.FC = () => <UserComponent {...useUser()} />;

export const User: React.FC = () => <UserContainer />;
