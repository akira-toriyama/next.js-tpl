import * as client from "~/infra/graphql/client";
import * as GQL from "./Items.gql.generated";

export const fetchList = () => client.graphQLClient.request(GQL.ItemsDocument);
