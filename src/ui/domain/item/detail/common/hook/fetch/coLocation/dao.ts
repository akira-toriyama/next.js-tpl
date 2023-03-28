import * as client from "~/infra/graphql/client";
import * as GQL from "./Common.gql.generated";

export const fetchDetail = (p: GQL.CommonQueryVariables) =>
  client.graphQLClient.request(GQL.CommonDocument, p);
