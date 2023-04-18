import type * as type from "../ItemView.type";
import { match, P } from "ts-pattern";
import type * as commonType from "../../common/common.type";
import { useFetch } from "../../common/hook/fetch";
import type { UseQueryResult } from "@tanstack/react-query";
import type * as GQL from "../../common/hook/fetch/coLocation/ItemDetail.gql.generated";

type UseItemView = (p: commonType.OuterProps) => type.Props;
export const useItemView: UseItemView = (p) => {
  const r = useFetch(p);

  return (
    match<UseQueryResult<GQL.ItemDetailQuery>, type.Props>(r)
      /* jscpd:ignore-start */
      .with({ isError: true }, () => ({ __tag: "failure" }))
      .with({ isLoading: true }, () => ({ __tag: "loading" }))
      .with({ isSuccess: true, data: { item: null } }, () => ({
        __tag: "empty",
      }))
      /* jscpd:ignore-end */
      .with({ isSuccess: true, data: { item: P.not(P.nullish) } }, (rr) => ({
        __tag: "success",
        selectors: rr.data.item,
      }))
      .exhaustive()
  );
};
