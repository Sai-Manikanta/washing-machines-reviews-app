import ReactGA from 'react-ga';
import { Inter } from '@next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function App({ Component, pageProps }) {
  ReactGA.initialize('G-PVYNK6W112');

  return (
    <div className={`${inter.className} font-sans`}>
        <Component {...pageProps} />
    </div>
  );
}
