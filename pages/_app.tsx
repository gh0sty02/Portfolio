import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Footer from 'components/Layout/Footer';
import Navbar from 'components/Layout/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider>
        <AnimatePresence mode="wait">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
