import { faker } from "@faker-js/faker";
import type * as type from "../../src/infra/graphql/types";

const item = () =>
  ({
    id: faker.string.uuid(),
    title: faker.animal.cat(),
    body: "Dummy text",
  }) as const satisfies Partial<type.Item>;

const data = {
  item,
} as const;

/**
 * https://www.the-guild.dev/graphql/tools/docs/mocking
 */
export const mocks = {
  Query: {
    item: data.item,
    items: () => [...Array(10)].map(data.item),
  },
  Mutation: {
    // updateItem: () => {
    //   throw new GraphQLError("You are not authorized to perform this action.", {
    //     extensions: {
    //       code: "FORBIDDEN",
    //     },
    //   });
    // },
  },
};
