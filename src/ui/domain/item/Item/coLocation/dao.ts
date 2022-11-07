import * as client from "~/infra/graphql/client";
import { failure as _failure } from "~/infra/graphql/util";
import * as Gql from "./Item.gql.generated";

export const find = (p: Gql.ItemQueryVariables) =>
  client.graphQLClient.request(Gql.ItemDocument, p);

export const failure = _failure<Gql.ItemQuery>;
