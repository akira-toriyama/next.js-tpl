import { createQueryKeyStore } from "@lukemorales/query-key-factory";
import * as itemList from "~/ui/domain/item/Items/hook/coLocation/dao";
import * as itemDetail from "~/ui/domain/item/detail/common/hook/fetch/coLocation/dao";

export const queryKeys = createQueryKeyStore({
  item: {
    detail: (p: { id: string }) => ({
      queryKey: ["item-detail", p],
      queryFn: () => itemDetail.fetchDetail(p),
    }),
    list: {
      queryKey: ["item-list"],
      queryFn: itemList.fetchList,
    },
  },
});
