import * as Items from "~/ui/domain/item/Items/hook/coLocation/Items.gql.generated";
import * as ItemDetail from "~/ui/domain/item/detail/common/hook/fetch/coLocation/ItemDetail.gql.generated";
import * as client from "~/infra/graphql/client";
import {
  createQueryKeys,
  mergeQueryKeys,
} from "@lukemorales/query-key-factory";

export const queries = mergeQueryKeys(
  createQueryKeys("item", {
    detail: (p: ItemDetail.ItemDetailQueryVariables) => ({
      queryKey: ["item", p],
      queryFn: () =>
        client.graphQLClient.request(ItemDetail.ItemDetailDocument, p),
    }),
    all: {
      queryKey: null,
      queryFn: () => client.graphQLClient.request(Items.ItemsDocument),
    },
  })
);
