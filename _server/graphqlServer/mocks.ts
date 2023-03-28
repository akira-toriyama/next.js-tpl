import { faker } from "@faker-js/faker";
import type * as type from "../../src/infra/graphql/types";

const createItem = (): Partial<type.Item> => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  body: faker.commerce.productDescription(),
});

/**
 * https://www.the-guild.dev/graphql/tools/docs/mocking
 */
export const mocks = {
  Query: {
    item: () => createItem(),
    items: () => [...Array(10)].map(() => createItem()),
  },
};
