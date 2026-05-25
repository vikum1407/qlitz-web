'use client';

import { useState } from 'react';
import Link from 'next/link';

export function WaitlistForm() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      const json = await res.json() as { error?: string };
      if (!res.ok) {
        setError(json.error || 'Something went wrong. Please try again.');
      } else {
        setSuccess(true);
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF] items-center justify-center mb-6 shadow-[0_0_24px_rgba(138,58,255,0.3)]">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">You're on the list!</h3>
        <p className="text-slate-500 mb-2">We'll reach out as soon as early access opens.</p>
        <p className="text-slate-400 text-sm mb-8">Check your inbox. We've sent you a confirmation.</p>
        <Link
          href="/"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_18px_rgba(138,58,255,0.25)]"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name</label>
        <input
          type="text"
          placeholder="Jane Smith"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#3A7BFF] focus:ring-1 focus:ring-[#3A7BFF] outline-none transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Work email</label>
        <input
          type="email"
          placeholder="jane@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#3A7BFF] focus:ring-1 focus:ring-[#3A7BFF] outline-none transition"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_18px_rgba(138,58,255,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Joining…' : 'Join the Waitlist'}
      </button>
      <p className="text-xs text-slate-400 text-center">No spam. We'll only contact you about early access.</p>
    </form>
  );
}
