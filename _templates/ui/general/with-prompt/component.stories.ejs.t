---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.stories.tsx
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.stories.tsx
---

import * as <%= name %> from "./<%= h.changeCase.upperCaseFirst(name) %>";
import type { Story } from "@ladle/react";

export const All: React.FC = () => <<%= name %>.<%= h.changeCase.upperCaseFirst(name) %> {...{ name: "<%= h.changeCase.upperCaseFirst(name) %>" }} />;

type BasicProps = React.ComponentProps<typeof <%= name %>.<%= h.changeCase.upperCaseFirst(name) %>>;
export const Basic: Story<BasicProps> = (props) => <<%= name %>.<%= h.changeCase.upperCaseFirst(name) %> {...props} />;

Basic.args = ((): BasicProps => ({
  name: "<%= h.changeCase.upperCaseFirst(name) %>",
}))();
