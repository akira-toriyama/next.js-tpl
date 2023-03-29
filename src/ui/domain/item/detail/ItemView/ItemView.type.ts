import type * as commonType from "../common/common.type";

export type Props =
  | {
      __tag: "success";
      selectors: { title: string; body: string | null } & commonType.OuterProps;
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
