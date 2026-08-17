-- Create contact_inquiries table
CREATE TABLE public.contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  project_type TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public users to insert new inquiries
CREATE POLICY "Allow public insert to contact_inquiries"
  ON public.contact_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated admins to view and manage inquiries
-- Note: 'authenticated' role means they are signed in via Supabase Auth
CREATE POLICY "Allow authenticated full access to contact_inquiries"
  ON public.contact_inquiries
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to contact_inquiries
CREATE TRIGGER set_contact_inquiries_updated_at
BEFORE UPDATE ON public.contact_inquiries
FOR EACH ROW
EXECUTE FUNCTION handle_updated_at();

-- Enable Realtime on the contact_inquiries table
-- This allows the admin dashboard to subscribe to new inquiries
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_inquiries;
