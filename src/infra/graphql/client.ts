import { GraphQLClient } from "graphql-request";
import { env } from "~/env.mjs";

export const client = new GraphQLClient(
  env.resources.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
).setHeader(
  "authorization",
  env.resources.NEXT_PUBLIC_GRAPHQL_ENDPOINT_AUTHORIZATION,
);
