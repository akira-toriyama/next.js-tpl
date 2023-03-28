import { gql } from "graphql-request";

export const View = gql`
  query View($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
