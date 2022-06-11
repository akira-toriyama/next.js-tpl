import * as Entity from "./Entity";

export type FetchUser = () => Promise<
  | {
      __type: "success";
      data: Entity.User;
    }
  | {
      __type: "error";
      error: unknown;
    }
>;
