import { GraphQLClient } from "graphql-request";
import { env } from "~/env";

export const client = new GraphQLClient(env.resources.endpoint, {
  cache: "no-store",
}).setHeader("authorization", env.resources.authorization);
