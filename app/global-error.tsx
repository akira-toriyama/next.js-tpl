"use client";

import type { NextPage } from "next";

/**
 * https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs
 */
export type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Page: NextPage<Props> = (props) => (
  <html>
    <body>
      <h2>Something went wrong!</h2>
      <button onClick={props.reset}>Try again</button>
    </body>
  </html>
);

export default Page;
