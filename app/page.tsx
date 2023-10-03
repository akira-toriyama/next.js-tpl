import { Link } from "~/ui/general/Link";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const Page = () => (
  <UnorderedList>
    <ListItem>
      <Link
        {...{
          href: "/items",
        }}
      >
        items
      </Link>
    </ListItem>
    <ListItem>
      <Link
        {...{
          href: "/parallel-routes",
        }}
      >
        parallel-routes
      </Link>
    </ListItem>
    <ListItem>
      <Link
        {...{
          href: "/template",
        }}
      >
        template
      </Link>
    </ListItem>
  </UnorderedList>
);

export default Page;
