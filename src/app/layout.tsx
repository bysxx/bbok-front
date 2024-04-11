import './globals.css';

import { PortalProvider } from '@components/global-portal';
import { META } from '@constants/meta';
import ChakraUIProvider from '@providers/chakra-provider';
import ReactQueryProvider from '@providers/react-query-provider';
import type { Metadata } from 'next';
import Script from 'next/script';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  metadataBase: new URL(META.DOMAIN_URL),
  title: {
    default: META.TITLE,
    template: `%s | ${META.SITE_NAME}`,
  },
  description: META.DESCRIPTION,
  keywords: [...META.KEYWORD],
  openGraph: {
    title: META.TITLE,
    description: META.DESCRIPTION,
    siteName: META.SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    url: META.DOMAIN_URL,
  },
  icons: {
    icon: '/images/icon/bbok.png',
  },
  twitter: {
    title: META.TITLE,
    description: META.DESCRIPTION,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <Script
        id="beusable"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, a){
              w.__beusablerumclient__ = {
                  load : function(src){
                      var b = d.createElement("script");
                      b.src = src; b.async=true; b.type = "text/javascript";
                      d.getElementsByTagName("head")[0].appendChild(b);
                  }
              };w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
            })(window, document, "//rum.beusable.net/load/b240315e124843u497");
				`,
        }}
      />
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
