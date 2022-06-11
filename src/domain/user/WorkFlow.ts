import * as Repository from "./Repository";
import * as Entity from "~/domain/user/Entity";

/**
 * 取得して画面用に加工
 */
export type FetchUser = (p: {
  repository: {
    fetchUser: Repository.FetchUser;
  };
}) => () => Promise<Entity.UIData>;
