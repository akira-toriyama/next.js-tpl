import type * as tag from "~/ui/util/tag";

export type OuterProps = {
  id: string;
};

export type Props = tag.PropsStruct<
  "item",
  {
    title: string;
    body: string | null;
  } & OuterProps
>;
