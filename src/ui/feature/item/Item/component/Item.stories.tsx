import * as tag from "~/ui/util/tag";
import * as item from "./Item";

export const Success: React.FC = () => (
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
);

export const Empty: React.FC = () => <item.Empty />;
export const Loading: React.FC = () => <item.Loading />;
export const Failure: React.FC = () => <item.Failure />;
