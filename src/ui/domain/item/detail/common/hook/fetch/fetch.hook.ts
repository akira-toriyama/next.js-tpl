import { useQuery } from "@tanstack/react-query";
import type * as commonType from "../../common.type";
import { queries } from "~/ui/util/queries";
import { Prettify } from "~/ui/util/type/Prettify";
import type * as GQL from "./coLocation/ItemDetail.gql.generated";
import { useQueryClient } from "@tanstack/react-query";

type Param = Prettify<
  commonType.OuterProps & {
    onSuccess?: (data: GQL.ItemDetailQuery) => void;
  }
>;

export const useFetch = (p: Param) =>
  useQuery({
    ...queries.item.detail({ id: p.id }),
    onSuccess: p.onSuccess,
  });

export const useQueryData = (p: Param) => {
  const queryClient = useQueryClient();

  const queriesData = queryClient
    .getQueriesData<GQL.ItemDetailQuery>(
      queries.item.detail({ id: p.id }).queryKey
    )
    .at(0)?.[1];

  return queriesData;
};
