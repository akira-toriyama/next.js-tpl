import * as tag from "~/ui/util/tag";
import * as items from "./Items";

export const Success: React.FC = () => (
  <items.Success
    {...{
      data: [...Array(3)].map((_, i) => ({
        title: `タイトル${i}`,
        id: `${i}`,
      })),
      ...tag.pattern.ui.success,
    }}
  />
);

export const Empty: React.FC = () => <items.Empty />;

export const Loading: React.FC = () => <items.Loading />;

export const Failure: React.FC = () => <items.Failure />;
