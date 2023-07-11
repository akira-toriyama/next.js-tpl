function isString(value: unknown, name: string): asserts value is string {
  if (typeof value !== "string") {
    throw new Error(`${name} is not a string.`);
  }
}

const validateEnv = () => {
  isString(
    process.env["NEXT_PUBLIC_GRAPHQL_ENDPOINT"],
    "NEXT_PUBLIC_GRAPHQL_ENDPOINT",
  );

  isString(
    process.env["NEXT_PUBLIC_GRAPHQL_ENDPOINT_AUTHORIZATION"],
    "NEXT_PUBLIC_GRAPHQL_ENDPOINT_AUTHORIZATION",
  );

  return {
    resources: {
      endpoint: process.env["NEXT_PUBLIC_GRAPHQL_ENDPOINT"],
      authorization: process.env["NEXT_PUBLIC_GRAPHQL_ENDPOINT_AUTHORIZATION"],
    },
  } as const;
};

export const env = validateEnv();
