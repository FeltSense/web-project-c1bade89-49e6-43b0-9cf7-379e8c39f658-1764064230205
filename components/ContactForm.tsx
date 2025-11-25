'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: 'c1bade89-49e6-43b0-9cf7-379e8c39f658',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Let's Start a Conversation
          </h2>
          <p className="font-normal leading-relaxed text-slate-600 text-lg">
            Have a question or ready to get started? We're here to help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email Card */}
            <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                    Email Us
                  </h3>
                  <p className="font-normal leading-relaxed text-slate-600 mb-3">
                    We'll respond within 24 hours
                  </p>
                  <a 
                    href="mailto:hello@company.com" 
                    className="text-slate-600 hover:text-slate-700 font-semibold transition-colors duration-300"
                  >
                    hello@company.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                    Call Us
                  </h3>
                  <p className="font-normal leading-relaxed text-slate-600 mb-3">
                    Mon-Fri from 9am to 6pm
                  </p>
                  <a 
                    href="tel:+15551234567" 
                    className="text-slate-600 hover:text-slate-700 font-semibold transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                    Visit Us
                  </h3>
                  <p className="font-normal leading-relaxed text-slate-600">
                    123 Business Street<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white shadow-lg border border-slate-100 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-slate-900 font-semibold mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-slate-500 focus:ring-slate-500 py-4 px-5 text-slate-900 font-normal transition-all duration-300 disabled:bg-slate-50 disabled:cursor-not-allowed"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-slate-900 font-semibold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-slate-500 focus:ring-slate-500 py-4 px-5 text-slate-900 font-normal transition-all duration-300 disabled:bg-slate-50 disabled:cursor-not-allowed"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-slate-900 font-semibold mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-slate-500 focus:ring-slate-500 py-4 px-5 text-slate-900 font-normal transition-all duration-300 disabled:bg-slate-50 disabled:cursor-not-allowed"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-slate-900 font-semibold mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-slate-500 focus:ring-slate-500 py-4 px-5 text-slate-900 font-normal transition-all duration-300 resize-none disabled:bg-slate-50 disabled:cursor-not-allowed"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'loading' && (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Try Again
                    </>
                  )}
                </button>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="rounded-xl bg-emerald-50 border-2 border-emerald-200 p-5">
                    <p className="text-emerald-700 font-semibold text-center">
                      Thank you for reaching out! We'll get back to you shortly.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="rounded-xl bg-red-50 border-2 border-red-200 p-5">
                    <p className="text-red-700 font-semibold text-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
