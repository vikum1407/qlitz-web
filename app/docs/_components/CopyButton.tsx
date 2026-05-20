'use client';

import { useState } from 'react';

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable (non-https or blocked)
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy code'}
      className={`absolute right-3 top-3 rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-150 ${
        copied
          ? 'bg-green-600 text-white opacity-100'
          : 'bg-slate-700 text-slate-300 opacity-0 group-hover:opacity-100 hover:bg-slate-600 hover:text-white'
      }`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}
