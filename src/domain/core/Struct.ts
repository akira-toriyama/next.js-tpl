export type WorkFlowStruct<P, T> = (p: P) => () => T;

export type RepositoryStruct<L, R> =
  | {
      __type: "success";
      data: R;
    }
  | {
      __type: "error";
      error: L;
    };

export type UIDataStruct<L = unknown, R = unknown> =
  | {
      __type: "success";
      data: R;
    }
  | {
      __type: "error";
      error: L;
    }
  | {
      __type: "loading";
    };
