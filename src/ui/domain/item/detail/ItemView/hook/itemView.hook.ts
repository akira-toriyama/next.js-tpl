import type * as type from "../ItemView.type";
import { match, P } from "ts-pattern";
import * as tag from "~/ui/util/tag";
import type * as commonType from "../../common/common.type";
import { useFetch } from "../../common/hook/fetch";

type UseItemView = (p: commonType.OuterProps) => type.Props;
export const useItemView: UseItemView = (p) => {
  const r = useFetch(p);

  return match(r)
    .with(tag.pattern.query.failure, () => ({
      item: tag.to.failureProps(null),
    }))
    .with(tag.pattern.query.loading, () => ({
      item: tag.to.loadingProps(null),
    }))
    .with({ ...tag.pattern.query.success, data: { item: null } }, () => ({
      item: tag.to.emptyProps(null),
    }))
    .with(
      { ...tag.pattern.query.success, data: { item: P.not(P.nullish) } },
      (rr) => ({
        item: tag.to.successProps(rr.data.item),
      })
    )
    .exhaustive();
};