import type { GlobalProvider } from "@ladle/react";
import { Wrapper } from "~/ui/component/provider/Wrapper";

export const Provider: GlobalProvider = (props) => (
  <Wrapper>{props.children}</Wrapper>
);
