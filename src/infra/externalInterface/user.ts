type APIResponse = {
  id: number;
  name: string;
};
const f = () =>
  Math.random() < 0.5
    ? Promise.reject()
    : Promise.resolve<APIResponse>({ id: 1, name: "dummy" });

type FetchUser = () => Promise<
  | {
      __type: "success";
      data: {
        id: number;
        name: string;
      };
    }
  | {
      __type: "error";
      error: unknown;
    }
>;
export const fetchUser: FetchUser = () =>
  f()
    .then(
      (v) =>
        ({
          __type: "success",
          data: v,
        } as const)
    )
    .catch((e) => ({
      __type: "error",
      error: e,
    }));
