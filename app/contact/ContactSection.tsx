'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const handleSuccess = (name: string, email: string) => {
    setSenderName(name);
    setSenderEmail(email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-2xl mx-auto text-center">

          {/* Icon */}
          <div className="mx-auto mb-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF] flex items-center justify-center shadow-[0_0_32px_rgba(138,58,255,0.35)]">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              Message Received!
            </span>
          </h2>

          {/* Personalised message */}
          <p className="text-lg text-slate-600 leading-relaxed mb-3">
            Thank you for reaching out, <span className="font-semibold text-slate-800">{senderName}</span>.
            Our team has received your message and will get back to you at{' '}
            <span className="font-semibold text-[#3A7BFF]">{senderEmail}</span> as soon as possible.
          </p>
          <p className="text-slate-500 mb-10">
            We truly appreciate you taking the time to contact us. Your inquiry is important to us and
            we aim to respond within one business day.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] mx-auto mb-10" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_18px_rgba(138,58,255,0.3)]"
            >
              Back to Home
            </Link>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 rounded-lg border border-slate-200 text-slate-600 font-semibold hover:border-slate-300 hover:text-slate-900 transition"
            >
              Send Another Message
            </button>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 border-t border-slate-200">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

        {/* CONTACT INFO */}
        <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Get in Touch</h3>
          <p className="text-slate-600 mb-6">
            Reach out to our team and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-slate-600">
            <p>📧 info@qlitz.dev</p>
            <p>🌍 Karlstad, Sweden</p>
          </div>
        </div>

        {/* FORM */}
        <ContactForm onSuccess={handleSuccess} />

      </div>
    </section>
  );
}
