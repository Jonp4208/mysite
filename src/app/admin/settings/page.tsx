'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSave, 
  FaGlobe, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaCheckCircle
} from 'react-icons/fa';

type Settings = {
  general: {
    siteName: string;
    tagline: string;
    description: string;
    email: string;
    phone: string;
    address: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    googleAnalyticsId: string;
  };
  email: {
    smtpHost: string;
    smtpPort: string;
    smtpUser: string;
    smtpPassword: string;
    senderEmail: string;
    senderName: string;
  };
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'social' | 'seo' | 'email'>('general');
  const [settings, setSettings] = useState<Settings>({
    general: {
      siteName: 'Calhoun Web Creations',
      tagline: 'Premium Web Design Services in Georgia',
      description: 'Award-winning web design services in Calhoun, Georgia. We create beautiful, conversion-focused websites that help local businesses grow online.',
      email: 'contact@calhounwebcreations.com',
      phone: '(555) 123-4567',
      address: '123 Main Street, Calhoun, GA 30701',
    },
    social: {
      facebook: 'https://facebook.com/calhounwebcreations',
      twitter: 'https://twitter.com/calhounweb',
      instagram: 'https://instagram.com/calhounwebcreations',
      linkedin: 'https://linkedin.com/company/calhounwebcreations',
    },
    seo: {
      metaTitle: 'Calhoun Web Creations | Premium Web Design Services in Georgia',
      metaDescription: 'Award-winning web design services in Calhoun, Georgia. We create beautiful, conversion-focused websites that help local businesses grow online.',
      googleAnalyticsId: 'UA-XXXXXXXXX-X',
    },
    email: {
      smtpHost: 'smtp.gmail.com',
      smtpPort: '587',
      smtpUser: 'contact@calhounwebcreations.com',
      smtpPassword: '••••••••••••',
      senderEmail: 'contact@calhounwebcreations.com',
      senderName: 'Calhoun Web Creations',
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (section: keyof Settings, field: string, value: string) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [field]: value,
      },
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      // In a real app, this would send data to an API endpoint
      // For now, we'll just simulate a successful save
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setIsSaved(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSaved(false);
      }, 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('An error occurred while saving settings. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Site Settings</h1>
          <p className="text-gray-600 mt-1">Configure your website settings.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button 
            onClick={handleSave}
            disabled={isLoading}
            className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                <FaSave className="mr-2 -ml-1 h-4 w-4" />
                Save Settings
              </>
            )}
          </button>
        </div>
      </div>

      {isSaved && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mb-6 bg-green-50 border-l-4 border-green-500 p-4"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <FaCheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Settings saved successfully!
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('general')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'general'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'social'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Social Media
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'seo'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              SEO
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'email'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Email
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* General Settings */}
          {activeTab === 'general' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                  Site Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaGlobe className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="siteName"
                    value={settings.general.siteName}
                    onChange={(e) => handleChange('general', 'siteName', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tagline" className="block text-sm font-medium text-gray-700">
                  Tagline
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="tagline"
                    value={settings.general.tagline}
                    onChange={(e) => handleChange('general', 'tagline', e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Site Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    rows={3}
                    value={settings.general.description}
                    onChange={(e) => handleChange('general', 'description', e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Contact Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={settings.general.email}
                    onChange={(e) => handleChange('general', 'email', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Contact Phone
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="phone"
                    value={settings.general.phone}
                    onChange={(e) => handleChange('general', 'phone', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Business Address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="address"
                    value={settings.general.address}
                    onChange={(e) => handleChange('general', 'address', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Social Media Settings */}
          {activeTab === 'social' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                  Facebook URL
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaFacebook className="h-5 w-5 text-blue-600" />
                  </div>
                  <input
                    type="url"
                    id="facebook"
                    value={settings.social.facebook}
                    onChange={(e) => handleChange('social', 'facebook', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="https://facebook.com/yourpage"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                  Twitter URL
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaTwitter className="h-5 w-5 text-blue-400" />
                  </div>
                  <input
                    type="url"
                    id="twitter"
                    value={settings.social.twitter}
                    onChange={(e) => handleChange('social', 'twitter', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="https://twitter.com/yourusername"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Instagram URL
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaInstagram className="h-5 w-5 text-pink-600" />
                  </div>
                  <input
                    type="url"
                    id="instagram"
                    value={settings.social.instagram}
                    onChange={(e) => handleChange('social', 'instagram', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="https://instagram.com/yourusername"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                  LinkedIn URL
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLinkedin className="h-5 w-5 text-blue-700" />
                  </div>
                  <input
                    type="url"
                    id="linkedin"
                    value={settings.social.linkedin}
                    onChange={(e) => handleChange('social', 'linkedin', e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="https://linkedin.com/company/yourcompany"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* SEO Settings */}
          {activeTab === 'seo' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700">
                  Default Meta Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="metaTitle"
                    value={settings.seo.metaTitle}
                    onChange={(e) => handleChange('seo', 'metaTitle', e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Recommended length: 50-60 characters
                </p>
              </div>

              <div>
                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">
                  Default Meta Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="metaDescription"
                    rows={3}
                    value={settings.seo.metaDescription}
                    onChange={(e) => handleChange('seo', 'metaDescription', e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Recommended length: 150-160 characters
                </p>
              </div>

              <div>
                <label htmlFor="googleAnalyticsId" className="block text-sm font-medium text-gray-700">
                  Google Analytics ID
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="googleAnalyticsId"
                    value={settings.seo.googleAnalyticsId}
                    onChange={(e) => handleChange('seo', 'googleAnalyticsId', e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Email Settings */}
          {activeTab === 'email' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="smtpHost" className="block text-sm font-medium text-gray-700">
                    SMTP Host
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="smtpHost"
                      value={settings.email.smtpHost}
                      onChange={(e) => handleChange('email', 'smtpHost', e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="smtp.example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="smtpPort" className="block text-sm font-medium text-gray-700">
                    SMTP Port
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="smtpPort"
                      value={settings.email.smtpPort}
                      onChange={(e) => handleChange('email', 'smtpPort', e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="587"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="smtpUser" className="block text-sm font-medium text-gray-700">
                    SMTP Username
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="smtpUser"
                      value={settings.email.smtpUser}
                      onChange={(e) => handleChange('email', 'smtpUser', e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="user@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="smtpPassword" className="block text-sm font-medium text-gray-700">
                    SMTP Password
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      id="smtpPassword"
                      value={settings.email.smtpPassword}
                      onChange={(e) => handleChange('email', 'smtpPassword', e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="••••••••••••"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
                    Sender Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="senderEmail"
                      value={settings.email.senderEmail}
                      onChange={(e) => handleChange('email', 'senderEmail', e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="noreply@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
                    Sender Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="senderName"
                      value={settings.email.senderName}
                      onChange={(e) => handleChange('email', 'senderName', e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Test Email Configuration
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
