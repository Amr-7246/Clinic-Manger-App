'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { queryClient } from './react-query';

export default function QueryProviders({ children }: { children: ReactNode }) {
return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);
}
