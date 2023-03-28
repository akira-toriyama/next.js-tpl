import { useQuery } from "@tanstack/react-query";
import type * as commonType from "../../common.type";
import { queryKeys } from "~/ui/util/queryKeys";

export const useFetch = (p: commonType.OuterProps) =>
  useQuery(queryKeys.item.detail({ id: p.id }));
