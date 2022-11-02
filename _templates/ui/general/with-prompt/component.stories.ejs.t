---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(component) %>/<%= h.changeCase.upperCaseFirst(component) %>.stories.tsx
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(component) %>/<%= h.changeCase.upperCaseFirst(component) %>.stories.tsx
---

import * as <%= component %> from "./<%= h.changeCase.upperCaseFirst(component) %>";

export const <%= h.changeCase.upperCaseFirst(component) %>: React.FC = () => (
  <>
    <<%= component %>.<%= h.changeCase.upperCaseFirst(component) %> {...{ name: "<%= h.changeCase.upperCaseFirst(component) %>" }} />
  </>
);
