"use client";
import React, { useState } from "react";

interface QuoteFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

interface RequestQuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestQuoteForm: React.FC<RequestQuoteFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Reusable styles matching the design system
  const inputStyles = "w-full bg-[#161B22] border border-[#2D333B] rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors";
  const labelStyles = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0D1117] rounded-lg border border-[#21262D] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#21262D]">
          <h2 className="text-2xl font-bold">Request a Quote</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className={labelStyles}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={inputStyles}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelStyles}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={inputStyles}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className={labelStyles}>
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={inputStyles}
              placeholder="Your company name (optional)"
            />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="projectType" className={labelStyles}>
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
                className={inputStyles}
              >
                <option value="">Select project type</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="website-design">Website Design</option>
                <option value="mobile-app">Mobile App Design</option>
                <option value="brand-identity">Brand Identity</option>
                <option value="design-system">Design System</option>
                <option value="consultation">Design Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className={labelStyles}>
                Budget (MAD) *
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                required
                className={inputStyles}
                placeholder="Enter your budget in MAD"
              />
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className={labelStyles}>
              Project Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              required
              className={inputStyles}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (Rush project)</option>
              <option value="1-month">1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-months-plus">6+ months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className={labelStyles}>
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={5}
              className={inputStyles}
              placeholder="Please describe your project, goals, target audience, and any specific requirements or features you have in mind..."
            />
          </div>

          {/* Submit Status */}
          {submitStatus === 'success' && (
            <div className="bg-green-900/30 border border-green-500/40 rounded-lg p-4 text-green-300">
              ✅ Quote request sent successfully! I'll get back to you within 24 hours.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-900/30 border border-red-500/40 rounded-lg p-4 text-red-300">
              ❌ Failed to send quote request. Please try again or contact me directly at saad.mney1@gmail.com
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex items-center justify-center flex-1"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
              <span className="relative px-6 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Quote Request
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};