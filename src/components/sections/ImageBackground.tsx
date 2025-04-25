'use client';

import { useEffect, useState } from 'react';

type ImageBackgroundProps = {
  category?: string;
  overlay?: boolean;
  overlayColor?: string;
  className?: string;
};

const ImageBackground = ({
  category = 'web,design',
  overlay = true,
  overlayColor = 'from-gray-900/90 to-blue-900/70',
  className = ''
}: ImageBackgroundProps) => {
  const [loaded, setLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Use Unsplash source for a random image based on category
    const url = `https://source.unsplash.com/1600x900/?${category}`;
    
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
        setLoaded(true);
      }
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [category]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {loaded && imageUrl ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{ backgroundImage: `url(${imageUrl})`, opacity: 1 }}
          />
          {overlay && (
            <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}></div>
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
