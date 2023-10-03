import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "~/ui/general/Link";

export const Empty: React.FC = () => <>items: Empty</>;

export const Loading: React.FC = () => <>items: Loading</>;

export const Items: React.FC<{
  items: ReadonlyArray<{ title: string; id: string }>;
}> = (props) => (
  <UnorderedList>
    {props.items.map((v) => (
      <ListItem data-testid="data" key={v.id}>
        <Link
          {...{
            href: `/items/${v.id}/detail`,
          }}
        >
          {v.title}
        </Link>
      </ListItem>
    ))}
  </UnorderedList>
);
