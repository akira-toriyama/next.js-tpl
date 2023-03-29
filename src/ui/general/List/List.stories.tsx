import * as list from "./List";

export const List: React.FC = () => (
  <list.Items>
    <list.Item>item</list.Item>
    <list.Item>item</list.Item>
    <list.Item>item</list.Item>
  </list.Items>
);

export const Snapshot: React.FC = () => <List />;
