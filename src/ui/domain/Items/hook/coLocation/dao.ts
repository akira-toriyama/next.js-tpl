import * as client from "~/infra/graphql/client";
import * as GQL from "./Items.gql.generated";

export const fetchItems = () => client.graphQLClient.request(GQL.ItemsDocument);
