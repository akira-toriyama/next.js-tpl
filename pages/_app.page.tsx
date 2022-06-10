import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React from "react";
import { ErrorBoundary } from "~/presenter/component/ErrorBoundary";
import Head from "next/head";
import { App } from "~/presenter/context/App";
import { Theme } from "~/presenter/context/Theme";

const Page: NextPage<AppProps> = (props) => (
  <>
    <Head>
      {/* レスポンシブ用設定 */}
      <meta name="viewport" content="width=device-width" />
    </Head>
    <ErrorBoundary>
      <App>
        <Theme>
          <props.Component {...props.pageProps} />
        </Theme>
      </App>
    </ErrorBoundary>
  </>
);

// ts-prune-ignore-next
export default Page;
