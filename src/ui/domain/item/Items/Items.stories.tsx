import * as tag from "~/ui/util/tag";
import * as itemList from "./Items";
import type { Story } from "@ladle/react";

export const All: React.FC = () => (
  <>
    <itemList.Success
      {...{
        data: [{ title: "title", id: "1" }],
        ...tag.pattern.ui.success,
      }}
    />
    <itemList.Empty />
    <itemList.Loading />
    <itemList.Failure />
  </>
);

type SuccessProps = React.ComponentProps<typeof itemList.Success>;
export const Success: Story<SuccessProps> = (props) => (
  <itemList.Success {...props} />
);

Success.args = ((): SuccessProps => ({
  data: [...Array(3)].map((_, i) => ({
    title: `タイトル${i}`,
    id: `${i}`,
  })),
  ...tag.pattern.ui.success,
}))();

export const Empty: React.FC = () => <itemList.Empty />;
export const Loading: React.FC = () => <itemList.Loading />;
export const Failure: React.FC = () => <itemList.Failure />;
