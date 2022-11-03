---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/<%= h.changeCase.upperCaseFirst(name) %>.stories.tsx
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/<%= h.changeCase.upperCaseFirst(name) %>.stories.tsx
---

import * as tag from "~/ui/util/tag";
import * as <%= name %> from "./<%= h.changeCase.upperCaseFirst(name) %>";

export const Success: React.FC = () => (
  <<%= name %>.Success
    {...{
      data: {
        id: "",
        title: "タイトル",
        body: "本文",
      },
      ...tag.pattern.ui.success,
    }}
  />
);

export const Empty: React.FC = () => <<%= name %>.Empty />;
export const Loading: React.FC = () => <<%= name %>.Loading />;
export const Failure: React.FC = () => <<%= name %>.Failure />;
