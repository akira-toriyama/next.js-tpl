import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "~/ui/general/Link";
import { pagesPath } from "~/$path";

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
            href: pagesPath.items._id(v.id).detail.$url().path,
          }}
        >
          {v.title}
        </Link>
      </ListItem>
    ))}
  </UnorderedList>
);
