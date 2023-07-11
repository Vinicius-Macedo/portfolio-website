import Head from "next/head";
import "../scss/main.scss";

import type { AppProps } from "next/app";
import { Header } from "../partials/Header";
import Footer from "../partials/Footer";
import { CardTextProvider } from "../contexts/CardTextContext";
// import { CardTextProvider } from "../contexts/CardTextContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CardTextProvider>
        <Head>
          <title>Vinicius Macedo - Desenvolvedor Web</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CardTextProvider>
    </>
  );
}
