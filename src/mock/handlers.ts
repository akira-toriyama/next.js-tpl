import { graphql } from "msw";
import * as ItemGql from "~/ui/domain/item/Item/coLocation/Item.gql.generated";
import * as ItemsGql from "~/ui/domain/item/Items/coLocation/Items.gql.generated";

export const handlers = [
  graphql.query(ItemGql.ItemDocument, (_, res, ctx) =>
    res(
      ctx.data({
        item: {
          id: "",
          title: "",
          body: "",
        },
      })
    )
  ),
  graphql.query(ItemsGql.ItemsDocument, (_, res, ctx) =>
    res(
      ctx.data({
        items: [
          {
            id: "",
            title: "",
          },
        ],
      })
    )
  ),
];
