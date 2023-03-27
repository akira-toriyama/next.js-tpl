import * as client from "~/infra/graphql/client";
import * as Gql from "./Item.gql.generated";

export const find = (p: Gql.ItemQueryVariables) =>
  client.graphQLClient.request(Gql.ItemDocument, p);
