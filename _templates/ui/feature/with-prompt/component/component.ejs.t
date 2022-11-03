---
to: src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/<%= h.changeCase.upperCaseFirst(name) %>.tsx
sh: yarn prettier --write src/ui/feature/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/component/<%= h.changeCase.upperCaseFirst(name) %>.tsx
---

import { match } from "ts-pattern";
import * as tag from "~/ui/util/tag";
import type * as type from "../<%= h.changeCase.upperCaseFirst(name) %>.type";
import { use<%= h.changeCase.upperCaseFirst(name) %> } from "../hook";

export const Success: React.FC<tag.Lookup<type.Props["item"], "success">> = (
  props
) => <><%= h.changeCase.upperCaseFirst(name) %>: Success {JSON.stringify(props)}</>

export const Loading: React.FC = () => <><%= h.changeCase.upperCaseFirst(name) %>: Loading</>;
export const Failure: React.FC = () => <><%= h.changeCase.upperCaseFirst(name) %>: Failure</>;
export const Empty: React.FC = () => <><%= h.changeCase.upperCaseFirst(name) %>: Empty</>;

export const <%= h.changeCase.upperCaseFirst(name) %>Container: React.FC<type.Props> = (props) =>
  match(props.item)
    .with(tag.pattern.ui.failure, Failure)
    .with(tag.pattern.ui.empty, Empty)
    .with(tag.pattern.ui.loading, Loading)
    .with(tag.pattern.ui.success, Success)
    .exhaustive();

export const <%= h.changeCase.upperCaseFirst(name) %>: React.FC = () => <<%= h.changeCase.upperCaseFirst(name) %>Container {...use<%= h.changeCase.upperCaseFirst(name) %>()} />;
