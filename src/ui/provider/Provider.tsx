"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export const Provider: React.FC<{ children: React.ReactNode }> = (props) => (
  <CacheProvider>
    <ChakraProvider>{props.children}</ChakraProvider>
  </CacheProvider>
);
