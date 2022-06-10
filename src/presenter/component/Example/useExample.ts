import React from "react";
import type { Props } from "./Example.type";
import { useApp } from "~/presenter/hooks/useApp";

type UseExample = () => Props;
export const useExample: UseExample = () => {
  const [isSome] = React.useState(true);
  const app = useApp();

  return {
    ...app,
    isSome,
  };
};
