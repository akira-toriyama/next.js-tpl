import NextLink from "next/link";

export const Empty: React.FC = () => <>items: Empty</>;

export const Loading: React.FC = () => <>items: Loading</>;

export const Items: React.FC<{
  items: ReadonlyArray<{ title: string; id: string }>;
}> = (props) => (
  <ul>
    {props.items.map((v) => (
      <li data-testid="data" key={v.id}>
        <NextLink href={`/items/${v.id}/detail`}>{v.title}</NextLink>
      </li>
    ))}
  </ul>
);
