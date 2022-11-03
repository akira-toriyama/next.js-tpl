import { gql } from "graphql-request";

export const Item = gql`
  query Item($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
