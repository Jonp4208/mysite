import { createBrowserClient } from '@supabase/ssr';

// Create a browser client for client-side usage
export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};

// Helper function to get user session on the client side
export const getSession = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Error getting session:', error);
    return null;
  }
  return data.session;
};

// Helper function to check if user is authenticated
export const isAuthenticated = async () => {
  const session = await getSession();
  return !!session;
};

// Helper function to check if user is an admin
export const isAdmin = async () => {
  const session = await getSession();
  if (!session) return false;

  // Get user metadata to check role
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user?.user_metadata?.role === 'admin';
};

// Helper function to check if user is an editor or admin
export const isEditorOrAdmin = async () => {
  const session = await getSession();
  if (!session) return false;

  // Get user metadata to check role
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const role = user?.user_metadata?.role;
  return role === 'admin' || role === 'editor';
};
