import { gql } from "graphql-request";

export const ItemDetail = gql`
  query ItemDetail($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
