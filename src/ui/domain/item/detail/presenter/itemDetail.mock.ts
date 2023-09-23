import * as c from "./ItemDetail";

type MakeItemDetailProps = () => React.ComponentProps<typeof c.ItemDetail>;
export const makeItemDetailProps: MakeItemDetailProps = () => ({
  item: {
    id: "1",
    title: "title",
    body: "body",
  },
});
