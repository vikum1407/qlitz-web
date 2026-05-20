'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDEBAR_NAV, VERSIONS, DEFAULT_VERSION, type Version } from '../_config/sidebar';

export function DocsSidebar() {
  const pathname = usePathname();
  const version =
    (VERSIONS.find((v) => pathname.startsWith(`/docs/${v}`)) ?? DEFAULT_VERSION) as Version;
  const sections = SIDEBAR_NAV[version];

  return (
    <nav className="py-6 px-3">
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          <p className="mb-1.5 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-blue-50 font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-400'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
