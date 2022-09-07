import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Wrapper } from "~/ui/component/provider/Wrapper";

const Page: NextPage<AppProps> = (props) => (
  <>
    <Head>
      {/* レスポンシブ用設定 */}
      <meta name="viewport" content="width=device-width" />
    </Head>
    <Wrapper>
      <props.Component {...props.pageProps} />
    </Wrapper>
  </>
);

export default Page;
