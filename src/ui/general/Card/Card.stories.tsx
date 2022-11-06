import * as card from "./Card";
import type { Story } from "@ladle/react";

export const All: React.FC = () => (
  <>
    <card.Card {...{ title: "タイトル", body: "本文" }} />
    <card.Card {...{ title: "タイトル" }} />
  </>
);

type BasicProps = React.ComponentProps<typeof card.Card>;
export const Basic: Story<BasicProps> = (props) => <card.Card {...props} />;

Basic.args = ((): BasicProps => ({
  title: "title",
  body: "body",
}))();
