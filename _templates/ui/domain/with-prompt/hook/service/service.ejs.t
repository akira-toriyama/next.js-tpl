---
to: src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/service/service.ts
sh: yarn prettier --write src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/service/service.ts
---

import { match } from "ts-pattern";
import type { UseQueryResult, QueryOptions } from "@tanstack/react-query";
import * as tag from "~/ui/util/tag";
import type * as Gql from "../../coLocation/<%= h.changeCase.upperCaseFirst(name) %>.gql.generated";
import * as dao from "../../coLocation/dao";
import type * as type from "../../<%= h.changeCase.upperCaseFirst(name) %>.type";

type ToProps = (p: UseQueryResult<Gql.<%= h.changeCase.upperCaseFirst(name) %>Query>) => type.Props;
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
      opt: QueryOptions<Gql.<%= h.changeCase.upperCaseFirst(name) %>Query>;
    } & typeof tag.pattern.util.success)
  | ({
      fetcher: () => ReturnType<typeof dao.failure>;
      opt: QueryOptions<Gql.<%= h.changeCase.upperCaseFirst(name) %>Query>;
    } & typeof tag.pattern.util.failure);
export const determineFetcher: DetermineFetcher = (p) => ({
  ...(isValid(p)
    ? { ...tag.pattern.util.success, opt: {}, fetcher: () => dao.find(p) }
    : { ...tag.pattern.util.failure, opt: { retry: 0 }, fetcher: dao.failure }),
});
