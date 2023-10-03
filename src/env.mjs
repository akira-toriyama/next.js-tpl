import { z } from "zod";

const schema = z.object({
  resources: z.object({
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: z.string(),
    NEXT_PUBLIC_GRAPHQL_ENDPOINT_AUTHORIZATION: z.string(),
  }),
});

export const env = schema.parse({
  resources: {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env["NEXT_PUBLIC_GRAPHQL_ENDPOINT"],
    NEXT_PUBLIC_GRAPHQL_ENDPOINT_AUTHORIZATION:
      process.env["NEXT_PUBLIC_GRAPHQL_ENDPOINT_AUTHORIZATION"],
  },
});
