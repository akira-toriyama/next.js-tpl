import * as Struct from "~/domain/core/Struct";

export type LookUp<
  T extends Struct.UIDataStruct,
  Type extends T["__type"]
> = T extends { __type: Type } ? T : never;
