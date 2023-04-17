import { Input } from "~/ui/general/form/Input";
import { Lookup } from "~/ui/util/type/Lookup";
import type * as commonType from "../common/common.type";
import NextLink from "next/link";
import { match } from "ts-pattern";
import { useItemEdit } from "./hook";
import type * as type from "./ItemEdit.type";

export const Success: React.FC<Lookup<type.Props, "success">> = (props) => (
  <>
    <NextLink href={`/items/${props.selectors.id}/view`}>view</NextLink>
    <form onSubmit={props.form.handleSubmit(props.operations.onSubmit)}>
      <p>{props.selectors.serverErrorMessage}</p>
      <Input
        {...{
          _input: props.form.register("title"),
          id: props.selectors.ids.title,
          name: "title",
          type: "text",
          placeholder: "素晴らしいタイトル",
          wrapper: {
            required: true,
            error: {
              messages: props.selectors.errorMessages.title,
            },
            label: "title",
          },
        }}
      />
      <Input
        {...{
          _input: props.form.register("body"),
          id: props.selectors.ids.body,
          name: "body",
          type: "text",
          placeholder: "素晴らしいタイトル",
          wrapper: {
            required: true,
            error: {
              messages: props.selectors.errorMessages.body,
            },
            label: "body",
          },
        }}
      />
      <button type="submit" disabled={props.selectors.canSubmit}>
        submit
      </button>
    </form>
  </>
);

export const Loading: React.FC = () => <>item: Loading</>;
export const Failure: React.FC = () => <>item: Failure</>;
export const Empty: React.FC = () => <>item: Empty</>;

export const ItemEditContainer: React.FC<type.Props> = (props) =>
  match(props)
    .with({ __tag: "failure" }, Failure)
    .with({ __tag: "empty" }, Empty)
    .with({ __tag: "loading" }, Loading)
    .with({ __tag: "success" }, Success)
    .exhaustive();

export const ItemEdit: React.FC<commonType.OuterProps> = (props) => (
  <ItemEditContainer {...useItemEdit(props)} />
);
