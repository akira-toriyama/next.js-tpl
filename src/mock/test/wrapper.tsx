import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const wrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  // https://github.com/TanStack/query/discussions/1441#discussioncomment-217134
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0,
        cacheTime: 0,
      },
    },
    logger: {
      log: () => null,
      warn: () => null,
      error: () => null,
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};
