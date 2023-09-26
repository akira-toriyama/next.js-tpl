import {
  test,
  expect,
  graphql,
  rest,
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
            body: "t1",
          },
        }),
      ),
    ),
  );

  await page.goto("/items/1/detail");
  await page.getByText("edit").first().click();
  await expect(page).toHaveURL("/items/1/edit");
});
