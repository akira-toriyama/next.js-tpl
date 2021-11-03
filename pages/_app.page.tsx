import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React from "react";
import { ErrorBoundary } from "~/presenter/component/ErrorBoundary";

const Page: NextPage<AppProps> = (props) => (
  <ErrorBoundary>
    <props.Component {...props.pageProps} />
  </ErrorBoundary>
);

// ts-prune-ignore-next
export default Page;
