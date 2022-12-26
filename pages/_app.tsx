import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@context-providers';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
