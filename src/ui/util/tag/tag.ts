export const pattern = {
  query: {
    failure: { isError: true },
    loading: { isLoading: true },
    success: { isSuccess: true },
  },
  ui: {
    failure: { __tag: "failure" },
    loading: { __tag: "loading" },
    success: { __tag: "success" },
    empty: { __tag: "empty" },
  },
  util: {
    failure: { __tag: "failure" },
    success: { __tag: "success" },
  },
} as const;

export const to = {
  loadingProps: <T>(data: T) => ({
    ...pattern.ui.loading,
    data,
  }),
  failureProps: <T>(data: T) => ({
    ...pattern.ui.failure,
    data,
  }),
  successProps: <T>(data: T) => ({
    ...pattern.ui.success,
    data,
  }),
  emptyProps: <T>(data: T) => ({
    ...pattern.ui.empty,
    data,
  }),
} as const;

export type PropsStruct<
  Key extends string,
  Success = null,
  Empty = null,
  Failure = null,
  Loading = null
> =
  | {
      [k in Key]: {
        data: Success;
      } & { __tag: "success" };
    }
  | {
      [k in Key]: {
        data: Empty;
      } & { __tag: "empty" };
    }
  | {
      [k in Key]: {
        data: Failure;
      } & { __tag: "failure" };
    }
  | {
      [k in Key]: {
        data: Loading;
      } & { __tag: "loading" };
    };

type __Tag = (typeof pattern)["ui"][keyof (typeof pattern)["ui"]]["__tag"];
export type Lookup<
  T extends { __tag: __Tag },
  Type extends T["__tag"]
> = T extends { __tag: Type } ? T : never;
