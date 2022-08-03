type APIResponse = {
  id: number;
  name: string;
};

const mock = () => {
  if (Math.random() < 0.5) {
    return Promise.reject();
  }

  if (Math.random() < 0.5) {
    return Promise.reject();
  }

  return Promise.resolve<APIResponse>({ id: 1, name: "dummy" });
};

const sleep = () => new Promise((resolve) => setTimeout(resolve, 300));

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
export const fetchUser: FetchUser = async () => {
  await sleep();
  return mock()
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
};
