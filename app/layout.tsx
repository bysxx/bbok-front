import '@styles/global.css';
import '@styles/font.css';

import ChakraUIProvider from '@providers/chakra-provider';
import ReactQueryProvider from '@providers/react-query-provider';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'BBOK',
  description: 'BBOK',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <ChakraUIProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex w-full justify-center">
              <div className="min-h-screen w-full max-w-md shadow-lg">{children}</div>
            </div>
          </ChakraUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
