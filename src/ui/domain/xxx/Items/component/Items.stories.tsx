import * as tag from "~/ui/util/tag";
import * as items from "./Items";
import type { Story } from "@ladle/react";

export const All: React.FC = () => (
  <>
    <items.Success
      {...{
        data: [{ title: "title", id: "1" }],
        ...tag.pattern.ui.success,
      }}
    />
    <items.Empty />
    <items.Loading />
    <items.Failure />
  </>
);

type SuccessProps = React.ComponentProps<typeof items.Success>;
export const Success: Story<SuccessProps> = (props) => (
  <items.Success {...props} />
);

Success.args = ((): SuccessProps => ({
  data: [...Array(3)].map((_, i) => ({
    title: `タイトル${i}`,
    id: `${i}`,
  })),
  ...tag.pattern.ui.success,
}))();

export const Empty: React.FC = () => <items.Empty />;
export const Loading: React.FC = () => <items.Loading />;
export const Failure: React.FC = () => <items.Failure />;
