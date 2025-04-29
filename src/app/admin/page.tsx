'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaDesktop,
  FaMobile,
  FaGlobe,
  FaEnvelope,
  FaNewspaper,
  FaUsers,
  FaServer,
  FaExclamationTriangle,
  FaCheckCircle
} from 'react-icons/fa';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';

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

type QuickAction = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
};

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [newSubmissions, setNewSubmissions] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [systemStatus, setSystemStatus] = useState<'healthy' | 'warning' | 'error'>('healthy');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();

    setIsClient(true);
    try {
      // Load page views from localStorage
      const storedViews = localStorage.getItem('pageViews');
      if (storedViews) {
        setPageViews(JSON.parse(storedViews));
      }

      // Simulate loading new submissions count
      setNewSubmissions(Math.floor(Math.random() * 5));

      // Simulate loading pending tasks
      setPendingTasks(Math.floor(Math.random() * 3));

      // Simulate system status check
      const statuses = ['healthy', 'warning', 'error'];
      const weights = [0.8, 0.15, 0.05]; // 80% healthy, 15% warning, 5% error
      const random = Math.random();
      let statusIndex = 0;
      let sum = 0;

      for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (random <= sum) {
          statusIndex = i;
          break;
        }
      }

      setSystemStatus(statuses[statusIndex] as 'healthy' | 'warning' | 'error');
    } catch (error) {
      console.error('Error loading page views:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Calculate statistics
  const totalPageViews = pageViews.length;
  const uniquePages = new Set(pageViews.map(view => view.page)).size;
  const deviceTypes = pageViews.reduce((acc, view) => {
    const isMobile = /mobile|android|iphone|ipad|ipod/i.test(view.userAgent.toLowerCase());
    acc[isMobile ? 'mobile' : 'desktop'] = (acc[isMobile ? 'mobile' : 'desktop'] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Group page views by page
  const pageViewsByPage = pageViews.reduce((acc, view) => {
    acc[view.page] = (acc[view.page] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Sort pages by view count
  const sortedPages = Object.entries(pageViewsByPage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // Quick actions
  const quickActions: QuickAction[] = [
    {
      title: 'New Blog Post',
      description: 'Create a new blog post',
      icon: <FaNewspaper className="h-6 w-6" />,
      href: '/admin/blog/new',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      title: 'View Submissions',
      description: `${newSubmissions} new contact form submissions`,
      icon: <FaEnvelope className="h-6 w-6" />,
      href: '/admin/submissions',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      title: 'Manage Users',
      description: 'Add or edit user accounts',
      icon: <FaUsers className="h-6 w-6" />,
      href: '/admin/users',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      title: 'System Status',
      description: systemStatus === 'healthy'
        ? 'All systems operational'
        : systemStatus === 'warning'
          ? 'Some systems need attention'
          : 'System issues detected',
      icon: systemStatus === 'healthy'
        ? <FaCheckCircle className="h-6 w-6" />
        : <FaExclamationTriangle className="h-6 w-6" />,
      href: '/admin/settings',
      color: systemStatus === 'healthy'
        ? 'bg-emerald-500 hover:bg-emerald-600'
        : systemStatus === 'warning'
          ? 'bg-amber-500 hover:bg-amber-600'
          : 'bg-red-500 hover:bg-red-600',
    },
  ];

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
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.user_metadata?.name || user?.email || 'Admin'}</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your website today.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/admin/settings"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaServer className="mr-2 -ml-1 h-4 w-4" />
              Site Settings
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={action.title}
                    href={action.href}
                    className={`${action.color} text-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-6"
                    >
                      <div className="flex items-center">
                        <div className="bg-white/20 p-3 rounded-full mr-4">
                          {action.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{action.title}</h3>
                          <p className="text-white/80 text-sm">{action.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Analytics Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            </div>

              {/* Top Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6 mb-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Top Pages</h2>
                {sortedPages.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left text-gray-700">Page</th>
                          <th className="px-4 py-2 text-left text-gray-700">Views</th>
                          <th className="px-4 py-2 text-left text-gray-700">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedPages.map(([page, count], index) => (
                          <tr key={page} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="px-4 py-3 text-gray-900">{page}</td>
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
                  <p className="text-gray-600">No page views recorded yet.</p>
                )}
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                {pageViews.length > 0 ? (
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
                        {pageViews.slice(-10).reverse().map((view, index) => {
                          const date = new Date(view.timestamp);
                          const formattedTime = date.toLocaleTimeString();
                          const isMobile = /mobile|android|iphone|ipad|ipod/i.test(view.userAgent.toLowerCase());

                          return (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                              <td className="px-4 py-3 text-gray-900">{formattedTime}</td>
                              <td className="px-4 py-3 text-gray-900">{view.page}</td>
                              <td className="px-4 py-3 text-gray-900">{view.referrer || 'Direct'}</td>
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
                  <p className="text-gray-600">No recent activity recorded.</p>
                )}
              </motion.div>
            </>
          )}
        </motion.div>
    </div>
  );
}
