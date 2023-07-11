export type Lookup<
  T extends { __tag: string },
  Type extends T["__tag"],
> = T extends { __tag: Type } ? T : never;
