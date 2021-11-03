import React from "react";

type UseExample = () => {
  isSome: boolean;
};
export const useExample: UseExample = () => {
  const [isSome] = React.useState(true);

  return {
    isSome,
  };
};
