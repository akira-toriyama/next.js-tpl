import * as Struct from "~/domain/core/Struct";
import * as Entity from "./Entity";

export type FetchUser = () => Promise<
  Struct.RepositoryStruct<{ message: string }, Entity.User>
>;
