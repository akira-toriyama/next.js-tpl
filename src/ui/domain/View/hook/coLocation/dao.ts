import * as client from "~/infra/graphql/client";
import * as GQL from "./View.gql.generated";

export const find = (p: GQL.ViewQueryVariables) =>
  client.graphQLClient.request(GQL.ViewDocument, p);
