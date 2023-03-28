import type * as tag from "~/ui/util/tag";
import type * as commonType from "../common/common.type";

export type Props = tag.PropsStruct<
  "item",
  {
    title: string;
    body: string | null;
  } & commonType.OuterProps
>;
