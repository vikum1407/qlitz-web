'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import Year from '@/components/Year';

export function ConditionalSiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDocs  = pathname.startsWith('/docs');
  const isAdmin = pathname.startsWith('/admin');

  if (isDocs || isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />

      <main className="pt-20">
        <PageTransition>{children}</PageTransition>
      </main>

      <footer className="border-t border-slate-200 mt-0 py-12 bg-slate-50 text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="space-y-3">
            <p className="text-base font-semibold text-slate-900">Qlitz</p>
            <p className="text-xs text-slate-400">
              AI-powered quality intelligence for modern engineering teams.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Product</p>
            <a href="/product" className="block hover:text-slate-900 transition">Overview</a>
            <a href="/vision" className="block hover:text-slate-900 transition">Vision</a>
            <a href="/approach" className="block hover:text-slate-900 transition">Approach</a>
            <a href="/docs" className="block hover:text-slate-900 transition">Docs</a>
            <a href="/blog" className="block hover:text-slate-900 transition">Insights</a>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Company</p>
            <a href="/about" className="block hover:text-slate-900 transition">About</a>
            <a href="/contact" className="block hover:text-slate-900 transition">Contact</a>
            <a
              href="https://www.linkedin.com/company/qlitz"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-slate-900 transition"
            >
              LinkedIn
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Legal</p>
            <a href="/privacy" className="block hover:text-slate-900 transition">Privacy</a>
            <a href="/terms" className="block hover:text-slate-900 transition">Terms</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© <Year /> Qlitz. All rights reserved.</p>
          <p>Built for teams who care about quality.</p>
        </div>
      </footer>
    </>
  );
}
