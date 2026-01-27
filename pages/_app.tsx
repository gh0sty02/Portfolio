import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins, Roboto_Mono, Russo_One } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Footer from 'components/Layout/Footer';
import Navbar from 'components/Layout/Navbar';

// Font configurations
const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const russoOne = Russo_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-russo-one',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${poppins.variable} ${robotoMono.variable} ${russoOne.variable}`}
    >
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
