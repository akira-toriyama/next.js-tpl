import React from "react";
import type { GlobalProvider } from "@ladle/react";
import { Wrapper } from "../src/ui/component/provider/Wrapper";

export const Provider: GlobalProvider = (props) => (
  <Wrapper>{props.children}</Wrapper>
);
