import * as card from "./Card";

export const Card: React.FC = () => (
  <>
    <card.Card {...{ title: "タイトル", body: "本文" }} />
    <card.Card {...{ title: "タイトル" }} />
  </>
);
