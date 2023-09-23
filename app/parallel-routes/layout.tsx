import type { NextPage } from "next";

type Props = {
  children: React.ReactNode;
  contentA: React.ReactNode;
  contentB: React.ReactNode;
};
const Layout: NextPage<Props> = (props) => (
  <>
    {props.children}
    {props.contentA}
    {props.contentB}
  </>
);

export default Layout;
