---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/<%= h.changeCase.upperCaseFirst(name) %>.stories.tsx
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/<%= h.changeCase.upperCaseFirst(name) %>.stories.tsx
---

import * as tag from "~/ui/util/tag";
import * as <%= name %> from "./<%= h.changeCase.upperCaseFirst(name) %>";
import type { Story } from "@ladle/react";

export const All: React.FC = () => (
  <>
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
    <<%= name %>.Empty />
    <<%= name %>.Loading />
    <<%= name %>.Failure />
  </>
);

type SuccessProps = React.ComponentProps<typeof <%= name %>.Success>;
export const Success: Story<SuccessProps> = (props) => (
  <<%= name %>.Success {...props} />
);

Success.args = ((): SuccessProps => ({
  data: {
    id: "",
    title: "タイトル",
    body: "本文",
  },
  ...tag.pattern.ui.success,
}))();

export const Empty: React.FC = () => <<%= name %>.Empty />;
export const Loading: React.FC = () => <<%= name %>.Loading />;
export const Failure: React.FC = () => <<%= name %>.Failure />;
