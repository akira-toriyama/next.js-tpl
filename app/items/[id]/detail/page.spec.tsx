import {
  test,
  expect,
  graphql,
} from "next/experimental/testmode/playwright/msw";
import * as ItemQ from "~/ui/domain/item/_/repository/query/Item.gql.generated";

test("go to /items/id/edit", async ({ page, msw }) => {
  msw.use(
    graphql.query(ItemQ.ItemDocument, (_, res, ctx) =>
      res.once(
        ctx.data({
          item: {
            id: "1",
            title: "t1",
            body: "b1",
          },
        }),
      ),
    ),
  );

  await page.goto("/items/1/detail");
  await page.getByText("編集へ").first().click();
  await expect(page).toHaveURL("/items/1/edit");
});
