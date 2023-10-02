import * as c from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  href: string;
  children: string;
};
export const Link: React.FC<Props> = (props) => (
  <c.Link
    {...{
      ...props,
      as: NextLink,
    }}
  >
    {props.children}
  </c.Link>
);
