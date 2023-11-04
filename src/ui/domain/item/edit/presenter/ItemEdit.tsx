import { z } from "zod";

export function isValidZodLiteralUnion<T extends z.ZodLiteral<unknown>>(
  literals: T[],
): literals is [T, T, ...T[]] {
  return literals.length >= 2;
}
export function constructZodLiteralUnionType<T extends z.ZodLiteral<unknown>>(
  literals: T[],
) {
  if (!isValidZodLiteralUnion(literals)) {
    throw new Error(
      "Literals passed do not meet the criteria for constructing a union schema, the minimum length is 2",
    );
  }
  return z.union(literals);
}
// Example:
const literalValues = ["a", "b", "c"] as const;
// ERROR: Argument of type 'ZodLiteral<"a" | "b" | "c">[]' is not assignable
// to parameter of type 'readonly [ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]'
z.union(literalValues.map((literal) => z.literal(literal)));
// Valid!
constructZodLiteralUnionType(
  literalValues.map((literal) => z.literal(literal)),
);
