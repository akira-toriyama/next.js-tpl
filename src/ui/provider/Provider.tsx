"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Noto_Sans_JP } from "@next/font/google";

const notoSansJP400 = Noto_Sans_JP({
  weight: "400",
  display: "swap",
  preload: false,
});

export const Provider: React.FC<{ children: React.ReactNode }> = (props) => (
  <CacheProvider>
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: notoSansJP400.style.fontFamily,
          body: notoSansJP400.style.fontFamily,
        },
      })}
    >
      {props.children}
    </ChakraProvider>
  </CacheProvider>
);
