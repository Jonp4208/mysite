import React from 'react';
import { Head } from 'vite-react-ssg';

const SITE = 'https://calhounweb.com';

/**
 * Per-page document head. Rendered to static HTML at build time by
 * vite-react-ssg, so crawlers and link-preview bots get real meta tags
 * without executing any JavaScript.
 */
const SEO = ({
  title,
  description,
  path = '/',
  name = 'Calhoun Web Creations',
  type = 'website',
}) => {
  const fullTitle = title ? `${title} | ${name}` : `${name} — Design & Development Studio`;
  const url = `${SITE}${path}`;
  const image = `${SITE}/favicon.png`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
