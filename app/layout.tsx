import '@styles/global.css';

import Footer from '@components/ui/footer';

export const metadata = {
  title: 'BBOK',
  description: 'BBOK',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="flex w-full justify-center">
          <div className="min-h-screen w-full max-w-[375px] shadow-lg">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
