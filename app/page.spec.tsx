import {
  test,
  expect,
  graphql,
  HttpResponse,
} from "next/experimental/testmode/playwright/msw";
import * as Q from "~/ui/domain/items/repository/query/Items.gql.generated";

test("go to /items", async ({ page, msw }) => {
  msw.use(
    graphql.query(Q.ItemsDocument, () =>
      HttpResponse.json({ data: { items: [] } }),
    ),
  );

  await page.goto("/");
  await page.getByText("items").first().click();
  await expect(page).toHaveURL("/items");
});
