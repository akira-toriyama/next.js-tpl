import { gql } from "graphql-request";

export const ItemEdit = gql`
  mutation ItemEdit($where: ItemWhereUniqueInput!, $data: ItemUpdateInput!) {
    updateItem(where: $where, data: $data) {
      id
    }
    publishItem(where: $where) {
      id
    }
  }
`;
