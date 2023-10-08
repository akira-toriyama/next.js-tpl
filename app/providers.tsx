"use client";
import "@fontsource/noto-sans-jp";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const Providers: React.FC<{ children: React.ReactNode }> = (props) => (
  <CacheProvider>
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          heading: `'Noto Sans JP', sans-serif`,
          body: `'Noto Sans JP', sans-serif`,
        },
      })}
    >
      {props.children}
    </ChakraProvider>
  </CacheProvider>
);
