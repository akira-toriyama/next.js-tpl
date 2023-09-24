import type { NextPage } from "next";
import NextLink from "next/link";

const Page: NextPage = () => (
  <>
    <ul>
      <li>
        <NextLink data-pw="items" href="/items">
          items
        </NextLink>
      </li>
      {/* <li>
        <NextLink href="/parallel-routes">parallel-routes</NextLink>
      </li> */}
      {/* <li>
        <NextLink href="/template/a">template</NextLink>
      </li> */}
    </ul>
  </>
);

export default Page;
