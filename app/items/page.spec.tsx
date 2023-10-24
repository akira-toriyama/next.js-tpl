import {
  test,
  expect,
  graphql,
  HttpResponse,
} from "next/experimental/testmode/playwright/msw";
import * as ItemsQ from "~/ui/domain/items/repository/query/Items.gql.generated";
import * as ItemQ from "~/ui/domain/item/_/repository/query/Item.gql.generated";

test("go to /items/id/detail", async ({ page, msw }) => {
  msw.use(
    graphql.query(ItemsQ.ItemsDocument, () =>
      HttpResponse.json({
        data: {
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
        },
      }),
    ),
    graphql.query(ItemQ.ItemDocument, () =>
      HttpResponse.json({
        data: {
          item: {
            id: "1",
            title: "t1",
            body: "b1",
          },
        },
      }),
    ),
  );

  await page.goto("/items");
  await page.getByText("t1").first().click();
  await expect(page).toHaveURL("/items/1/detail");
});

test("go to /items/id/detail (empty", async ({ page, msw }) => {
  msw.use(
    graphql.query(ItemsQ.ItemsDocument, () =>
      HttpResponse.json({
        data: { items: [] },
      }),
    ),
  );

  await page.goto("/items");
  await expect(page.getByText("Empty")).toBeVisible();
});
