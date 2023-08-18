import { useQuery } from "@tanstack/react-query";
import type * as type from "../Items.type";
import { match, P } from "ts-pattern";
import { queries } from "~/ui/util/queries";
import type { UseQueryResult } from "@tanstack/react-query";
import type * as GQL from "./coLocation/Items.gql.generated";

type UseItems = () => type.Props;
export const useItems: UseItems = () => {
  const r = useQuery(queries.item.all);

  return match<UseQueryResult<GQL.ItemsQuery>, type.Props>(r)
    .with({ isError: true }, () => ({ __tag: "failure" }))
    .with({ isLoading: true }, () => ({ __tag: "loading" }))
    .with(
      { isSuccess: true, data: { items: P.when((v) => v.length === 0) } },
      () => ({ __tag: "empty" })
    )
    .with({ isSuccess: true, data: { items: P.not(P.nullish) } }, (rr) => ({
      __tag: "success",
      selectors: [...rr.data.items],
    }))
    .exhaustive();
};
