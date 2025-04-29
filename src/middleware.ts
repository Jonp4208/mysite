import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define protected routes
  const isAdminRoute = path.startsWith('/admin');
  const isApiAdminRoute = path.startsWith('/api/admin') ||
                          path.startsWith('/api/users') ||
                          path.startsWith('/api/blog') ||
                          path.startsWith('/api/settings');

  // Public routes that don't need protection
  const isPublicRoute = path === '/login' ||
                       path === '/api/contact' ||
                       path.startsWith('/_next') ||
                       path.startsWith('/static');

  // Check if the route needs protection
  if (!isPublicRoute && (isAdminRoute || isApiAdminRoute)) {
    // Create a Supabase client for the middleware
    const res = NextResponse.next();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get: (name) => request.cookies.get(name)?.value,
          set: (name, value, options) => {
            res.cookies.set({ name, value, ...options });
          },
          remove: (name, options) => {
            res.cookies.set({ name, value: '', ...options });
          },
        },
      }
    );

    // Check if the user is authenticated
    const { data: { session } } = await supabase.auth.getSession();

    // If no session, redirect to login page or return unauthorized
    if (!session) {
      // Redirect to login page if accessing admin UI
      if (isAdminRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      // Return unauthorized for API routes
      if (isApiAdminRoute) {
        return new NextResponse(
          JSON.stringify({ error: 'Unauthorized' }),
          { status: 401, headers: { 'content-type': 'application/json' } }
        );
      }
    }

    // For admin-only routes, check if user has admin role
    const adminOnlyRoutes = [
      '/admin/users',
      '/admin/settings',
      '/api/users',
      '/api/settings',
    ];

    const isAdminOnlyRoute = adminOnlyRoutes.some(route => path.startsWith(route));

    if (isAdminOnlyRoute) {
      const { data: { user } } = await supabase.auth.getUser();
      const isAdmin = user?.user_metadata?.role === 'admin';

      if (!isAdmin) {
        // Redirect to dashboard if accessing admin UI
        if (isAdminRoute) {
          return NextResponse.redirect(new URL('/admin', request.url));
        }

        // Return forbidden for API routes
        if (isApiAdminRoute) {
          return new NextResponse(
            JSON.stringify({ error: 'Forbidden' }),
            { status: 403, headers: { 'content-type': 'application/json' } }
          );
        }
      }
    }

    return res;
  }

  return NextResponse.next();
}
