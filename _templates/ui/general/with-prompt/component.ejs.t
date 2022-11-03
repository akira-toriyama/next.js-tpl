---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.tsx
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(name) %>/<%= h.changeCase.upperCaseFirst(name) %>.tsx
---

type Props = {
    name: string;
};
export const <%= h.changeCase.upperCaseFirst(name) %>: React.FC<Props> = (props) => (
  <> 
    <p>{props.name}</p>
    <p><%= h.changeCase.upperCaseFirst(name) %></p>
  </>
);
