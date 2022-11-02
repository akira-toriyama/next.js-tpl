import { gql } from "graphql-request";

export const Items = gql`
  query Items {
    items {
      id
      title
    }
  }
`;
