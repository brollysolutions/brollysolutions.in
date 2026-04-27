"use client";

import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate a network request to the backend (1.5 seconds)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form Submitted to Backend:", formData);
      
      // Trigger the success toast notification
      toast.success("Message sent! We will be in touch shortly.");
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 border rounded-xl bg-brand-dark border-gray-800 shadow-lg">
      <div className="space-y-6">
        
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 text-white transition-colors border rounded-md bg-brand-black border-gray-700 focus:outline-none focus:border-brand-gold disabled:opacity-50"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 text-white transition-colors border rounded-md bg-brand-black border-gray-700 focus:outline-none focus:border-brand-gold disabled:opacity-50"
            placeholder="john@example.com"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows={5}
            className="w-full px-4 py-3 text-white transition-colors border rounded-md bg-brand-black border-gray-700 focus:outline-none focus:border-brand-gold resize-none disabled:opacity-50"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-brand-black transition-all duration-300 bg-brand-gold rounded-md hover:bg-brand-gold-hover hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <>
              {/* SVG Loading Spinner */}
              <svg className="w-5 h-5 mr-3 text-brand-black animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

      </div>
    </form>
  );
}