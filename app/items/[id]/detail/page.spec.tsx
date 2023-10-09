import {
  test,
  expect,
  graphql,
} from "next/experimental/testmode/playwright/msw";
import * as ItemQ from "~/ui/domain/item/_/repository/query/Item.gql.generated";

test("go to /items/id/edit", async ({ page, msw }) => {
  msw.use(
    graphql.query(ItemQ.ItemDocument, (_, res, ctx) =>
      res(
        ctx.data({
          item: {
            id: "1",
            title: "t1",
            body: "b1",
          },
        }),
      ),
    ),
    graphql.query(ItemQ.ItemDocument, (_, res, ctx) =>
      res(
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
  await page.getByRole("link", { name: "編集へ" }).click();
  await expect(page).toHaveURL("/items/1/edit");
});

test("go to /items/id/edit (empty", async ({ page, msw }) => {
  msw.use(
    graphql.query(ItemQ.ItemDocument, (_, res, ctx) =>
      res.once(
        ctx.data({
          item: null,
        }),
      ),
    ),
  );

  await page.goto("/items/1/detail");
  await expect(page.getByText("Empty")).toBeVisible();
});
