import React from "react";
import * as S from "./styles";
import { useExample } from "./useExample";

export const Example: React.VFC = () => {
  const state = useExample();
  return (
    <>
      {state.isSome && <>some</>}
      <div data-test-id="Example">
        <S.Txt>ExampleComponent</S.Txt>
      </div>
    </>
  );
};
