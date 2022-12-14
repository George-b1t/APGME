import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Background } from '../components/Background';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Background />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}
