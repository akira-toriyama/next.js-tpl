---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.stories.tsx
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.stories.tsx
---

import * as <%= name %> from "./<%= h.changeCase.upperCaseFirst(name) %>";

export const <%= h.changeCase.upperCaseFirst(name) %>: React.FC = () => (
  <>
    <<%= name %>.<%= h.changeCase.upperCaseFirst(name) %> {...{ name: "<%= h.changeCase.upperCaseFirst(name) %>" }} />
  </>
);
