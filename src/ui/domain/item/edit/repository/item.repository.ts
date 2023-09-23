import * as gql from "~/infra/graphql/client";
import * as M from "./mutation/ItemEdit.gql.generated";

export const save = (p: M.ItemEditMutationVariables) =>
  gql.client.request(M.ItemEditDocument, p);
