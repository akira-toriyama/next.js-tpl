import type { Props } from "./Example.type";
import { useApp } from "~/ui/hooks/useApp";
import { useState } from "react";

type UseExample = () => Props;
export const useExample: UseExample = () => {
  const [isSome] = useState(true);
  const app = useApp();

  return {
    ...app,
    isSome,
  };
};
