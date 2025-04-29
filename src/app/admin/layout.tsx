'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import AdminSidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/Header';
import { FaSpinner } from 'react-icons/fa';
import { createClient } from '@/lib/supabase';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated
  useEffect(() => {
    const checkSession = async () => {
      try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();

        setSession(session);
        setIsLoading(false);

        if (!session) {
          router.push('/login');
        }

        // Set up auth state change listener
        const { data: { subscription } } = await supabase.auth.onAuthStateChange(
          (_event, session) => {
            setSession(session);
            if (!session) {
              router.push('/login');
            }
          }
        );

        // Cleanup subscription
        return () => {
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error checking auth:', error);
        setIsLoading(false);
        router.push('/login');
      }
    };

    checkSession();
  }, [router]);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <FaSpinner className="animate-spin text-blue-600 h-12 w-12 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render anything (will redirect in useEffect)
  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen h-screen bg-gray-100 flex flex-col">
      <div className="sticky top-0 z-50">
        <AdminHeader
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar
          isOpen={isSidebarOpen}
          isMobile={isMobile}
          closeSidebar={() => isMobile && setIsSidebarOpen(false)}
          currentPath={pathname}
        />

        <main className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : ''}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6 mt-2 pb-16"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
