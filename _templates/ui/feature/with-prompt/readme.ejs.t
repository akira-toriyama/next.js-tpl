---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/readme.md
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/readme.md
---

# <%= h.changeCase.upperCaseFirst(name) %>


