import { createQueryKeyStore } from "@lukemorales/query-key-factory";
import * as ItemsGQL from "~/ui/domain/item/Items/hook/coLocation/Items.gql.generated";
import * as ItemDetailGQL from "~/ui/domain/item/detail/common/hook/fetch/coLocation/ItemDetail.gql.generated";
import * as client from "~/infra/graphql/client";

export const queryKeys = createQueryKeyStore({
  item: {
    detail: (p: ItemDetailGQL.ItemDetailQueryVariables) => ({
      queryKey: ["item", p],
      queryFn: () =>
        client.graphQLClient.request(ItemDetailGQL.ItemDetailDocument, p),
    }),
    list: {
      queryKey: ["items"],
      queryFn: () => client.graphQLClient.request(ItemsGQL.ItemsDocument),
    },
  },
});
