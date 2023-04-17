import * as ItemEdit from "~/ui/domain/item/detail/ItemEdit/hook/coLocation/ItemEdit.gql.generated";
import * as client from "~/infra/graphql/client";

export const mutations = {
  item: {
    itemEdit: {
      mutationFn: (p: ItemEdit.ItemEditMutationVariables) =>
        client.graphQLClient.request(ItemEdit.ItemEditDocument, p),
    },
  },
} as const;
