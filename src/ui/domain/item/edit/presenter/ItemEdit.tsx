"use client";

import type * as type from "./ItemEdit.type";
import { useItemEdit } from "./hook";
import {
  ListItem,
  UnorderedList,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "~/ui/general/Link";

export const Empty: React.FC = () => <>edit: 対象データ無し</>;

export const Loading: React.FC = () => <>edit: Loading</>;

export const ItemEditComponent: React.FC<type.Props> = (props) => (
  <>
    <UnorderedList>
      <ListItem>
        <Link
          {...{
            href: `/items`,
          }}
        >
          一覧へ
        </Link>
      </ListItem>
      <ListItem>
        <Link
          {...{
            href: `/items/${props.item.id}/edit`,
          }}
        >
          編集へ
        </Link>
      </ListItem>
    </UnorderedList>
    <Box w="80" m="5">
      <form onSubmit={props.form.handleSubmit(props.onSubmit)}>
        <p>{props.serverErrorMessage}</p>

        <FormControl
          {...{
            isRequired: true,
            isInvalid: !!props.form.formState.errors.title,
          }}
        >
          <FormLabel htmlFor={"title"}>タイトル</FormLabel>
          <Input
            {...{
              ...props.form.register("title"),
              id: "title",
              // placeholder: '',
              // maxLength: 10,
            }}
          />
          <FormErrorMessage>
            {props.form.formState.errors.title?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          {...{
            isRequired: true,
            isInvalid: !!props.form.formState.errors.body,
          }}
        >
          <FormLabel htmlFor={"body"}>body</FormLabel>
          <Input
            {...{
              ...props.form.register("body"),
              id: "body",
              // placeholder: '',
              // maxLength: 10,
            }}
          />
          <FormErrorMessage>
            {props.form.formState.errors.body?.message}
          </FormErrorMessage>
        </FormControl>

        <Center m="5">
          <Button
            colorScheme="blue"
            type="submit"
            isDisabled={props.form.formState.isSubmitting}
          >
            submit
          </Button>
        </Center>
      </form>
    </Box>
  </>
);

/* c8 ignore start */
export const ItemEdit: React.FC<type.OuterProps> = (props) => (
  <ItemEditComponent {...useItemEdit(props)} />
);
/* c8 ignore stop */
