import { useEffect } from 'react';
import { Inter } from '@next/font/google';
import { initGA, logPageView } from '../utils/googleAnalytics';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    // Log the initial pageview
    logPageView();
  }, []);

  return (
    <div className={`${inter.className} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
