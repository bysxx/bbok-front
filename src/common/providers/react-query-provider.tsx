'use client';

import { useApiError } from '@hooks/useApiError';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';
import React from 'react';

function ReactQueryProvider({ children }: PropsWithChildren) {
  const { handleError } = useApiError();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
      mutations: {
        onError: handleError,
        networkMode: 'always',
      },
    },
    queryCache: new QueryCache({
      onError: handleError,
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
