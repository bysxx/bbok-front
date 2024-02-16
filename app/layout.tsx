import '@styles/global.css';
import '@styles/font.css';

import ReactQueryProvider from '@providers/react-query-provider';

export const metadata = {
  title: 'BBOK',
  description: 'BBOK',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <div className="flex w-full justify-center">
            <div className="min-h-screen w-full max-w-md shadow-lg">{children}</div>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
