import { match } from "ts-pattern";
import type { UseQueryResult, QueryOptions } from "@tanstack/react-query";
import * as tag from "~/ui/util/tag";
import type * as Gql from "../../coLocation/Item.gql.generated";
import * as dao from "../../coLocation/dao";
import type * as type from "../../Item.type";

type ToProps = (p: UseQueryResult<Gql.ItemQuery>) => type.Props;
export const toProps: ToProps = (p) =>
  match(p)
    .with(tag.pattern.query.failure, () => ({
      item: tag.to.failureProps(null),
    }))
    .with(tag.pattern.query.loading, () => ({
      item: tag.to.loadingProps(null),
    }))
    .with(tag.pattern.query.success, (pp) =>
      pp.data.item
        ? { item: tag.to.successProps(pp.data.item) }
        : { item: tag.to.emptyProps(null) }
    )
    .exhaustive();

export const isValid = (p: { id: unknown }): p is { id: string } =>
  typeof p.id === "string";

type DetermineFetcher = (p: { id: unknown }) =>
  | ({
      fetcher: () => ReturnType<typeof dao.find>;
      opt: QueryOptions<Gql.ItemQuery>;
    } & typeof tag.pattern.util.success)
  | ({
      fetcher: () => ReturnType<typeof dao.failure>;
      opt: QueryOptions<Gql.ItemQuery>;
    } & typeof tag.pattern.util.failure);
export const determineFetcher: DetermineFetcher = (p) => ({
  ...(isValid(p)
    ? { ...tag.pattern.util.success, opt: {}, fetcher: () => dao.find(p) }
    : { ...tag.pattern.util.failure, opt: { retry: 0 }, fetcher: dao.failure }),
});
