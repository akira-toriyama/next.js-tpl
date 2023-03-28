import { useQuery } from "@tanstack/react-query";
import type * as type from "../View.type";
import * as dao from "./coLocation/dao";
import { match, P } from "ts-pattern";
import * as tag from "~/ui/util/tag";

type UseItem = (p: type.OuterProps) => type.Props;
export const useItem: UseItem = (p) => {
  const r = useQuery(["Item", { id: p.id }], () => dao.find(p));

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
