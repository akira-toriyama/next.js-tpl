import { GraphQLClient } from "graphql-request";
import { env } from "~/env";

export const client = new GraphQLClient(env.resources.endpoint).setHeader(
  "authorization",
  env.resources.authorization
);
