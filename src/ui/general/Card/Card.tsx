type Props = {
  title: string;
  body?: string | null;
};
export const Card: React.FC<Props> = (props) => (
  <>
    <p>title: {props.title}</p>
    {props.body && <p>body: {props.body}</p>}
  </>
);
