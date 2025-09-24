"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute - data stays fresh for 1 minute
        gcTime: 5 * 60 * 1000, // 5 minutes - cache stays in memory for 5 minutes
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
