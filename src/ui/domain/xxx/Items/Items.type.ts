import type * as tag from "~/ui/util/tag";

export type Props = tag.PropsStruct<
  "items",
  ReadonlyArray<{ id: string; title: string }>
>;
