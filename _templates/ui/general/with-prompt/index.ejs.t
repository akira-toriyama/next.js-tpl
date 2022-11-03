---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/index.ts
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/index.ts
---

export { <%= h.changeCase.upperCaseFirst(name) %> } from "./<%= h.changeCase.upperCaseFirst(name) %>";

