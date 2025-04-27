'use client';

import { useEffect, useState } from 'react';

type ImageBackgroundProps = {
  category?: string;
  overlay?: boolean;
  overlayColor?: string;
  className?: string;
  staticImage?: string;
  localImage?: boolean;
};

// Preselected optimized images for better performance and consistency
const preselectedImages = {
  'creative,design,professional': [
    '/images/backgrounds/design-workspace-1.jpg',
    '/images/backgrounds/design-workspace-2.jpg',
    '/images/backgrounds/design-workspace-3.jpg',
  ],
  'business,success,growth': [
    '/images/backgrounds/business-1.jpg',
    '/images/backgrounds/business-2.jpg',
  ],
  'web,design': [
    '/images/backgrounds/web-design-1.jpg',
    '/images/backgrounds/web-design-2.jpg',
  ],
  'calhoun,georgia': [
    '/images/calhoun/Theatre.jpg', // Use the authentic Theatre image as primary
    '/images/calhoun/gem-theatre.jpg', // Backup GEM Theatre image
  ],
};

const ImageBackground = ({
  category = 'web,design',
  overlay = true,
  overlayColor = 'from-gray-900/90 to-blue-900/70',
  className = '',
  staticImage = '',
  localImage = false
}: ImageBackgroundProps) => {
  const [loaded, setLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    let url = '';

    // If a static image is provided, use it
    if (staticImage) {
      url = staticImage;
    }
    // If we want to use a local image from our preselected set
    else if (localImage && preselectedImages[category]) {
      // Randomly select one image from the category
      const images = preselectedImages[category];
      url = images[Math.floor(Math.random() * images.length)];
    }
    // Fallback to Unsplash
    else {
      url = `https://source.unsplash.com/1600x900/?${category}`;
    }

    // Create a new image to preload
    const img = new Image();
    img.src = url;

    // When the image loads, set the state
    img.onload = () => {
      setImageUrl(url);
      setLoaded(true);
    };

    // Fallback in case image doesn't load
    const timeout = setTimeout(() => {
      if (!loaded) {
        // If image fails to load, use a gradient background
        setLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [category, staticImage, localImage]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {loaded && imageUrl ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${imageUrl})`,
              opacity: 1,
              backgroundPosition: category === 'calhoun,georgia' ? 'center 25%' : 'center',
              filter: 'brightness(1.05) contrast(1.1)'
            }}
          />
          {overlay && (
            <>
              {/* Multiple overlay layers for a richer effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
              <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-indigo-900/10 to-purple-900/10"></div>
            </>
          )}
        </>
      ) : (
        // Fallback gradient background
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900"></div>
      )}
    </div>
  );
};

export default ImageBackground;
