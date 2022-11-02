---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(component) %>/index.ts
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(component) %>/index.ts
---

export { <%= h.changeCase.upperCaseFirst(component) %> } from "./<%= h.changeCase.upperCaseFirst(component) %>";

