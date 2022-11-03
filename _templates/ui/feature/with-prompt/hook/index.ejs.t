---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/index.ts
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/hook/index.ts
---

export { use<%= h.changeCase.upperCaseFirst(name) %> } from "./<%= name %>.hook";
