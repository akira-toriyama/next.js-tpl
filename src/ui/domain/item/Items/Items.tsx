import { match } from "ts-pattern";
import NextLink from "next/link";
import * as list from "~/ui/general/List";
import type * as type from "./Items.type";
import { useItems } from "./hook";
import { Lookup } from "~/ui/util/type/Lookup";

export const Success: React.FC<Lookup<type.Props, "success">> = (props) => (
  <list.Items>
    {props.selectors.map((v) => (
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
  match(props)
    .with({ __tag: "failure" }, Failure)
    .with({ __tag: "empty" }, Empty)
    .with({ __tag: "loading" }, Loading)
    .with({ __tag: "success" }, Success)
    .exhaustive();

export const Items: React.FC = () => <ItemsContainer {...useItems()} />;
