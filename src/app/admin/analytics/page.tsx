'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEye, 
  FaDesktop, 
  FaMobile, 
  FaGlobe, 
  FaCalendarAlt, 
  FaChartLine,
  FaChartPie,
  FaChartBar,
  FaMapMarkerAlt,
  FaFilter,
  FaDownload
} from 'react-icons/fa';

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

type TimeRange = '7days' | '30days' | '90days' | 'all';

export default function AnalyticsDashboard() {
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<TimeRange>('30days');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      // Load page views from localStorage
      const storedViews = localStorage.getItem('pageViews');
      if (storedViews) {
        setPageViews(JSON.parse(storedViews));
      }
    } catch (error) {
      console.error('Error loading page views:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Filter page views based on selected time range
  const filteredPageViews = pageViews.filter(view => {
    const viewDate = new Date(view.timestamp);
    const now = new Date();
    
    switch (timeRange) {
      case '7days':
        const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
        return viewDate >= sevenDaysAgo;
      case '30days':
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
        return viewDate >= thirtyDaysAgo;
      case '90days':
        const ninetyDaysAgo = new Date(now.setDate(now.getDate() - 90));
        return viewDate >= ninetyDaysAgo;
      case 'all':
      default:
        return true;
    }
  });

  // Calculate statistics
  const totalPageViews = filteredPageViews.length;
  const uniquePages = new Set(filteredPageViews.map(view => view.page)).size;
  const uniqueVisitors = new Set(filteredPageViews.map(view => view.userAgent)).size;
  
  // Device types
  const deviceTypes = filteredPageViews.reduce((acc, view) => {
    const isMobile = /mobile|android|iphone|ipad|ipod/i.test(view.userAgent.toLowerCase());
    acc[isMobile ? 'mobile' : 'desktop'] = (acc[isMobile ? 'mobile' : 'desktop'] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Group page views by page
  const pageViewsByPage = filteredPageViews.reduce((acc, view) => {
    acc[view.page] = (acc[view.page] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Sort pages by view count
  const sortedPages = Object.entries(pageViewsByPage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // Group page views by referrer
  const pageViewsByReferrer = filteredPageViews.reduce((acc, view) => {
    const referrer = view.referrer || 'Direct';
    acc[referrer] = (acc[referrer] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Sort referrers by view count
  const sortedReferrers = Object.entries(pageViewsByReferrer)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // Group page views by day
  const pageViewsByDay = filteredPageViews.reduce((acc, view) => {
    const date = new Date(view.timestamp);
    const day = date.toISOString().split('T')[0];
    acc[day] = (acc[day] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Sort days chronologically
  const sortedDays = Object.entries(pageViewsByDay)
    .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());

  if (!isClient) {
    return null; // Prevent hydration errors
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Track your website's performance and visitor behavior</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <div className="relative">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value as TimeRange)}
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="all">All Time</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaFilter className="h-4 w-4" />
              </div>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FaDownload className="mr-2 -ml-1 h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEye className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Total Page Views</h3>
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{totalPageViews}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaGlobe className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Unique Pages</h3>
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{uniquePages}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaDesktop className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Desktop Views</h3>
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{deviceTypes.desktop || 0}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <FaMobile className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">Mobile Views</h3>
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{deviceTypes.mobile || 0}</p>
              </motion.div>
            </div>

            {/* Traffic Over Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <div className="flex items-center mb-6">
                <FaChartLine className="text-blue-600 mr-3 text-xl" />
                <h2 className="text-xl font-bold text-gray-900">Traffic Over Time</h2>
              </div>
              
              {sortedDays.length > 0 ? (
                <div className="h-64">
                  <div className="flex h-full items-end space-x-2">
                    {sortedDays.map(([day, count], index) => {
                      const maxCount = Math.max(...sortedDays.map(([_, c]) => c));
                      const height = (count / maxCount) * 100;
                      const date = new Date(day);
                      const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                      
                      return (
                        <div key={day} className="flex flex-col items-center flex-1">
                          <div 
                            className="w-full bg-blue-500 rounded-t-md transition-all duration-500"
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="text-xs text-gray-600 mt-2 transform -rotate-45 origin-top-left">{formattedDate}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center">
                  <p className="text-gray-500">No data available for the selected time period.</p>
                </div>
              )}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Top Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-6">
                  <FaChartBar className="text-blue-600 mr-3 text-xl" />
                  <h2 className="text-xl font-bold text-gray-900">Top Pages</h2>
                </div>
                
                {sortedPages.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left text-gray-700">Page</th>
                          <th className="px-4 py-2 text-left text-gray-700">Views</th>
                          <th className="px-4 py-2 text-left text-gray-700">%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedPages.map(([page, count], index) => (
                          <tr key={page} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="px-4 py-3 text-gray-900 truncate max-w-[200px]">{page}</td>
                            <td className="px-4 py-3 text-gray-900">{count}</td>
                            <td className="px-4 py-3 text-gray-900">
                              {((count / totalPageViews) * 100).toFixed(1)}%
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{ width: `${(count / totalPageViews) * 100}%` }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500">No data available for the selected time period.</p>
                )}
              </motion.div>

              {/* Traffic Sources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-6">
                  <FaChartPie className="text-blue-600 mr-3 text-xl" />
                  <h2 className="text-xl font-bold text-gray-900">Traffic Sources</h2>
                </div>
                
                {sortedReferrers.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left text-gray-700">Source</th>
                          <th className="px-4 py-2 text-left text-gray-700">Visits</th>
                          <th className="px-4 py-2 text-left text-gray-700">%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedReferrers.map(([referrer, count], index) => (
                          <tr key={referrer} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="px-4 py-3 text-gray-900 truncate max-w-[200px]">{referrer}</td>
                            <td className="px-4 py-3 text-gray-900">{count}</td>
                            <td className="px-4 py-3 text-gray-900">
                              {((count / totalPageViews) * 100).toFixed(1)}%
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                <div
                                  className="bg-green-600 h-2.5 rounded-full"
                                  style={{ width: `${(count / totalPageViews) * 100}%` }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500">No data available for the selected time period.</p>
                )}
              </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-6">
                <FaCalendarAlt className="text-blue-600 mr-3 text-xl" />
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              </div>
              
              {filteredPageViews.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left text-gray-700">Time</th>
                        <th className="px-4 py-2 text-left text-gray-700">Page</th>
                        <th className="px-4 py-2 text-left text-gray-700">Referrer</th>
                        <th className="px-4 py-2 text-left text-gray-700">Device</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPageViews.slice(-10).reverse().map((view, index) => {
                        const date = new Date(view.timestamp);
                        const formattedTime = date.toLocaleString();
                        const isMobile = /mobile|android|iphone|ipad|ipod/i.test(view.userAgent.toLowerCase());

                        return (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="px-4 py-3 text-gray-900">{formattedTime}</td>
                            <td className="px-4 py-3 text-gray-900 truncate max-w-[200px]">{view.page}</td>
                            <td className="px-4 py-3 text-gray-900 truncate max-w-[200px]">{view.referrer || 'Direct'}</td>
                            <td className="px-4 py-3 text-gray-900">
                              <div className="flex items-center">
                                {isMobile ? (
                                  <FaMobile className="text-orange-600 mr-2" />
                                ) : (
                                  <FaDesktop className="text-purple-600 mr-2" />
                                )}
                                {isMobile ? 'Mobile' : 'Desktop'}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No data available for the selected time period.</p>
              )}
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}
