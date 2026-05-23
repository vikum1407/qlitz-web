'use client';

import { useState } from 'react';

type Props = {
  onSuccess: (name: string, email: string) => void;
};

export function ContactForm({ onSuccess }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setSending(false);
        return;
      }

      onSuccess(name, email);
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setSending(false);
    }
  };

  return (
    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
      <h3 className="text-2xl font-bold mb-4 text-slate-900">Send a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={sending}
          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#3A7BFF] focus:ring-1 focus:ring-[#3A7BFF] outline-none transition disabled:opacity-60"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={sending}
          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#3A7BFF] focus:ring-1 focus:ring-[#3A7BFF] outline-none transition disabled:opacity-60"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={sending}
          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#3A7BFF] focus:ring-1 focus:ring-[#3A7BFF] outline-none transition disabled:opacity-60"
        />

        {errorMsg && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_18px_rgba(138,58,255,0.25)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {sending ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending…
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
