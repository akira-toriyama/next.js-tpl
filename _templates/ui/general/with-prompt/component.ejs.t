---
to: src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(component) %>/<%= h.changeCase.upperCaseFirst(component) %>.tsx
sh: yarn prettier --write src/ui/general/<%= directory %>/<%= h.changeCase.upperCaseFirst(component) %>/<%= h.changeCase.upperCaseFirst(component) %>.tsx
---

type Props = {
    name: string;
};
export const <%= h.changeCase.upperCaseFirst(component) %>: React.FC<Props> = (props) => (
  <> 
    <p>{props.name}</p>
    <p><%= h.changeCase.upperCaseFirst(component) %></p>
  </>
);
