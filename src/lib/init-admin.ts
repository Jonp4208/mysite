import dbConnect from './db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

/**
 * Initialize the first admin user if no users exist in the database
 * This is useful for setting up the application for the first time
 */
export async function initializeAdmin() {
  try {
    // Connect to the database
    await dbConnect();
    
    // Check if any users exist
    const userCount = await User.countDocuments();
    
    if (userCount === 0) {
      console.log('No users found. Creating default admin user...');
      
      // Create default admin user
      const defaultAdmin = {
        name: 'Admin',
        email: process.env.DEFAULT_ADMIN_EMAIL || 'admin@example.com',
        password: process.env.DEFAULT_ADMIN_PASSWORD || 'admin123',
        role: 'admin',
      };
      
      // Create the user
      await User.create(defaultAdmin);
      
      console.log(`Default admin user created with email: ${defaultAdmin.email}`);
      console.log('Please change the password immediately after first login!');
    }
  } catch (error) {
    console.error('Error initializing admin user:', error);
  }
}

/**
 * Create a new user
 */
export async function createUser(userData: {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'editor';
}) {
  try {
    await dbConnect();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    
    // Create the user
    const user = await User.create(userData);
    
    // Return user without password
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Update a user
 */
export async function updateUser(
  userId: string,
  userData: {
    name?: string;
    email?: string;
    password?: string;
    role?: 'admin' | 'editor';
  }
) {
  try {
    await dbConnect();
    
    // Find the user
    const user = await User.findById(userId);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    // Update user fields
    if (userData.name) user.name = userData.name;
    if (userData.email) user.email = userData.email;
    if (userData.role) user.role = userData.role;
    
    // If password is provided, hash it
    if (userData.password) {
      user.password = userData.password;
    }
    
    // Save the user
    await user.save();
    
    // Return user without password
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}
