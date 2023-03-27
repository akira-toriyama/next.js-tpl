import * as client from "~/infra/graphql/client";
import * as Gql from "./Items.gql.generated";

export const fetchItems = () => client.graphQLClient.request(Gql.ItemsDocument);
