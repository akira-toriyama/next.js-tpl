import { match } from "ts-pattern";
import * as card from "~/ui/general/Card";
import type * as type from "./ItemView.type";
import type * as commonType from "../common/common.type";
import { useItemView } from "./hook";
import NextLink from "next/link";
import { Lookup } from "~/ui/util/type/Lookup";

export const Success: React.FC<Lookup<type.Props, "success">> = (props) => (
  <>
    <NextLink href={`/items/${props.selectors.id}/edit`}>edit</NextLink>
    <card.Card {...props.selectors} />
  </>
);

export const Loading: React.FC = () => <>item: Loading</>;
export const Failure: React.FC = () => <>item: Failure</>;
export const Empty: React.FC = () => <>item: Empty</>;

export const ItemViewContainer: React.FC<type.Props> = (props) =>
  match(props)
    .with({ __tag: "failure" }, Failure)
    .with({ __tag: "empty" }, Empty)
    .with({ __tag: "loading" }, Loading)
    .with({ __tag: "success" }, Success)
    .exhaustive();

export const ItemView: React.FC<commonType.OuterProps> = (props) => (
  <ItemViewContainer {...useItemView(props)} />
);
