import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundary: React.FC<Props> = (props) => (
  <ReactErrorBoundary fallback={<>Something went wrong.</>}>
    {props.children}
  </ReactErrorBoundary>
);
