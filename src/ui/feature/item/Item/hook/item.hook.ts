import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import type * as type from "../Item.type";
import * as service from "./service";

type UseItem = () => type.Props;
export const useItem: UseItem = () => {
  const { id } = useRouter().query;
  const { fetcher, opt } = service.determineFetcher({ id });

  return service.toProps(useQuery(["Item", { id }], fetcher, opt));
};
