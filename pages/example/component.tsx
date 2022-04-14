import type { NextPage } from "next";
import { Example } from "~/presenter/component/Example";
import type { StaticProps } from "./type";

export const Page: NextPage<StaticProps> = (props) => (
  <>
    {props.name}
    <Example />
  </>
);
