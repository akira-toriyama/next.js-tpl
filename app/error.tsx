"use client";

import type { NextPage } from "next";

/**
 * https://nextjs.org/docs/app/api-reference/file-conventions/error
 */
export type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Page: NextPage<Props> = (props) => (
  <button onClick={props.reset}>Try again</button>
);

export default Page;
