import { test, graphql } from "next/experimental/testmode/playwright/msw";
import * as ItemsQ from "~/ui/domain/items/repository/query/Items.gql.generated";
import * as ItemQ from "~/ui/domain/item/_/repository/query/Item.gql.generated";
import * as ItemM from "~/ui/domain/item/edit/repository/mutation/ItemEdit.gql.generated";

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
  await page.locator('input[name="title"]').fill("abc");
  await page.locator('input[name="body"]').fill("efg");
  await page.getByRole("button", { name: "submit" }).click();

  // TODO
  // await expect(page).toHaveURL("/items");
});
