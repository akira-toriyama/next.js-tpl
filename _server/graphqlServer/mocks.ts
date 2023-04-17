import { faker } from "@faker-js/faker";
import type * as type from "../../src/infra/graphql/types";

const item = {
  id: faker.datatype.uuid(),
  title: faker.animal.cat(),
  body: "Dummy text",
} as const satisfies Partial<type.Item>;

/**
 * https://www.the-guild.dev/graphql/tools/docs/mocking
 */
export const mocks = {
  Query: {
    item: () => item,
    items: () => [...Array(10)].map(() => item),
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
