import * as list from "./List";
import type { StoryDefault, Story } from "@ladle/react";

export default {
  title: "general/List",
} satisfies StoryDefault;

export const All: React.FC = () => (
  <list.Items>
    {[...Array(3)].map((_, i) => (
      <list.Item key={i}>{i}</list.Item>
    ))}
  </list.Items>
);

type BasicProps = {
  items: Array<{
    id: string;
    value: string;
  }>;
};
export const Basic: Story<BasicProps> = (props) => (
  <list.Items>
    {props.items.map((v) => (
      <list.Item key={v.id}>{v.value}</list.Item>
    ))}
  </list.Items>
);

Basic.args = ((): BasicProps => ({
  items: [...Array(3)].map((_, i) => ({ value: `value-${i}`, id: `${i}` })),
}))();
