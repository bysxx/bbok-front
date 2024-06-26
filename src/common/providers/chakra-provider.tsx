'use client';

import { ChakraProvider } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

export default function ChakraUIProvider({ children }: PropsWithChildren) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
