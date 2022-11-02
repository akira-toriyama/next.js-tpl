import type * as tag from "~/ui/util/tag";

export type Props = tag.PropsStruct<
  "item",
  {
    id: string;
    title: string;
    body: string | null;
  }
>;
