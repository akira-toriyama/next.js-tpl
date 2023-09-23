import * as gql from "~/infra/graphql/client";
import * as Q from "./query/Item.gql.generated";

export const fetchBy = (p: Q.ItemQueryVariables) =>
  gql.client.request(Q.ItemDocument, { id: p.id });
