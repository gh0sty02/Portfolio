import 'styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Footer from 'components/Layout/Footer';
import Navbar from 'components/Layout/Navbar';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => (
      <>
        <Navbar />
        {page}
        <Footer />
      </>
    ));

  return <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}

export default MyApp;
