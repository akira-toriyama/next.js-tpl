import type { NextPage } from "next";
import { Example } from "~/presenter/component/Example";
import type { StaticProps } from "./type";
import { CountProvider } from "~/presenter/component/Context/Count";

export const Page: NextPage<StaticProps> = (props) => (
  <CountProvider>
    {props.name}
    <Example />
  </CountProvider>
);
