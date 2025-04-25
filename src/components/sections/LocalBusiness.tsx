'use client';

const LocalBusiness = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Calhoun Web Creations',
    'image': 'https://www.calhounwebcreations.com/images/logo.png',
    '@id': 'https://www.calhounwebcreations.com',
    'url': 'https://www.calhounwebcreations.com',
    'telephone': '+17065551234',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Main Street',
      'addressLocality': 'Calhoun',
      'addressRegion': 'GA',
      'postalCode': '30701',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 34.5025,
      'longitude': -84.9513
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '09:00',
      'closes': '17:00'
    },
    'sameAs': [
      'https://www.facebook.com/calhounwebcreations',
      'https://www.twitter.com/calhounweb',
      'https://www.instagram.com/calhounwebcreations',
      'https://www.linkedin.com/company/calhoun-web-creations'
    ],
    'description': 'Award-winning web design services in Calhoun, Georgia. We create beautiful, conversion-focused websites that help local businesses grow online.',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Web Design Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Web Design',
            'description': 'Custom website design services for businesses in Calhoun, Georgia.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'E-Commerce Development',
            'description': 'Custom online store development for businesses in Calhoun, Georgia.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'SEO Services',
            'description': 'Search engine optimization services for businesses in Calhoun, Georgia.'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusiness;
