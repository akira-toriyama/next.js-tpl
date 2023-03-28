import { gql } from "graphql-request";

export const ItemList = gql`
  query ItemList {
    items {
      id
      title
    }
  }
`;
