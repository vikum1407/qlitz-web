'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { VERSIONS, DEFAULT_VERSION } from '../_config/sidebar';
import { SearchModal } from './SearchModal';
import { ThemeToggle } from './ThemeToggle';

export function DocsTopNav() {
  const pathname = usePathname();
  const router = useRouter();

  const currentVersion =
    VERSIONS.find((v) => pathname.startsWith(`/docs/${v}`)) ?? DEFAULT_VERSION;

  function handleVersionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value;
    const updated = pathname.replace(`/docs/${currentVersion}`, `/docs/${next}`);
    router.push(updated);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 transition-colors hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-300"
        >
          Qlitz
        </Link>
        <span className="select-none text-slate-300 dark:text-slate-600">/</span>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Docs</span>
      </div>

      <div className="ml-5">
        <select
          value={currentVersion}
          onChange={handleVersionChange}
          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          {VERSIONS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div className="ml-6">
        <SearchModal />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="/docs/v1/api-reference/overview"
          className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          API
        </Link>
        <Link
          href="/dashboard"
          className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Open App
        </Link>
      </div>
    </header>
  );
}
