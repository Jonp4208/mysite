# Calhoun Web Creations - Admin Section Setup

This document provides instructions for setting up the admin section of the Calhoun Web Creations website using Supabase.

## Prerequisites

- Node.js and npm installed
- A Supabase account (free tier is sufficient to start)

## Setting Up Supabase

1. Create a new Supabase project at [https://app.supabase.com](https://app.supabase.com)
2. Once your project is created, go to the SQL Editor in the Supabase dashboard
3. Copy the contents of the `supabase/schema.sql` file and paste it into the SQL Editor
4. Run the SQL script to create the necessary tables, functions, and policies

If you encounter any errors when running the SQL script, try running it in smaller sections:

1. First, run the extension and type definitions:
   ```sql
   -- Enable UUID extension
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

   -- Create custom types
   CREATE TYPE user_role AS ENUM ('admin', 'editor');
   CREATE TYPE submission_status AS ENUM ('new', 'read', 'replied', 'archived');
   CREATE TYPE setting_category AS ENUM ('general', 'seo', 'contact', 'social', 'appearance');
   ```

2. Then create the tables:
   ```sql
   -- Create tables (copy the CREATE TABLE statements from schema.sql)
   ```

3. Then add the RLS policies:
   ```sql
   -- Add RLS policies (copy the ALTER TABLE and CREATE POLICY statements)
   ```

4. Then add functions and triggers:
   ```sql
   -- Create functions and triggers (copy the CREATE OR REPLACE FUNCTION and CREATE TRIGGER statements)
   ```

5. Finally, set up storage buckets and insert default data:
   ```sql
   -- Create storage buckets and policies
   -- Insert default settings
   ```

## Environment Variables

1. In your Supabase project dashboard, go to Settings > API
2. Copy the URL and anon key
3. Update your `.env` file with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Creating the First Admin User

1. Go to the Authentication section in your Supabase dashboard
2. Click on "Users" and then "Add User"
3. Enter the email and password for your admin user
4. After creating the user, click on the user to edit their details
5. Add a custom user metadata field:
   - Key: `role`
   - Value: `admin`

## Email Configuration (Optional)

If you want to enable email notifications for form submissions, update your `.env` file with the following variables:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECIPIENT=your-email@gmail.com
```

## Running the Application

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Access the admin section at:
   ```
   http://localhost:3000/admin
   ```

## Admin Features

The admin section includes the following features:

1. **Dashboard** - Overview of website statistics and quick actions
2. **Blog Management** - Create, edit, and delete blog posts
3. **Media Library** - Upload and manage images and files
4. **Form Submissions** - View and respond to contact form submissions
5. **User Management** - Manage admin and editor users
6. **Settings** - Configure website settings, SEO, and email notifications

## User Roles

- **Admin** - Full access to all features
- **Editor** - Can manage content but cannot access user management or settings

## Storage Buckets

Two storage buckets are created in Supabase:

1. **media** - For storing website media (images, documents, etc.)
2. **avatars** - For storing user profile images

## Database Tables

1. **blog_posts** - Stores blog content
2. **submissions** - Stores contact form submissions
3. **settings** - Stores website configuration
4. **media** - Stores media metadata

## Security

The admin section is secured using:

1. **Authentication** - Supabase authentication for user login
2. **Row Level Security (RLS)** - Database-level security policies
3. **Role-based access control** - Different permissions for admin and editor roles

## Troubleshooting

If you encounter any issues:

1. Check that your environment variables are correctly set
2. Ensure the SQL script was executed successfully in Supabase
3. Verify that you have created an admin user with the correct role metadata
4. Check the browser console and server logs for any error messages

### Common SQL Script Errors

If you encounter errors when running the SQL script:

1. **Permission errors**: Some statements might require higher privileges. You can safely skip the following if they cause errors:
   - `ALTER DATABASE` statements
   - Any statement that requires superuser privileges

2. **Type already exists**: If you're re-running the script, you might see errors about types already existing. You can either:
   - Drop the types first with `DROP TYPE IF EXISTS user_role, submission_status, setting_category CASCADE;`
   - Or run only the parts of the script that don't create types

3. **Tables already exist**: Similar to types, you might need to drop existing tables before recreating them:
   - `DROP TABLE IF EXISTS blog_posts, submissions, settings, media CASCADE;`

4. **Running the script in parts**: If you encounter errors, try running the script in smaller sections:
   - First run the type definitions
   - Then create tables
   - Then add policies
   - Then add functions and triggers
   - Finally insert default data
