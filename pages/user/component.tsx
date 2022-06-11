import type { NextPage } from "next";
import { User } from "~/ui/component/feature/User";
import * as Entity from "~/domain/user/Entity";

export const Page: NextPage<Entity.UIData> = (props) => (
  <>
    StaticProps: {JSON.stringify(props)}
    <hr />
    <User />
  </>
);
