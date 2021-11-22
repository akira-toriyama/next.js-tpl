import type { NextPage } from "next";
import { Example } from "~/presenter/component/Example";
import type { StaticProps } from "./type";
import { CountProvider } from "~/presenter/component/Example/Context/Count";
import { Count2Provider } from "~/presenter/component/Example/Context/Count2";

export const Page: NextPage<StaticProps> = (props) => (
  <Count2Provider>
    <CountProvider>
      {props.name}
      <Example />
    </CountProvider>
  </Count2Provider>
);
