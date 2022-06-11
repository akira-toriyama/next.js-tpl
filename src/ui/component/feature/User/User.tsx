import { useUser } from "./useUser";
import * as type from "./User.type";
import React from "react";
import { Example } from "~/ui/component/general/Example";

const UserComponent: React.FC<type.Props> = (props) => (
  <>
    CSR: {JSON.stringify(props)}
    <hr />
    <Example />
  </>
);

export const User: React.FC = () => <UserComponent {...useUser()} />;
