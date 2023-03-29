export type Props =
  | {
      __tag: "success";
      selectors: Array<{ title: string; id: string }>;
    }
  | {
      __tag: "failure";
    }
  | {
      __tag: "loading";
    }
  | {
      __tag: "empty";
    };
