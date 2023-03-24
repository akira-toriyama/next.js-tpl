import { match } from "ts-pattern";
import * as tag from "~/ui/util/tag";
import * as card from "~/ui/general/Card";
import type * as type from "../Item.type";
import { useItem } from "../hook";

export const Success: React.FC<tag.Lookup<type.Props["item"], "success">> = (
  props
) => <card.Card {...props.data} />;

export const Loading: React.FC = () => <>item: Loading</>;
export const Failure: React.FC = () => <>item: Failure</>;
export const Empty: React.FC = () => <>item: Empty</>;

export const ItemContainer: React.FC<type.Props> = (props) =>
  match(props.item)
    .with(tag.pattern.ui.failure, Failure)
    .with(tag.pattern.ui.empty, Empty)
    .with(tag.pattern.ui.loading, Loading)
    .with(tag.pattern.ui.success, Success)
    .exhaustive();

export const Item: React.FC<type.OuterProps> = (props) => (
  <ItemContainer {...useItem(props)} />
);
