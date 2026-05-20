'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDEBAR_NAV, VERSIONS, DEFAULT_VERSION, type Version } from '../_config/sidebar';
import type { NavItem } from '../_config/sidebar';

interface PageEntry extends NavItem {
  section: string;
}

function flattenNav(version: Version): PageEntry[] {
  return SIDEBAR_NAV[version].flatMap((section) =>
    section.items.map((item) => ({ ...item, section: section.title })),
  );
}

export function PrevNextLinks() {
  const pathname = usePathname();
  const version =
    (VERSIONS.find((v) => pathname.startsWith(`/docs/${v}`)) ??
      DEFAULT_VERSION) as Version;

  const pages = flattenNav(version);
  const currentIndex = pages.findIndex((p) => p.href === pathname);
  if (currentIndex === -1) return null;

  const prev = pages[currentIndex - 1] ?? null;
  const next = pages[currentIndex + 1] ?? null;
  if (!prev && !next) return null;

  return (
    <nav className="mt-16 flex items-stretch justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex max-w-xs flex-col gap-1 rounded-lg border border-slate-200 px-5 py-4 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:hover:border-blue-800 dark:hover:bg-blue-950"
        >
          <span className="text-xs text-slate-400 transition-colors group-hover:text-blue-500 dark:text-slate-500">
            ← Previous
          </span>
          <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-700 dark:text-slate-200 dark:group-hover:text-blue-400">
            {prev.title}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">{prev.section}</span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group ml-auto flex max-w-xs flex-col items-end gap-1 rounded-lg border border-slate-200 px-5 py-4 text-right transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:hover:border-blue-800 dark:hover:bg-blue-950"
        >
          <span className="text-xs text-slate-400 transition-colors group-hover:text-blue-500 dark:text-slate-500">
            Next →
          </span>
          <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-700 dark:text-slate-200 dark:group-hover:text-blue-400">
            {next.title}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">{next.section}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
