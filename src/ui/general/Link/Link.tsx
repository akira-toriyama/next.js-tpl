import { Link as LinkBase } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  href: string;
  children: string;
};
export const Link: React.FC<Props> = (props) => (
  <LinkBase
    {...{
      ...props,
      as: NextLink,
    }}
  >
    {props.children}
  </LinkBase>
);
