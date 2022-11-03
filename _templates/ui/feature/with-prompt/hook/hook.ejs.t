---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/<%= name %>.hook.ts
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/<%= name %>.hook.ts
---

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import type * as type from "../<%= h.changeCase.upperCaseFirst(name) %>.type";
import * as service from "./service";

type Use<%= h.changeCase.upperCaseFirst(name) %> = () => type.Props;
export const use<%= h.changeCase.upperCaseFirst(name) %>: Use<%= h.changeCase.upperCaseFirst(name) %> = () => {
  const { id } = useRouter().query;
  const { fetcher, opt } = service.determineFetcher({ id });

  return service.toProps(useQuery(["Item", { id }], fetcher, opt));
};
