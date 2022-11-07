---
to: src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/index.ts
sh: yarn prettier --write src/ui/domain/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/index.ts
---

export { <%= h.changeCase.upperCaseFirst(name) %> } from "./component";

