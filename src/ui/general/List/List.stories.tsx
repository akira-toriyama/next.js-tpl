import * as list from "./List";

export const List: React.FC = () => (
  <list.Items>
    {[...Array(3)].map((_, i) => (
      <list.Item key={i}>{i}</list.Item>
    ))}
  </list.Items>
);
