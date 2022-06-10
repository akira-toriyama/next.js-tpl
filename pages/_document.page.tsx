import { Html, Head, Main, NextScript } from "next/document";
import type { NextPage } from "next";

const Document: NextPage = () => (
  <Html lang="ja">
    <Head>
      <meta charSet="UTF-8" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="favicon.ico" type="image/svg+xml" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
