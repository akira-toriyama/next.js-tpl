import "@fontsource/noto-sans-jp";
import type { GlobalProvider } from "@ladle/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const Provider: GlobalProvider = (props) => (
  <ChakraProvider
    theme={extendTheme({
      fonts: {
        body: `'Noto Sans JP', sans-serif`,
      },
    })}
  >
    {props.children}
  </ChakraProvider>
);
