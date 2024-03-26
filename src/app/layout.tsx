import '@styles/global.css';
import '@styles/font.css';

import { PortalProvider } from '@components/global-portal';
import ChakraUIProvider from '@providers/chakra-provider';
import ReactQueryProvider from '@providers/react-query-provider';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'BBOK',
  description: 'BBOK',
  icons: {
    icon: '/images/icon/bbok.png',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <PortalProvider>
            <ChakraUIProvider>
              <Toaster position="top-center" reverseOrder={false} />
              <div className="flex w-full justify-center">
                <div className="min-h-screen w-full max-w-md shadow-lg">{children}</div>
              </div>
            </ChakraUIProvider>
          </PortalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
