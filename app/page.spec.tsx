import {
  test,
  expect,
  HttpResponse,
} from "next/experimental/testmode/playwright/msw";

test("go to /items", async ({ page, next }) => {
  // FIXME
  // import * as Q from "~/ui/domain/items/repository/query/Items.gql.generated";
  // TypeError: _msw.MockedRequest is not a constructor
  // msw.use(
  //   graphql.query(Q.ItemsDocument, () =>
  //     HttpResponse.json({
  //       data: {
  //         items: [],
  //       },
  //     }),
  //   ),
  // );

  next.onFetch(() =>
    HttpResponse.json({
      data: {
        items: [],
      },
    }),
  );

  await page.goto("/");
  await page.getByText("items").first().click();
  await expect(page).toHaveURL("/items");
});
