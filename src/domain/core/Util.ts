export type Lookup<
  T extends { __type: string },
  Type extends T["__type"]
> = T extends { __type: Type } ? T : never;
