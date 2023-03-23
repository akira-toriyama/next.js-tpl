import { graphql } from "msw";
import * as ItemGql from "~/ui/domain/item/Item/coLocation/Item.gql.generated";
import * as ItemsGql from "~/ui/domain/item/Items/coLocation/Items.gql.generated";
import { faker } from "@faker-js/faker";

export const handlers = [
  graphql.query(ItemGql.ItemDocument, (_, res, ctx) =>
    res(
      ctx.data({
        item: {
          id: faker.datatype.uuid(),
          title: faker.commerce.productName(),
          body: faker.commerce.productDescription(),
        },
      })
    )
  ),
  graphql.query(ItemsGql.ItemsDocument, (_, res, ctx) =>
    res(
      ctx.data({
        items: [
          {
            id: faker.datatype.uuid(),
            title: faker.commerce.productName(),
          },
          {
            id: faker.datatype.uuid(),
            title: faker.commerce.productName(),
          },
        ],
      })
    )
  ),
];
