import { useExample } from "./useExample";
import type { Props } from "./Example.type";
import * as S from "./Example.style";

export const ExampleComponent: React.FC<Props> = (props) => (
  <>
    {props.isSome && <>some</>}
    <div data-testid="Example">Example</div>
    <S.Button type="button">ボタン</S.Button>

    <S.Items>
      <S.Item>a</S.Item>
      <S.Item>b</S.Item>
      <S.Item>c</S.Item>
    </S.Items>
    <S.Items2>
      <li>x</li>
      <li>y</li>
      <li>z</li>
    </S.Items2>
  </>
);

export const Example: React.FC = () => <ExampleComponent {...useExample()} />;
