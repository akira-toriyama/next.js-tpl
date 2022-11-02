import type { NextPage } from "next";
import NextLink from "next/link";

const Page: NextPage = () => (
  <ul>
    <li>
      <NextLink href="/items">items</NextLink>
    </li>
  </ul>
);

export default Page;
