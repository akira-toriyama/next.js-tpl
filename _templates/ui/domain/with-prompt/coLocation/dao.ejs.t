---
to: src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/coLocation/dao.ts
sh: yarn prettier --write src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/coLocation/dao.ts
---

import * as client from "~/infra/graphql/client";
import { failure as _failure } from "~/infra/graphql/util";
import * as Gql from "./<%= h.changeCase.upperCaseFirst(name) %>.gql.generated";

export const find = (p: Gql.<%= h.changeCase.upperCaseFirst(name) %>QueryVariables) =>
  client.graphQLClient.request(Gql.<%= h.changeCase.upperCaseFirst(name) %>Document, p);

export const failure = _failure<Gql.<%= h.changeCase.upperCaseFirst(name) %>Query>;
