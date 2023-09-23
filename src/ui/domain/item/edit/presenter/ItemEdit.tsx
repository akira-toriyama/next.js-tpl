"use client";

import NextLink from "next/link";
import type * as type from "./ItemEdit.type";
import { useItemEdit } from "./hook";

export const Empty: React.FC = () => <>edit: 対象データ無し</>;

export const Loading: React.FC = () => <>edit: Loading</>;

export const ItemEditComponent: React.FC<type.Props> = (props) => (
  <>
    <ul>
      <li>
        <NextLink href={`/items`}>items</NextLink>
      </li>
      <li>
        <NextLink href={`/items/${props.item.id}/detail`}>detail</NextLink>
      </li>
    </ul>
    <form onSubmit={props.form.handleSubmit(props.onSubmit)}>
      <p>{props.serverErrorMessage}</p>

      <input {...props.form.register("title")} name="title" type="input" />
      <p>{props.form.formState.errors.title?.message}</p>

      <input {...props.form.register("body")} name="body" type="input" />
      <p>{props.form.formState.errors.body?.message}</p>

      <button type="submit" disabled={props.form.formState.isSubmitting}>
        submit
      </button>
    </form>
  </>
);

/* c8 ignore start */
export const ItemEdit: React.FC<type.OuterProps> = (props) => (
  <ItemEditComponent {...useItemEdit(props)} />
);
/* c8 ignore stop */
