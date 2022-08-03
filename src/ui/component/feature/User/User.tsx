import { useUser } from "./useUser";
import * as type from "./User.type";
import React from "react";
import { Example } from "~/ui/component/general/Example";
import { match } from "ts-pattern";
import * as Util from "~/domain/core/Util";

const Loading: React.FC = () => <p>取得中</p>;

const Err: React.FC<Util.Lookup<type.Props, "error">> = (props) => (
  <>エラー: {JSON.stringify(props)}</>
);

const Success: React.FC<Util.Lookup<type.Props, "success">> = (props) => (
  <>
    成功: {JSON.stringify(props)}
    <hr />
    <Example />
  </>
);

const UserComponent: React.FC<type.Props> = (props) =>
  match(props)
    .with({ __type: "loading" }, () => <Loading />)
    .with({ __type: "error" }, (p) => <Err {...p} />)
    .with({ __type: "success" }, (p) => <Success {...p} />)
    .exhaustive();

const UserContainer: React.FC = () => <UserComponent {...useUser()} />;

export const User: React.FC = () => <UserContainer />;
