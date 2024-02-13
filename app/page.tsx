import { Link } from "~/ui/general/Link";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { pagesPath } from "~/$path";

const Page = () => (
  <UnorderedList>
    <ListItem>
      <Link
        {...{
          href: pagesPath.items.$url().path,
        }}
      >
        items
      </Link>
    </ListItem>
    <ListItem>
      <Link
        {...{
          href: pagesPath.parallel_routes.$url().path,
        }}
      >
        parallel-routes
      </Link>
    </ListItem>
    <ListItem>
      <Link
        {...{
          href: pagesPath.template.a.$url().path,
        }}
      >
        template a
      </Link>
    </ListItem>
  </UnorderedList>
);

export default Page;
