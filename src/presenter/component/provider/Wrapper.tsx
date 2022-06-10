import { App } from "./App";
import { Theme } from "./Theme";
import { ErrorBoundary } from "./ErrorBoundary";

export const Wrapper: React.FC<{ children: React.ReactNode }> = (props) => (
  <ErrorBoundary>
    <App>
      <Theme>{props.children}</Theme>
    </App>
  </ErrorBoundary>
);
