import { match } from "ts-pattern";
import type { UseQueryResult } from "@tanstack/react-query";
import * as tag from "~/ui/util/tag";
import type * as Gql from "../../coLocation/Items.gql.generated";
import type * as type from "../../Items.type";

type ToProps = (p: UseQueryResult<Gql.ItemsQuery>) => type.Props;
export const toProps: ToProps = (p) =>
  match(p)
    .with(tag.pattern.query.failure, () => ({
      items: tag.to.failureProps(null),
    }))
    .with(tag.pattern.query.loading, () => ({
      items: tag.to.loadingProps(null),
    }))
    .with(tag.pattern.query.success, (r) =>
      r.data.items
        ? { items: tag.to.successProps(r.data.items) }
        : { items: tag.to.emptyProps(null) }
    )
    .exhaustive();
