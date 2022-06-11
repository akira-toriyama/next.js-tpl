import * as Entity from "~/domain/user/Entity";

export type Props =
  | Entity.UIData
  | {
      __type: "loading";
    };
