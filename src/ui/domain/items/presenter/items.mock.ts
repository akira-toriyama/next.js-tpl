import type * as c from "./Items";

type MakeItemsProps = () => React.ComponentProps<typeof c.Items>;
export const makeItemsProps: MakeItemsProps = () => ({
  items: [
    {
      id: "1",
      title: "title-1",
    },
    {
      id: "2",
      title: "title-2",
    },
    {
      id: "3",
      title: "title-3",
    },
  ],
});
