import { useQuery } from "@tanstack/react-query";
import type * as commonType from "../../common.type";
import { queries } from "~/ui/util/graphql/queries";
import { Prettify } from "~/ui/util/type/Prettify";
import type * as GQL from "./coLocation/ItemDetail.gql.generated";

export const useFetch = (
  p: Prettify<
    commonType.OuterProps & {
      onSuccess?: (data: GQL.ItemDetailQuery) => void;
    }
  >
) =>
  useQuery({
    ...queries.item.item({ id: p.id }),
    onSuccess: p.onSuccess,
  });
