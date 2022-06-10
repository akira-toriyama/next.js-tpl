import type { GlobalProvider } from "@ladle/react";
import { Wrapper } from "~/presenter/component/Wrapper";

export const Provider: GlobalProvider = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
