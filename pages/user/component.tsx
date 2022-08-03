import { SWRConfig } from "swr";
import type { NextPage } from "next";
import { User } from "~/ui/component/feature/User";
import * as Entity from "~/domain/user/Entity";
import { swrPath } from "~/ui/util/swrPath";

export const Page: NextPage<Entity.UIData> = (props) => (
  <SWRConfig value={{ fallback: { [swrPath["/fetchUser"]]: props } }}>
    StaticProps: {JSON.stringify(props)}
    <hr />
    <User />
  </SWRConfig>
);
