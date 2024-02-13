import type { NextPage } from "next";
import NextLink from "next/link";
import { pagesPath } from "~/$path";

const Page: NextPage = () => (
  <NextLink href={pagesPath.template.a.$url().path}>aへ</NextLink>
);

export default Page;
