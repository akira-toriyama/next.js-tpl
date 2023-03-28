import { createQueryKeyStore } from "@lukemorales/query-key-factory";
import { fetchItems } from "~/ui/domain/Items/hook/coLocation/dao";
import { find } from "~/ui/domain/item/common/hook/fetch/coLocation/dao";

export const queryKeys = createQueryKeyStore({
  item: {
    detail: (p: { id: string }) => ({
      queryKey: ["item-detail", p],
      queryFn: () => find(p),
    }),
    list: {
      queryKey: ["item-list"],
      queryFn: fetchItems,
    },
  },
});
