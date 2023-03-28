import * as tag from "~/ui/util/tag";
import * as list from "./List";
import type { StoryDefault, Story } from "@ladle/react";

export default {
  title: "domain/List",
} satisfies StoryDefault;

export const All: React.FC = () => (
  <>
    <list.Success
      {...{
        data: [{ title: "title", id: "1" }],
        ...tag.pattern.ui.success,
      }}
    />
    <list.Empty />
    <list.Loading />
    <list.Failure />
  </>
);

type SuccessProps = React.ComponentProps<typeof list.Success>;
export const Success: Story<SuccessProps> = (props) => (
  <list.Success {...props} />
);

Success.args = ((): SuccessProps => ({
  data: [...Array(3)].map((_, i) => ({
    title: `タイトル${i}`,
    id: `${i}`,
  })),
  ...tag.pattern.ui.success,
}))();

export const Empty: React.FC = () => <list.Empty />;
export const Loading: React.FC = () => <list.Loading />;
export const Failure: React.FC = () => <list.Failure />;
