---
to: src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/coLocation/<%= h.changeCase.upperCaseFirst(name) %>.gql.ts
sh: yarn prettier --write src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/coLocation/<%= h.changeCase.upperCaseFirst(name) %>.gql.ts && yarn generate:fromGQL
---

import { gql } from "graphql-request";

export const <%= h.changeCase.upperCaseFirst(name) %> = gql`
  query <%= h.changeCase.upperCaseFirst(name) %>($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
