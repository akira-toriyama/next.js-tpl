import { Link } from "~/ui/general/Link";
import {
  ListItem,
  CardBody,
  UnorderedList,
  Card,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { formParam } from "../../_/presenter";
import { pagesPath } from "~/$path";

export const Empty: React.FC = () => <>detail: Empty</>;

export const Loading: React.FC = () => <>detail: Loading</>;

export const ItemDetail: React.FC<{
  item: {
    id: string;
    title: string;
    body: string | null;
  };
}> = (props) => (
  <>
    <UnorderedList>
      <ListItem>
        <Link
          {...{
            href: pagesPath.items.$url().path,
          }}
        >
          一覧へ
        </Link>
      </ListItem>
      <ListItem>
        <Link
          {...{
            href: pagesPath.items._id(props.item.id).edit.$url().path,
          }}
        >
          編集へ
        </Link>
      </ListItem>
    </UnorderedList>

    <Card w="80" m="5">
      <CardHeader>
        <Heading size="md">Data detail</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs">{formParam.title.label}</Heading>
            <Text pt="2" fontSize="sm">
              {props.item.title}
            </Text>
          </Box>

          <Box>
            <Heading size="xs">{formParam.body.label}</Heading>
            <Text pt="2" fontSize="sm">
              {props.item.body}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  </>
);
