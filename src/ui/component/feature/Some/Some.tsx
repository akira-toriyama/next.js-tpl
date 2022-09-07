import { useSome } from "./useSome";
import type { Props } from "./type";
// Styledを毎回つけるのは、手間になるのでこのようにする
import * as S from "./style";

// 個別に書く
export const Success: React.FC<Props> = () => (
  <div data-testid="success">
    UIを担当
    <S.UI />
  </div>
);

// 個別に書く
export const Loading: React.FC = () => (
  <div data-testid="loading">ローディング</div>
);

// 個別に書く
export const Failure: React.FC = () => <div data-testid="failure">失敗</div>;

const componentMap = {
  success: Success,
  loading: Loading,
  failure: Failure,
} as const;

export const SomeContainer: React.FC<Props> = (props) => {
  // as constとの組み合わせでマッピング
  const Component = componentMap[props.__type];
  return <Component {...props} />;
};

// テスタビリティを向上させるために、hooksを展開させるだけのコンポーネントを作る
export const Some: React.FC = () => <SomeContainer {...useSome()} />;
