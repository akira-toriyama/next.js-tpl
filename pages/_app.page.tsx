import "normalize.css/normalize.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Wrapper } from "~/ui/provider/Wrapper";
import NextNProgress from "nextjs-progressbar";

type Props = AppProps<{ dehydratedState: unknown }>;
const Page: NextPage<Props> = (props) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width" />
    </Head>
    <NextNProgress />
    <Wrapper {...props.pageProps}>
      <props.Component {...props.pageProps} />
    </Wrapper>
  </>
);

export default Page;
