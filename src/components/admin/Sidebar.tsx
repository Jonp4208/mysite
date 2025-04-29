'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTachometerAlt,
  FaNewspaper,
  FaImages,
  FaTools,
  FaComments,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight,
  FaUsers,
  FaEnvelope,
  FaFileAlt
} from 'react-icons/fa';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

type SidebarProps = {
  isOpen: boolean;
  isMobile: boolean;
  closeSidebar: () => void;
  currentPath: string;
};

type MenuItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
  submenu?: {
    title: string;
    path: string;
  }[];
};

const AdminSidebar = ({ isOpen, isMobile, closeSidebar, currentPath }: SidebarProps) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const toggleSubmenu = (title: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: <FaTachometerAlt />,
    },
    {
      title: 'Content',
      path: '/admin/content',
      icon: <FaFileAlt />,
      submenu: [
        { title: 'Blog Posts', path: '/admin/blog' },
        { title: 'Portfolio', path: '/admin/portfolio' },
        { title: 'Services', path: '/admin/services' },
        { title: 'Testimonials', path: '/admin/testimonials' },
      ],
    },
    {
      title: 'Media',
      path: '/admin/media',
      icon: <FaImages />,
    },
    {
      title: 'Submissions',
      path: '/admin/submissions',
      icon: <FaEnvelope />,
    },
    {
      title: 'Users',
      path: '/admin/users',
      icon: <FaUsers />,
    },
    {
      title: 'Analytics',
      path: '/admin/analytics',
      icon: <FaChartBar />,
    },
    {
      title: 'Settings',
      path: '/admin/settings',
      icon: <FaCog />,
      submenu: [
        { title: 'General', path: '/admin/settings' },
        { title: 'SEO', path: '/admin/settings/seo' },
        { title: 'Email', path: '/admin/settings/email' },
      ],
    },
  ];

  const isActive = (path: string) => {
    if (path === '/admin' && currentPath === '/admin') {
      return true;
    }
    return currentPath.startsWith(path) && path !== '/admin';
  };

  const sidebarVariants = {
    open: {
      x: 0,
      width: '16rem',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: isMobile ? '-100%' : 0,
      width: isMobile ? '16rem' : '5rem',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <AnimatePresence>
      {(isOpen || !isMobile) && (
        <>
          {/* Overlay for mobile */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-20"
              onClick={closeSidebar}
            />
          )}

          <motion.aside
            initial={isMobile ? 'closed' : 'open'}
            animate={isOpen ? 'open' : 'closed'}
            exit="closed"
            variants={sidebarVariants}
            className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-800 text-white z-40 overflow-y-auto`}
          >
            <div className="p-4">
              {menuItems.map((item) => (
                <div key={item.title} className="mb-2">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className={`flex items-center w-full p-3 rounded-md transition-colors ${
                          isActive(item.path)
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <span className="mr-3 text-lg">{item.icon}</span>
                        {(isOpen || isMobile) && (
                          <span className="flex-1 text-left">{item.title}</span>
                        )}
                        {(isOpen || isMobile) && (
                          <span className="ml-auto">
                            {expandedMenus[item.title] ? <FaChevronDown /> : <FaChevronRight />}
                          </span>
                        )}
                      </button>

                      <AnimatePresence>
                        {(isOpen || isMobile) && expandedMenus[item.title] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-1 space-y-1"
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.path}
                                href={subitem.path}
                                onClick={isMobile ? closeSidebar : undefined}
                                className={`block p-2 rounded-md transition-colors ${
                                  currentPath === subitem.path
                                    ? 'bg-gray-700 text-white'
                                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                              >
                                {subitem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={isMobile ? closeSidebar : undefined}
                      className={`flex items-center p-3 rounded-md transition-colors ${
                        isActive(item.path)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      {(isOpen || isMobile) && <span>{item.title}</span>}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-8 pt-4 border-t border-gray-700">
                <button
                  onClick={async () => {
                    const supabase = createClient();
                    await supabase.auth.signOut();
                    router.push('/login');
                  }}
                  className="flex items-center w-full p-3 rounded-md text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  <span className="mr-3 text-lg">
                    <FaSignOutAlt />
                  </span>
                  {(isOpen || isMobile) && <span>Sign Out</span>}
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default AdminSidebar;
