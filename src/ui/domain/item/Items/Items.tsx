import { match } from "ts-pattern";
import NextLink from "next/link";
import type * as tag from "~/ui/util/tag/tag";
import { pattern } from "~/ui/util/tag";
import * as list from "~/ui/general/List";
import type * as type from "./Items.type";
import { useItems } from "./hook";

export const Success: React.FC<tag.Lookup<type.Props["items"], "success">> = (
  props
) => (
  <list.Items>
    {props.data.map((v) => (
      <list.Item data-testid="item" key={v.id}>
        <NextLink href={`/items/${v.id}/view`}>{v.title}</NextLink>
      </list.Item>
    ))}
  </list.Items>
);

export const Loading: React.FC = () => <>items: Loading</>;
export const Failure: React.FC = () => <>items: Failure</>;
export const Empty: React.FC = () => <>items: Empty</>;

export const ItemsContainer: React.FC<type.Props> = (props) =>
  match(props.items)
    .with(pattern.ui.failure, Failure)
    .with(pattern.ui.empty, Empty)
    .with(pattern.ui.loading, Loading)
    .with(pattern.ui.success, Success)
    .exhaustive();

export const Items: React.FC = () => <ItemsContainer {...useItems()} />;
