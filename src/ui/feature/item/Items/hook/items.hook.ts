import { useQuery } from "@tanstack/react-query";
import type * as type from "../Items.type";
import * as dao from "../coLocation/dao";
import * as service from "./service";

type UseItems = () => type.Props;
export const useItems: UseItems = () => {
  return service.toProps(useQuery(["Items"], dao.fetchItems));
};
