import { gql } from "graphql-request";

export const Common = gql`
  query Common($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
