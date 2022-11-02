import { ErrorBoundary } from "./ErrorBoundary";
import { ReactQuery } from "./ReactQuery";

type Props = {
  children: React.ReactNode;
  dehydratedState: unknown;
};

export const Wrapper: React.FC<Props> = (props) => (
  <ErrorBoundary>
    <ReactQuery {...props}>{props.children}</ReactQuery>
  </ErrorBoundary>
);
