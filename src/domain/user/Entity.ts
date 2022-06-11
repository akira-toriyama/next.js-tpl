export type User = {
  id: string;
  name: string;
};

/**
 * 画面用の型
 */
export type UIData =
  | {
      __type: "success";
      data: {
        id: string;
        nickname: string;
      };
    }
  | {
      __type: "error";
      error: {
        msg: string;
      };
    };
