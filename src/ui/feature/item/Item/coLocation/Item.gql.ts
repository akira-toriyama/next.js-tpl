import { gql } from "graphql-request";

export const Item = gql`
  query Item($id: ID!) {
    # TODO 他のクエリも追加
    item(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
