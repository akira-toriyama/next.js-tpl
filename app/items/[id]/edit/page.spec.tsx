import {
  test,
  graphql,
  expect,
} from "next/experimental/testmode/playwright/msw";
import * as ItemsQ from "~/ui/domain/items/repository/query/Items.gql.generated";
import * as ItemQ from "~/ui/domain/item/_/repository/query/Item.gql.generated";
import * as ItemM from "~/ui/domain/item/edit/repository/mutation/ItemEdit.gql.generated";
import * as service from "~/ui/domain/item/_/service";

test("fill in the form", async ({ page, msw }) => {
  msw.use(
    graphql.mutation(ItemM.ItemEditDocument, (_, res, ctx) =>
      res.once(
        ctx.data({
          updateItem: { id: "" },
          publishItem: { id: "" },
        }),
      ),
    ),
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
    graphql.query(ItemQ.ItemDocument, (_, res, ctx) => {
      return res.once(
        ctx.data({
          item: {
            id: "1",
            title: "t1",
            body: "b1",
          },
        }),
      );
    }),
  );

  await page.goto(`/items/1/edit`);
  await page
    .getByLabel(service.formParam.title.label)
    .fill(service.formParam.title.placeholder);
  await page
    .getByLabel(service.formParam.body.label)
    .fill(service.formParam.body.placeholder);
  await page.getByRole("button", { name: "submit" }).click();

  // TODO テスト不能
  // await expect(page).toHaveURL("/items");
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
