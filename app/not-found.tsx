import Link from "next/link";
import type { NextPage } from "next";
import { pagesPath } from "~/$path";

const Page: NextPage = () => (
  <Link href={pagesPath.$url().path}>Return Home</Link>
);

export default Page;
