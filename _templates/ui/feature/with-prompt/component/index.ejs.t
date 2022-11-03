---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/index.ts
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/index.ts
---

export { <%= h.changeCase.upperCaseFirst(name) %> } from "./<%= h.changeCase.upperCaseFirst(name) %>";
