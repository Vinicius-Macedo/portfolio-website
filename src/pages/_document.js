import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        {/* SOCIAL MEDIA */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="Vinicius Macedo - Desenvolvedor Web" />
        <meta
          name="description"
          content="Criação de sites e sistemas para pequenos emprededores, receba uma experiência profissional pelo preço de iniciante."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vinicius-macedo.vercel.app/" />
        <meta
          property="og:title"
          content="Vinicius Macedo - Desenvolvedor Web"
        />
        <meta
          property="og:description"
          content="Criação de sites e sistemas para pequenos emprededores, receba uma experiência profissional pelo preço de iniciante."
        />
        <meta
          property="og:image"
          content="/social-media-card.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vinicius-macedo.vercel.app/" />
        <meta
          property="twitter:title"
          content="Vinicius Macedo - Desenvolvedor Web"
        />
        <meta
          property="twitter:description"
          content="Criação de sites e sistemas para pequenos emprededores, receba uma experiência profissional pelo preço de iniciante."
        />
        <meta
          property="twitter:image"
          content="/social-media-card.png"
        />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
