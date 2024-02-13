import type { NextPage } from "next";
import NextLink from "next/link";
import { pagesPath } from "~/$path";

const Page: NextPage = () => (
  <NextLink href={pagesPath.template.b.$url().path}>bへ</NextLink>
);

export default Page;
