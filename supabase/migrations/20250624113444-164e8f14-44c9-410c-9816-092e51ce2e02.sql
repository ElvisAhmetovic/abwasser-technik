
-- Create a table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for service requests/inquiries
CREATE TABLE public.service_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_type TEXT NOT NULL, -- 'rohrreinigung', 'kanalsanierung', 'notdienst', etc.
  description TEXT,
  urgent BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'new', -- 'new', 'in_progress', 'completed', 'cancelled'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for emergency/notdienst calls
CREATE TABLE public.emergency_calls (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  description TEXT NOT NULL,
  priority TEXT DEFAULT 'high', -- 'high', 'urgent', 'critical'
  status TEXT DEFAULT 'new', -- 'new', 'assigned', 'in_progress', 'completed'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  resolved_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_calls ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts (for forms) but restrict access to data
CREATE POLICY "Allow public contact form submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Allow public service requests" 
  ON public.service_requests 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Allow public emergency calls" 
  ON public.emergency_calls 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Policies for authenticated users (admin access)
CREATE POLICY "Authenticated users can view contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  TO authenticated 
  USING (true);

CREATE POLICY "Authenticated users can view service requests" 
  ON public.service_requests 
  FOR ALL 
  TO authenticated 
  USING (true);

CREATE POLICY "Authenticated users can view emergency calls" 
  ON public.emergency_calls 
  FOR ALL 
  TO authenticated 
  USING (true);
