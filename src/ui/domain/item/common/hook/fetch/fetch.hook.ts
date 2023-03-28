import { useQuery } from "@tanstack/react-query";
import * as dao from "./coLocation/dao";
import type * as commonType from "../../common.type";

// TODO keys.ts
export const useFetch = (p: commonType.OuterProps) =>
  useQuery(["Common", { id: p.id }], () => dao.find(p));
