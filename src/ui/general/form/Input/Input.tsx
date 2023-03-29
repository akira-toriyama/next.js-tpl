type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  _form: "";
};

export const Input: React.FC<Props> = (props) => <input {...props} />;
