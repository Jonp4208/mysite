-- Create submission_status enum type if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'submission_status') THEN
        CREATE TYPE submission_status AS ENUM ('new', 'read', 'replied', 'archived');
    END IF;
END
$$;

-- Create submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status submission_status NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  replied_at TIMESTAMPTZ,
  notes TEXT,
  ip_address TEXT,
  page_url TEXT
);

-- Add missing columns if they don't exist
DO $$
BEGIN
    -- Add subject column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                  WHERE table_name = 'submissions' AND column_name = 'subject') THEN
        ALTER TABLE submissions ADD COLUMN subject TEXT;
    END IF;

    -- Add replied_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                  WHERE table_name = 'submissions' AND column_name = 'replied_at') THEN
        ALTER TABLE submissions ADD COLUMN replied_at TIMESTAMPTZ;
    END IF;

    -- Add notes column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                  WHERE table_name = 'submissions' AND column_name = 'notes') THEN
        ALTER TABLE submissions ADD COLUMN notes TEXT;
    END IF;

    -- Add ip_address column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                  WHERE table_name = 'submissions' AND column_name = 'ip_address') THEN
        ALTER TABLE submissions ADD COLUMN ip_address TEXT;
    END IF;

    -- Add page_url column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                  WHERE table_name = 'submissions' AND column_name = 'page_url') THEN
        ALTER TABLE submissions ADD COLUMN page_url TEXT;
    END IF;
END
$$;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at);

-- Add Row Level Security (RLS) policies
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow only authenticated users to view submissions
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'submissions'
        AND policyname = 'Allow authenticated users to view submissions'
    ) THEN
        CREATE POLICY "Allow authenticated users to view submissions"
          ON submissions FOR SELECT
          USING (auth.role() = 'authenticated');
    END IF;
END
$$;

-- Create policy to allow only authenticated users to insert submissions
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'submissions'
        AND policyname = 'Allow authenticated users to insert submissions'
    ) THEN
        CREATE POLICY "Allow authenticated users to insert submissions"
          ON submissions FOR INSERT
          WITH CHECK (auth.role() = 'authenticated');
    END IF;
END
$$;

-- Create policy to allow only authenticated users to update submissions
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'submissions'
        AND policyname = 'Allow authenticated users to update submissions'
    ) THEN
        CREATE POLICY "Allow authenticated users to update submissions"
          ON submissions FOR UPDATE
          USING (auth.role() = 'authenticated')
          WITH CHECK (auth.role() = 'authenticated');
    END IF;
END
$$;

-- Create policy to allow only authenticated users to delete submissions
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'submissions'
        AND policyname = 'Allow authenticated users to delete submissions'
    ) THEN
        CREATE POLICY "Allow authenticated users to delete submissions"
          ON submissions FOR DELETE
          USING (auth.role() = 'authenticated');
    END IF;
END
$$;

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the function before an update if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger
        WHERE tgname = 'update_submissions_updated_at'
    ) THEN
        CREATE TRIGGER update_submissions_updated_at
        BEFORE UPDATE ON submissions
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    END IF;
END
$$;

-- Create a public API function to submit contact form entries
-- This allows submissions without authentication
CREATE OR REPLACE FUNCTION public.submit_contact_form(
  name TEXT,
  email TEXT,
  message TEXT,
  phone TEXT DEFAULT NULL,
  service TEXT DEFAULT NULL,
  subject TEXT DEFAULT NULL,
  ip_address TEXT DEFAULT NULL,
  page_url TEXT DEFAULT NULL
) RETURNS UUID AS $$
DECLARE
  submission_id UUID;
BEGIN
  INSERT INTO submissions (
    name,
    email,
    message,
    phone,
    service,
    subject,
    status,
    ip_address,
    page_url
  ) VALUES (
    name,
    email,
    message,
    phone,
    service,
    subject,
    'new',
    ip_address,
    page_url
  ) RETURNING id INTO submission_id;

  RETURN submission_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Allow anonymous access to the contact form submission function
DO $$
BEGIN
    BEGIN
        -- Grant execute permission to anon role
        GRANT EXECUTE ON FUNCTION public.submit_contact_form(TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT) TO anon;
    EXCEPTION
        -- Ignore if permission already exists
        WHEN duplicate_object THEN NULL;
    END;
END
$$;

-- Add some example data (optional - comment out if not needed)
/*
INSERT INTO submissions (name, email, phone, subject, message, status)
VALUES
  ('John Smith', 'john.smith@example.com', '(555) 123-4567', 'Website Redesign', 'I need a new website for my small business. Can you help me with that?', 'new'),
  ('Sarah Johnson', 'sarah.j@example.com', '(555) 987-6543', 'SEO Services', 'I would like to improve my website''s search engine ranking. What services do you offer?', 'read'),
  ('Michael Brown', 'michael.brown@example.com', '(555) 456-7890', 'E-commerce Development', 'I want to add an online store to my existing website. Can you provide a quote?', 'replied');
*/
