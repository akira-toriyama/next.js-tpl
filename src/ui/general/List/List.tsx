import * as S from "./styled";

type ItemsProps = {
  children: React.ReactNode;
};
export const Items: React.FC<ItemsProps> = (props) => <ul>{props.children}</ul>;

type ItemProps = {
  children: React.ReactNode;
};
export const Item: React.FC<ItemProps> = (props) => (
  <S.Li>{props.children}</S.Li>
);
