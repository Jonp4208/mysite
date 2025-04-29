'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type PageView = {
  type: string;
  page: string;
  referrer: string;
  userAgent: string;
  timestamp: string;
  screenWidth: number;
  screenHeight: number;
  language: string;
};

const PageViewTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Skip tracking for admin pages
    if (pathname.startsWith('/admin')) {
      return;
    }

    try {
      // Create page view object
      const pageView: PageView = {
        type: 'pageview',
        page: pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        language: navigator.language,
      };

      // Get existing page views from localStorage
      const existingViews = localStorage.getItem('pageViews');
      const pageViews = existingViews ? JSON.parse(existingViews) : [];

      // Add new page view
      pageViews.push(pageView);

      // Limit to last 1000 page views to prevent localStorage from getting too large
      const limitedPageViews = pageViews.slice(-1000);

      // Save to localStorage
      localStorage.setItem('pageViews', JSON.stringify(limitedPageViews));

      // In a real application, you would also send this data to your analytics server
      // Example: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(pageView) });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default PageViewTracker;
