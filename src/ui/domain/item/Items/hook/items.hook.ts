import { useQuery } from "@tanstack/react-query";
import type * as type from "../Items.type";
import * as tag from "~/ui/util/tag";
import { match, P } from "ts-pattern";
import { queryKeys } from "~/ui/util/queryKeys";

type UseItems = () => type.Props;
export const useItems: UseItems = () => {
  const r = useQuery(queryKeys.item.items);

  return match(r)
    .with(tag.pattern.query.failure, () => ({
      items: tag.to.failureProps(null),
    }))
    .with(tag.pattern.query.loading, () => ({
      items: tag.to.loadingProps(null),
    }))
    .with(
      {
        ...tag.pattern.query.success,
        data: { items: P.when((v) => v.length === 0) },
      },
      () => ({
        items: tag.to.emptyProps(null),
      })
    )
    .with(
      { ...tag.pattern.query.success, data: { items: P.not(P.nullish) } },
      (rr) => ({
        items: tag.to.successProps(rr.data.items),
      })
    )
    .exhaustive();
};
