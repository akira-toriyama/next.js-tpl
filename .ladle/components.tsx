import type { GlobalProvider } from "@ladle/react";
import { Wrapper } from "~/presenter/component/provider/Wrapper";

export const Provider: GlobalProvider = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
