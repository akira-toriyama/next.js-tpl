import { GraphQLClient } from "graphql-request";
import { env } from "~/infra/env";

export const graphQLClient = new GraphQLClient(
  env.resources.endpoint
).setHeader("authorization", env.resources.authorization);
