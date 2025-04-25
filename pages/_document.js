import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#3b82f6" />
      </Head>
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
