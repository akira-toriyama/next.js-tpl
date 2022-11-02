import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
  dehydratedState: unknown;
};
export const ReactQuery: React.FC<Props> = (props) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
);
