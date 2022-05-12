import React from "react";
import { useExample } from "./useExample";
import type { Props } from "./Example.type";
import * as S from "./Example.style";

export const ExampleComponent: React.FC<Props> = (props) => (
  <>
    {props.isSome && <>some</>}
    <div data-testid="Example">Example</div>
    <S.Button>ボタン</S.Button>
  </>
);

export const Example: React.FC = () => <ExampleComponent {...useExample()} />;
