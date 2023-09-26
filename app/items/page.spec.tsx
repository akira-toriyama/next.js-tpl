import {
  test,
  expect,
  graphql,
} from "next/experimental/testmode/playwright/msw";
import * as ItemsQ from "~/ui/domain/items/repository/query/Items.gql.generated";
import * as ItemQ from "~/ui/domain/item/_/repository/query/Item.gql.generated";

test("go to /items/id/detail", async ({ page, msw }) => {
  msw.use(
    graphql.query(ItemsQ.ItemsDocument, (_, res, ctx) =>
      res.once(
        ctx.data({
          items: [
            {
              id: "1",
              title: "t1",
            },
            {
              id: "2",
              title: "t2",
            },
            {
              id: "3",
              title: "t3",
            },
          ],
        }),
      ),
    ),
    graphql.query(ItemQ.ItemDocument, (_, res, ctx) =>
      res.once(
        ctx.data({
          item: {
            id: "1",
            title: "t1",
            body: "t1",
          },
        }),
      ),
    ),
  );

  await page.goto("/items");
  await page.getByText("t1").first().click();
  await expect(page).toHaveURL("/items/1/detail");
});
