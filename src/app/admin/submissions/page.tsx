'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaEye,
  FaTrash,
  FaReply,
  FaSearch,
  FaFilter,
  FaFileExport,
  FaArchive,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner
} from 'react-icons/fa';
import { createClient } from '@/lib/supabase';

type SubmissionStatus = 'new' | 'read' | 'replied' | 'archived';

type Submission = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  subject?: string;
  message: string;
  status: SubmissionStatus;
  created_at: string;
  updated_at: string;
  replied_at?: string;
  notes?: string;
  ip_address?: string;
  page_url?: string;
};

export default function SubmissionsManagement() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied' | 'archived'>('all');
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setIsLoading(true);
        const supabase = createClient();

        const { data, error } = await supabase
          .from('submissions')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setSubmissions(data || []);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  // Filter and search submissions
  const filteredSubmissions = submissions.filter(submission => {
    // Apply search filter
    const matchesSearch =
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (submission.service && submission.service.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (submission.subject && submission.subject.toLowerCase().includes(searchTerm.toLowerCase()));

    // Apply status filter
    const matchesFilter = filter === 'all' || submission.status === filter;

    return matchesSearch && matchesFilter;
  });

  const handleViewSubmission = async (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsViewModalOpen(true);

    // If the submission is new, mark it as read
    if (submission.status === 'new') {
      try {
        const supabase = createClient();

        // Update in Supabase
        const { error } = await supabase
          .from('submissions')
          .update({
            status: 'read',
            updated_at: new Date().toISOString()
          })
          .eq('id', submission.id);

        if (error) {
          throw error;
        }

        // Update local state
        const updatedSubmissions = submissions.map(s =>
          s.id === submission.id ? { ...s, status: 'read' as const, updated_at: new Date().toISOString() } : s
        );
        setSubmissions(updatedSubmissions);
      } catch (error) {
        console.error('Error updating submission status:', error);
      }
    }
  };

  const handleReplySubmission = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsReplyModalOpen(true);

    const serviceText = submission.service
      ? `regarding ${submission.service}`
      : submission.subject
        ? `regarding ${submission.subject}`
        : '';

    setReplyMessage(`Dear ${submission.name},\n\nThank you for contacting Calhoun Web Creations ${serviceText}.\n\n\n\nBest regards,\nJonathon Pope\nCalhoun Web Creations`);
  };

  const handleSendReply = async () => {
    if (!selectedSubmission) return;

    setIsSending(true);

    try {
      const supabase = createClient();
      const now = new Date().toISOString();

      // In a production app, you would send an email via API
      // For example:
      // await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     to: selectedSubmission.email,
      //     subject: `Re: ${selectedSubmission.subject || 'Your inquiry'}`,
      //     message: replyMessage
      //   })
      // });

      // Update submission status in Supabase
      const { error } = await supabase
        .from('submissions')
        .update({
          status: 'replied',
          replied_at: now,
          updated_at: now,
          notes: `${selectedSubmission.notes ? selectedSubmission.notes + '\n\n' : ''}Reply sent on ${new Date().toLocaleString()}:\n${replyMessage}`
        })
        .eq('id', selectedSubmission.id);

      if (error) {
        throw error;
      }

      // Update local state
      const updatedSubmissions = submissions.map(s =>
        s.id === selectedSubmission.id ? {
          ...s,
          status: 'replied' as const,
          replied_at: now,
          updated_at: now,
          notes: `${s.notes ? s.notes + '\n\n' : ''}Reply sent on ${new Date().toLocaleString()}:\n${replyMessage}`
        } : s
      );
      setSubmissions(updatedSubmissions);

      // Close modal and reset form
      setIsReplyModalOpen(false);
      setReplyMessage('');
      setSelectedSubmission(null);

      // Show success message
      alert('Reply sent successfully!');
    } catch (error) {
      console.error('Error sending reply:', error);
      alert('An error occurred while sending the reply. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleArchiveSubmission = async (id: string) => {
    try {
      const supabase = createClient();
      const now = new Date().toISOString();

      // Update in Supabase
      const { error } = await supabase
        .from('submissions')
        .update({
          status: 'archived',
          updated_at: now
        })
        .eq('id', id);

      if (error) {
        throw error;
      }

      // Update local state
      const updatedSubmissions = submissions.map(s =>
        s.id === id ? { ...s, status: 'archived' as const, updated_at: now } : s
      );
      setSubmissions(updatedSubmissions);
    } catch (error) {
      console.error('Error archiving submission:', error);
      alert('An error occurred while archiving the submission. Please try again.');
    }
  };

  const handleDeleteSubmission = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
      try {
        const supabase = createClient();

        // Delete from Supabase
        const { error } = await supabase
          .from('submissions')
          .delete()
          .eq('id', id);

        if (error) {
          throw error;
        }

        // Update local state
        setSubmissions(submissions.filter(s => s.id !== id));
      } catch (error) {
        console.error('Error deleting submission:', error);
        alert('An error occurred while deleting the submission. Please try again.');
      }
    }
  };

  const handleExportCSV = () => {
    // Create CSV content
    const headers = ['Name', 'Email', 'Phone', 'Subject/Service', 'Message', 'Status', 'Created At', 'Updated At', 'Replied At'];
    const csvContent = [
      headers.join(','),
      ...filteredSubmissions.map(s => [
        `"${s.name.replace(/"/g, '""')}"`,
        `"${s.email.replace(/"/g, '""')}"`,
        `"${s.phone ? s.phone.replace(/"/g, '""') : ''}"`,
        `"${(s.subject || s.service || '').replace(/"/g, '""')}"`,
        `"${s.message.replace(/"/g, '""')}"`,
        `"${s.status}"`,
        `"${new Date(s.created_at).toLocaleString()}"`,
        `"${new Date(s.updated_at).toLocaleString()}"`,
        `"${s.replied_at ? new Date(s.replied_at).toLocaleString() : ''}"`,
      ].join(','))
    ].join('\n');

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadgeClass = (status: Submission['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-yellow-100 text-yellow-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Form Submissions</h1>
          <p className="text-gray-600 mt-1">Manage and respond to contact form submissions.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaFileExport className="mr-2 -ml-1 h-4 w-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search submissions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <FaFilter className="mr-2 text-gray-500" />
              <span className="text-gray-700">Filter:</span>
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="all">All Submissions</option>
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {filteredSubmissions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject/Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSubmissions.map((submission) => (
                    <motion.tr
                      key={submission.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`hover:bg-gray-50 ${submission.status === 'new' ? 'bg-blue-50' : ''}`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium text-sm">
                              {submission.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{submission.name}</div>
                            <div className="text-sm text-gray-500">{submission.email}</div>
                            <div className="text-sm text-gray-500">{submission.phone}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{submission.subject || submission.service || 'General Inquiry'}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {submission.message.length > 50
                            ? `${submission.message.substring(0, 50)}...`
                            : submission.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(submission.created_at).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(submission.status)}`}>
                          {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleViewSubmission(submission)}
                            className="text-blue-600 hover:text-blue-900"
                            title="View"
                          >
                            <FaEye className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleReplySubmission(submission)}
                            className="text-green-600 hover:text-green-900"
                            title="Reply"
                          >
                            <FaReply className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleArchiveSubmission(submission.id)}
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Archive"
                            disabled={submission.status === 'archived'}
                          >
                            <FaArchive className={`h-5 w-5 ${submission.status === 'archived' ? 'opacity-50 cursor-not-allowed' : ''}`} />
                          </button>
                          <button
                            onClick={() => handleDeleteSubmission(submission.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <FaTrash className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-500 text-lg">
                {searchTerm || filter !== 'all'
                  ? 'No submissions match your search or filter criteria.'
                  : 'No submissions found.'}
              </p>
              {searchTerm || filter !== 'all' ? (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilter('all');
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Clear Filters
                </button>
              ) : null}
            </div>
          )}
        </div>
      )}

      {/* View Submission Modal */}
      {isViewModalOpen && selectedSubmission && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaEnvelope className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Submission Details
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Contact Information</h4>
                        <p className="mt-1 text-sm text-gray-900">{selectedSubmission.name}</p>
                        <p className="mt-1 text-sm text-gray-900">{selectedSubmission.email}</p>
                        <p className="mt-1 text-sm text-gray-900">{selectedSubmission.phone}</p>
                      </div>
                      {(selectedSubmission.subject || selectedSubmission.service) && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">{selectedSubmission.subject ? 'Subject' : 'Service'}</h4>
                          <p className="mt-1 text-sm text-gray-900">{selectedSubmission.subject || selectedSubmission.service}</p>
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Message</h4>
                        <p className="mt-1 text-sm text-gray-900 whitespace-pre-line">{selectedSubmission.message}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Submitted On</h4>
                        <p className="mt-1 text-sm text-gray-900">
                          {new Date(selectedSubmission.created_at).toLocaleString()}
                        </p>
                      </div>
                      {selectedSubmission.page_url && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Submitted From</h4>
                          <p className="mt-1 text-sm text-gray-900">
                            {selectedSubmission.page_url}
                          </p>
                        </div>
                      )}
                      {selectedSubmission.notes && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Notes</h4>
                          <p className="mt-1 text-sm text-gray-900 whitespace-pre-line bg-gray-50 p-3 rounded">
                            {selectedSubmission.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => handleReplySubmission(selectedSubmission)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Reply
                </button>
                <button
                  type="button"
                  onClick={() => setIsViewModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {isReplyModalOpen && selectedSubmission && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaReply className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Reply to {selectedSubmission.name}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        This will send an email to {selectedSubmission.email}.
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          defaultValue={`Re: ${selectedSubmission.service} Inquiry`}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={8}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={replyMessage}
                          onChange={(e) => setReplyMessage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={handleSendReply}
                  disabled={isSending}
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm ${
                    isSending ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Reply'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setIsReplyModalOpen(false)}
                  disabled={isSending}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
