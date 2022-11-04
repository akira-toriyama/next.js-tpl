import "~/ui/global.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Wrapper } from "~/ui/provider/Wrapper";

type Props = AppProps<{ dehydratedState: unknown }>;
const Page: NextPage<Props> = (props) => (
  <>
    <Head>
      {/* レスポンシブ用設定 */}
      <meta name="viewport" content="width=device-width" />
    </Head>
    <Wrapper {...props.pageProps}>
      <props.Component {...props.pageProps} />
    </Wrapper>
  </>
);

export default Page;
