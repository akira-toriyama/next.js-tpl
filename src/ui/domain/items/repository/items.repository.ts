import * as gql from "~/infra/graphql/client";
import * as Q from "./query/Items.gql.generated";

export const fetchAll = () => gql.client.request(Q.ItemsDocument);
