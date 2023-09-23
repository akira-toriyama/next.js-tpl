import NextLink from "next/link";

export const Empty: React.FC = () => <>detail: Empty</>;

export const Loading: React.FC = () => <>detail: Loading</>;

export const ItemDetail: React.FC<{
  item: {
    id: string;
    title: string;
    body: string | null;
  };
}> = (props) => (
  <>
    <ul>
      <li>
        <NextLink href={`/items`}>items</NextLink>
      </li>
      <li>
        <NextLink href={`/items/${props.item.id}/edit`}>edit</NextLink>
      </li>
    </ul>
    <p>{props.item.id}</p>
    <p>{props.item.title}</p>
    <p>{props.item.body}</p>
  </>
);
