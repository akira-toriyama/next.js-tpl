import { gql } from "graphql-request";

export const List = gql`
  query List {
    items {
      id
      title
    }
  }
`;
