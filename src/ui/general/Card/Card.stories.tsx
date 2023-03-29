import * as card from "./Card";

export const Card = () => (
  <>
    <card.Card {...{ title: "title", body: "body" }} />
    <card.Card {...{ title: "title" }} />
  </>
);

export const Snapshot: React.FC = () => <Card />;
