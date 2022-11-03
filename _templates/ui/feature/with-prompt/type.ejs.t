---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.type.ts
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.type.ts
---

import type * as tag from "~/ui/util/tag";

export type Props = tag.PropsStruct<
  "item",
  {
    id: string;
    title: string;
    body: string | null;
  }
>;

