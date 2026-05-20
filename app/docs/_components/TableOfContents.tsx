'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface HeadingItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const extract = () => {
      const els = Array.from(
        document.querySelectorAll('#doc-content h2[id], #doc-content h3[id]'),
      );
      setHeadings(
        els.map((el) => ({
          id: el.id,
          text: el.textContent ?? '',
          level: Number(el.tagName[1]) as 2 | 3,
        })),
      );
      setActiveId('');
    };
    const timer = setTimeout(extract, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (headings.length === 0) return;
    const onScroll = () => {
      const scrollY = window.scrollY + 128;
      let current = headings[0]?.id ?? '';
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        On this page
      </p>
      <ul className="space-y-1 border-l border-slate-200 dark:border-slate-800">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block border-l-2 py-0.5 text-sm leading-5 transition-colors ${
                level === 3 ? 'pl-5' : 'pl-3'
              } ${
                activeId === id
                  ? 'border-blue-500 font-medium text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
