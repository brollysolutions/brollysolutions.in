import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('message', formData.message);
      if (file) submissionData.append('document', file);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Inquiry submitted successfully. We'll be in touch within 24 hours.", {
        duration: 5000,
      });

      setFormData({ name: '', email: '', message: '' });
      setFile(null);
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-5 py-3.5 text-black bg-white border border-zinc-300 rounded-xl focus:border-brand-gold/60 focus:outline-none transition-colors duration-300 placeholder-zinc-400 text-sm font-normal';

  return (
    <form onSubmit={handleSubmit} className="space-y-7">

      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-mono uppercase tracking-[0.35em] text-brand-gold mb-3 font-semibold">
          Step 01 — Discovery
        </p>
        <h3 className="text-2xl font-bold text-black tracking-tight">
          Tell us about your project
        </h3>
        <p className="text-zinc-700 text-sm font-normal mt-2 leading-relaxed">
          We review every inquiry personally to determine the right approach for your needs.
        </p>
      </div>

      {/* Identity Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-[0.3em] text-black block font-semibold">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-[0.3em] text-black block font-semibold">
            Work Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-xs font-mono uppercase tracking-[0.3em] text-black block font-semibold">
            Project Details
          </label>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-xs font-mono uppercase tracking-[0.25em] text-black hover:text-brand-gold transition-colors duration-300 font-semibold"
          >
            Attach file
          </button>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClass} resize-none leading-relaxed`}
          placeholder="Describe your current stack, the challenge you're facing, and what success looks like..."
        />

        {/* File Indicator */}
        {file && (
          <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 1.5h5.5L10 4v6.5H2V1.5z" stroke="#c29b38" strokeWidth="1" strokeLinejoin="round"/>
                  <path d="M7.5 1.5V4H10" stroke="#c29b38" strokeWidth="1" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-black font-semibold truncate max-w-[180px]">{file.name}</p>
                <p className="text-[10px] text-zinc-500 mt-0.5 font-medium">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setFile(null)}
              className="w-6 h-6 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors text-zinc-400 hover:text-black"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.doc,.docx,.png,.jpg,.zip"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-3">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Submitting inquiry...
          </span>
        ) : (
          'Submit for Strategic Audit'
        )}
      </button>

    </form>
  );
}