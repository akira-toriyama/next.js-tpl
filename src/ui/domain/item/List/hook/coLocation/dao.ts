import * as client from "~/infra/graphql/client";
import * as GQL from "./List.gql.generated";

export const fetchList = () => client.graphQLClient.request(GQL.ListDocument);
