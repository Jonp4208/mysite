export type SubmissionStatus = 'new' | 'read' | 'replied' | 'archived';

export type Submission = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  status: SubmissionStatus;
  created_at: string;
  updated_at: string;
  replied_at?: string;
  notes?: string;
  ip_address?: string;
  page_url?: string;
};
