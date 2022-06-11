import type { NextPage } from "next";
import NextLink from "next/link";

const Page: NextPage = () => (
  <ul>
    <li>
      <NextLink href="/user">user</NextLink>
    </li>
  </ul>
);

export default Page;
