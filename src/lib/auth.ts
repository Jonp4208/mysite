import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from './db';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide both email and password');
        }

        await dbConnect();

        // Find user by email and include the password field
        const user = await User.findOne({ email: credentials.email }).select('+password');

        if (!user) {
          throw new Error('No user found with this email');
        }

        // Check if password matches
        const isPasswordValid = await user.comparePassword(credentials.password);

        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }

        // Return user without password
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
};

// Helper function to check if user is authenticated on the client side
export const isAuthenticated = (session: any) => {
  return !!session?.user;
};

// Helper function to check if user is an admin
export const isAdmin = (session: any) => {
  return session?.user?.role === 'admin';
};

// Helper function to check if user is an editor or admin
export const isEditorOrAdmin = (session: any) => {
  return ['editor', 'admin'].includes(session?.user?.role);
};
