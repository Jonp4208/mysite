'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This function will run whenever the route changes
    const handleRouteChange = (url: string) => {
      // In a real application, you would send this data to your analytics service
      // For this example, we'll just log it to the console
      console.log(`Page view: ${url}`);
      
      // Track page view
      trackPageView(url);
    };

    // Track the initial page load
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      handleRouteChange(url);
    }
  }, [pathname, searchParams]);

  // Function to track page views
  const trackPageView = (url: string) => {
    // In a real application, you would use something like Google Analytics or Plausible
    // For this example, we'll create a simple tracking mechanism
    
    try {
      // Create a simple analytics event
      const analyticsData = {
        type: 'pageview',
        page: url,
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        // You could add more data here like screen size, language, etc.
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        language: navigator.language,
      };
      
      // Log the data (in a real app, you would send this to your analytics endpoint)
      console.log('Analytics data:', analyticsData);
      
      // You could also store this in localStorage for a simple analytics dashboard
      const storedViews = localStorage.getItem('pageViews');
      const pageViews = storedViews ? JSON.parse(storedViews) : [];
      pageViews.push(analyticsData);
      localStorage.setItem('pageViews', JSON.stringify(pageViews.slice(-100))); // Keep last 100 views
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  // This component doesn't render anything
  return null;
};

export default Analytics;
