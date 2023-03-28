import * as client from "~/infra/graphql/client";
import * as GQL from "./ItemDetail.gql.generated";

export const fetchDetail = (p: GQL.ItemDetailQueryVariables) =>
  client.graphQLClient.request(GQL.ItemDetailDocument, p);
