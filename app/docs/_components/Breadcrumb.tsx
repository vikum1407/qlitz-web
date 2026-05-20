'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDEBAR_NAV, VERSIONS, DEFAULT_VERSION, type Version } from '../_config/sidebar';

export function Breadcrumb() {
  const pathname = usePathname();

  const version =
    (VERSIONS.find((v) => pathname.startsWith(`/docs/${v}`)) ?? DEFAULT_VERSION) as Version;

  const sections = SIDEBAR_NAV[version];
  let currentSection: string | null = null;
  let currentTitle: string | null = null;

  for (const section of sections) {
    const page = section.items.find((item) => item.href === pathname);
    if (page) {
      currentSection = section.title;
      currentTitle = page.title;
      break;
    }
  }

  if (!currentSection || !currentTitle) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm">
      <Link
        href="/docs"
        className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        Docs
      </Link>
      <span className="select-none text-slate-300 dark:text-slate-700">/</span>
      <span className="text-slate-500 dark:text-slate-400">{currentSection}</span>
      <span className="select-none text-slate-300 dark:text-slate-700">/</span>
      <span className="font-medium text-slate-900 dark:text-slate-100">{currentTitle}</span>
    </nav>
  );
}
