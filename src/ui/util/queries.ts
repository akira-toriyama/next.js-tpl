import { createQueryKeyStore } from "@lukemorales/query-key-factory";
import * as Items from "~/ui/domain/item/Items/hook/coLocation/Items.gql.generated";
import * as ItemDetail from "~/ui/domain/item/detail/common/hook/fetch/coLocation/ItemDetail.gql.generated";
import * as client from "~/infra/graphql/client";

export const queries = createQueryKeyStore({
  item: {
    item: (p: ItemDetail.ItemDetailQueryVariables) => ({
      queryKey: ["item", p],
      queryFn: () =>
        client.graphQLClient.request(ItemDetail.ItemDetailDocument, p),
    }),
    items: {
      queryKey: ["items"],
      queryFn: () => client.graphQLClient.request(Items.ItemsDocument),
    },
  },
});
