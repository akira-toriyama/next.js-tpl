import React from "react";
import type { Props } from "./Example.type";

type UseExample = () => Props;
export const useExample: UseExample = () => {
  const [isSome] = React.useState(true);

  return {
    isSome,
  };
};
