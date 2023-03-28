import * as tag from "~/ui/util/tag";
import * as item from "./VIew";
import type { Story } from "@ladle/react";

export const All: React.FC = () => (
  <>
    <item.Success
      {...{
        data: {
          id: "",
          title: "タイトル",
          body: "本文",
        },
        ...tag.pattern.ui.success,
      }}
    />
    <item.Empty />
    <item.Loading />
    <item.Failure />
  </>
);

type SuccessProps = React.ComponentProps<typeof item.Success>;
export const Success: Story<SuccessProps> = (props) => (
  <item.Success {...props} />
);

Success.args = ((): SuccessProps => ({
  data: {
    id: "",
    title: "タイトル",
    body: "本文",
  },
  ...tag.pattern.ui.success,
}))();

export const Empty: React.FC = () => <item.Empty />;
export const Loading: React.FC = () => <item.Loading />;
export const Failure: React.FC = () => <item.Failure />;
