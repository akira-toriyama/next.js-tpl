import React from "react";
import { useExample } from "./useExample";
import type { Props } from "./Example.type";
import * as S from "./Example.style";

/**
 * style適用済のコンポーネントを利用
 */
const ButtonsA: React.FC = () => (
  <S.ButtonsWrapper>
    <S.Button>ボタン</S.Button>
    <S.Button>ボタン</S.Button>
  </S.ButtonsWrapper>
);

export const ExampleComponent: React.FC<Props> = (props) => (
  <>
    {props.isSome && <>some</>}
    <div data-testid="Example">Example</div>
    <ButtonsA />
  </>
);

export const Example: React.FC = () => <ExampleComponent {...useExample()} />;
