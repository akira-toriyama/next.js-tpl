import { useUser } from "./useUser";
import * as type from "./User.type";
import React from "react";
import { Example } from "~/ui/component/general/Example";
import { Suspense } from "react";

const UserComponent: React.FC<type.Props> = (props) => (
  <>
    CSR: {JSON.stringify(props)}
    <hr />
    <Example />
  </>
);

const UserContainer: React.FC = () => <UserComponent {...useUser()} />;

export const User: React.FC = () => (
  <Suspense fallback={<div>loading</div>}>
    <UserContainer />
  </Suspense>
);
