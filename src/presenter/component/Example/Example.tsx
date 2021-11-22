import React from "react";
import * as S from "./styles";
import { useExample } from "./useExample";
import { Count, Counter } from "~/presenter/component/Example/Context/Count";
import { Count2, Counter2 } from "~/presenter/component/Example/Context/Count2";

export const Example: React.VFC = () => {
  const state = useExample();

  return (
    <>
      <Count />
      <Counter />
      <Count2 />
      <Counter2 />
      {state.isSome && <>some</>}
      <div data-test-id="Example">
        <S.Txt>ExampleComponent</S.Txt>
      </div>
    </>
  );
};
