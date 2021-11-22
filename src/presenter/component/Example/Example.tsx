import React from "react";
import * as S from "./styles";
import { useExample } from "./useExample";
import { Count, Counter } from "~/presenter/component/Context/Count";

export const Example: React.VFC = () => {
  const state = useExample();

  return (
    <>
      <Count />
      <Counter />
      {state.isSome && <>some</>}
      <div data-test-id="Example">
        <S.Txt>ExampleComponent</S.Txt>
      </div>
    </>
  );
};
