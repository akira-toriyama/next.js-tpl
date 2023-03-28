import * as client from "~/infra/graphql/client";
import * as GQL from "./ItemList.gql.generated";

export const fetchList = () =>
  client.graphQLClient.request(GQL.ItemListDocument);
