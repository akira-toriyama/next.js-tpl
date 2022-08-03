import * as Repository from "./Repository";
import * as Entity from "~/domain/user/Entity";
import * as Struct from "~/domain/core/Struct";

/**
 * 取得して画面用に加工
 */
export type FetchUser = Struct.WorkFlowStruct<
  {
    repository: {
      fetchUser: Repository.FetchUser;
    };
  },
  Promise<Entity.UIData>
>;
