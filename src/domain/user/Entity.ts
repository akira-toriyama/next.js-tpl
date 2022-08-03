import * as Struct from "~/domain/core/Struct";

export type User = {
  id: number;
  name: string;
};

export type UIData = Struct.UIDataStruct<
  { message: string },
  {
    id: string;
    nickname: string;
  }
>;
