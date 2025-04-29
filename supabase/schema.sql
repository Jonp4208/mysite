-- Create tables for the admin section

-- Note: JWT secret is already configured in your Supabase project settings
-- No need to set it manually

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a custom type for user roles
CREATE TYPE user_role AS ENUM ('admin', 'editor');

-- Create a custom type for submission status
CREATE TYPE submission_status AS ENUM ('new', 'read', 'replied', 'archived');

-- Create a custom type for setting categories
CREATE TYPE setting_category AS ENUM ('general', 'seo', 'contact', 'social', 'appearance');

-- Create blog posts table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  cover_image TEXT,
  author UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contact form submissions table
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  status submission_status DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create settings table
CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT NOT NULL,
  value JSONB NOT NULL,
  category setting_category NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(key, category)
);

-- Create media table
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  width INTEGER,
  height INTEGER,
  alt_text TEXT,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add RLS policies

-- Blog posts policies
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published blog posts
CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts FOR SELECT
  USING (published = TRUE);

-- Only authenticated users with admin or editor role can manage blog posts
CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'editor')
    )
  );

-- Submissions policies
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can create submissions
CREATE POLICY "Anyone can create submissions"
  ON submissions FOR INSERT
  WITH CHECK (TRUE);

-- Only authenticated users with admin or editor role can read and manage submissions
CREATE POLICY "Authenticated users can manage submissions"
  ON submissions FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'editor')
    )
  );

-- Settings policies
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read settings
CREATE POLICY "Anyone can read settings"
  ON settings FOR SELECT
  USING (TRUE);

-- Only authenticated users with admin role can manage settings
CREATE POLICY "Only admins can manage settings"
  ON settings FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' = 'admin'
    )
  );

-- Media policies
ALTER TABLE media ENABLE ROW LEVEL SECURITY;

-- Anyone can read media
CREATE POLICY "Anyone can read media"
  ON media FOR SELECT
  USING (TRUE);

-- Only authenticated users with admin or editor role can manage media
CREATE POLICY "Authenticated users can manage media"
  ON media FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE raw_user_meta_data->>'role' IN ('admin', 'editor')
    )
  );

-- Create functions and triggers

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for blog_posts
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON blog_posts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Trigger for submissions
CREATE TRIGGER update_submissions_updated_at
BEFORE UPDATE ON submissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Trigger for settings
CREATE TRIGGER update_settings_updated_at
BEFORE UPDATE ON settings
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Function to set published_at when a post is published
CREATE OR REPLACE FUNCTION set_published_at()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.published = TRUE AND OLD.published = FALSE THEN
    NEW.published_at = NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for blog_posts published_at
CREATE TRIGGER set_blog_posts_published_at
BEFORE UPDATE ON blog_posts
FOR EACH ROW
EXECUTE FUNCTION set_published_at();

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true);

-- Set up storage policies
CREATE POLICY "Media is publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'media');

CREATE POLICY "Anyone can upload media"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');

CREATE POLICY "Only owners can update media"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'media' AND owner = auth.uid());

CREATE POLICY "Only owners can delete media"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'media' AND owner = auth.uid());

CREATE POLICY "Avatars are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "Anyone can upload avatars"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'avatars' AND auth.role() = 'authenticated');

CREATE POLICY "Only owners can update avatars"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'avatars' AND owner = auth.uid());

CREATE POLICY "Only owners can delete avatars"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'avatars' AND owner = auth.uid());

-- Insert default settings
INSERT INTO settings (key, value, category)
VALUES
  ('siteName', '"Calhoun Web Creations"', 'general'),
  ('tagline', '"Premium Web Design Services in Georgia"', 'general'),
  ('description', '"Award-winning web design services in Calhoun, Georgia. We create beautiful, conversion-focused websites that help local businesses grow online."', 'general'),
  ('email', '"contact@calhounwebcreations.com"', 'contact'),
  ('phone', '"(555) 123-4567"', 'contact'),
  ('address', '"123 Main Street, Calhoun, GA 30701"', 'contact'),
  ('facebook', '"https://facebook.com/calhounwebcreations"', 'social'),
  ('twitter', '"https://twitter.com/calhounweb"', 'social'),
  ('instagram', '"https://instagram.com/calhounwebcreations"', 'social'),
  ('linkedin', '"https://linkedin.com/company/calhounwebcreations"', 'social'),
  ('metaTitle', '"Calhoun Web Creations | Premium Web Design Services in Georgia"', 'seo'),
  ('metaDescription', '"Award-winning web design services in Calhoun, Georgia. We create beautiful, conversion-focused websites that help local businesses grow online."', 'seo'),
  ('googleAnalyticsId', '"UA-XXXXXXXXX-X"', 'seo'),
  ('primaryColor', '"#3b82f6"', 'appearance'),
  ('secondaryColor', '"#1e40af"', 'appearance'),
  ('fontFamily', '"Inter, sans-serif"', 'appearance');
