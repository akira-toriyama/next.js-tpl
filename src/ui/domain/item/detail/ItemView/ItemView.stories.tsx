import * as tag from "~/ui/util/tag";
import * as itemView from "./ItemView";
import type { Story } from "@ladle/react";

export const All: React.FC = () => (
  <>
    <itemView.Success
      {...{
        data: {
          id: "",
          title: "タイトル",
          body: "本文",
        },
        ...tag.pattern.ui.success,
      }}
    />
    <itemView.Empty />
    <itemView.Loading />
    <itemView.Failure />
  </>
);

type SuccessProps = React.ComponentProps<typeof itemView.Success>;
export const Success: Story<SuccessProps> = (props) => (
  <itemView.Success {...props} />
);

Success.args = ((): SuccessProps => ({
  data: {
    id: "",
    title: "タイトル",
    body: "本文",
  },
  ...tag.pattern.ui.success,
}))();

export const Empty: React.FC = () => <itemView.Empty />;
export const Loading: React.FC = () => <itemView.Loading />;
export const Failure: React.FC = () => <itemView.Failure />;
