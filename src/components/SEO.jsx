import React from 'react';
import { Head } from 'vite-react-ssg';

const SITE = 'https://calhounwebcreations.com';
const NAME = 'Calhoun Web Creations';
const OG_IMAGE = `${SITE}/og-image.jpg`;
const DEFAULT_TITLE = 'Web Design in Calhoun, GA | Calhoun Web Creations';

const place = (name, region = 'GA') => ({
  '@type': 'Place',
  name,
  address: { '@type': 'PostalAddress', addressRegion: region, addressCountry: 'US' },
});

/**
 * LocalBusiness structured data. Emitted on every page so Google can tie
 * the whole site to one Calhoun, GA business entity.
 */
const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}/#business`,
      name: NAME,
      url: SITE,
      image: OG_IMAGE,
      logo: `${SITE}/icon-512.png`,
      description:
        'Custom web design and development for small businesses in Calhoun, GA and North Georgia.',
      telephone: '+1-404-425-4758',
      email: 'jonp4208@gmail.com',
      priceRange: '$$',
      founder: { '@type': 'Person', name: 'Jonathon Pope' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Calhoun',
        addressRegion: 'GA',
        postalCode: '30701',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 34.5026, longitude: -84.9511 },
      areaServed: [
        place('Calhoun'),
        place('Dalton'),
        place('Rome'),
        place('Cartersville'),
        place('Adairsville'),
        place('Chatsworth'),
        place('Gordon County'),
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: NAME,
      publisher: { '@id': `${SITE}/#business` },
    },
  ],
};

const JSON_LD_STRING = JSON.stringify(JSON_LD);

/**
 * Per-page document head. Rendered to static HTML at build time by
 * vite-react-ssg, so crawlers and link-preview bots get real meta tags
 * without executing any JavaScript.
 *
 * `noindex` pages (e.g. the 404) get a robots directive and no canonical.
 */
const SEO = ({
  title,
  description,
  path = '/',
  name = NAME,
  type = 'website',
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | ${name}` : DEFAULT_TITLE;
  const url = `${SITE}${path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}

      {/* Local relevance */}
      <meta name="geo.region" content="US-GA" />
      <meta name="geo.placename" content="Calhoun, Georgia" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Calhoun Web Creations — web design & development in Calhoun, GA" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Structured data — react-helmet-async turns a string child into the script's innerHTML */}
      <script type="application/ld+json">{JSON_LD_STRING}</script>
    </Head>
  );
};

export default SEO;
