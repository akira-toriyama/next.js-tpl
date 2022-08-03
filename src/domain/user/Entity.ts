export type User = {
  id: number;
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
    }
  | {
      __type: "loading";
    };
