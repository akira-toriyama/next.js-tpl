"use client";

import type { NextPage } from "next";
import { useMs } from "./ms.hook";

type Props = {
  children: React.ReactNode;
};
const Page: NextPage<Props> = (props) => {
  const { ms } = useMs();

  return (
    <>
      <p>layout: {ms}</p>
      {props.children}
    </>
  );
};

export default Page;
