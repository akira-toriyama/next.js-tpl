import "./style.css";
import type { GlobalProvider } from "@ladle/react";
import { ChakraProvider } from "@chakra-ui/react";

export const Provider: GlobalProvider = (props) => <ChakraProvider>{props.children}</ChakraProvider>;
