'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Fuse from 'fuse.js';
import { SEARCH_INDEX, type SearchItem } from '../_config/search';

const fuse = new Fuse(SEARCH_INDEX, {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'section', weight: 1 },
    { name: 'description', weight: 2 },
    { name: 'keywords', weight: 1 },
  ],
  threshold: 0.35,
  includeScore: true,
});

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const results: SearchItem[] =
    query.length > 1
      ? fuse.search(query).slice(0, 8).map((r) => r.item)
      : [];

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery('');
  }, []);

  const handleSelect = useCallback(
    (item: SearchItem) => {
      router.push(item.href);
      handleClose();
    },
    [router, handleClose],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        open ? handleClose() : handleOpen();
      }
      if (e.key === 'Escape' && open) handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, handleOpen, handleClose]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    }
    if (e.key === 'Enter' && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-400 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-200"
      >
        <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Search</span>
        <kbd className="ml-1 hidden rounded bg-slate-200 px-1.5 py-0.5 font-mono text-xs text-slate-400 sm:inline dark:bg-slate-700 dark:text-slate-500">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm dark:bg-black/60"
              onClick={handleClose}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.15 }}
              className="fixed left-1/2 top-24 z-50 w-full max-w-xl -translate-x-1/2 px-4"
            >
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center border-b border-slate-200 px-4 dark:border-slate-700">
                  <svg className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search documentation..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={onKeyDown}
                    className="w-full bg-transparent py-4 pl-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder-slate-500"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="shrink-0 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                {query.length > 1 && results.length === 0 && (
                  <div className="px-4 py-10 text-center text-sm text-slate-400 dark:text-slate-500">
                    No results for{' '}
                    <span className="font-medium text-slate-600 dark:text-slate-300">"{query}"</span>
                  </div>
                )}

                {query.length <= 1 && (
                  <div className="px-4 py-10 text-center text-sm text-slate-400 dark:text-slate-500">
                    Start typing to search the docs...
                  </div>
                )}

                {results.length > 0 && (
                  <ul className="max-h-80 overflow-y-auto py-2">
                    {results.map((item, i) => (
                      <li key={item.href}>
                        <button
                          className={`w-full px-4 py-2.5 text-left transition-colors ${
                            i === selectedIndex
                              ? 'bg-blue-50 dark:bg-blue-950'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(i)}
                        >
                          <p className="text-xs font-semibold uppercase tracking-wide text-blue-500 dark:text-blue-400">
                            {item.section}
                          </p>
                          <p
                            className={`text-sm font-medium ${
                              i === selectedIndex
                                ? 'text-blue-700 dark:text-blue-300'
                                : 'text-slate-900 dark:text-slate-100'
                            }`}
                          >
                            {item.title}
                          </p>
                          <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                            {item.description}
                          </p>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center gap-4 border-t border-slate-100 px-4 py-2 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
                  <span><kbd className="font-mono">↑↓</kbd> navigate</span>
                  <span><kbd className="font-mono">↵</kbd> open</span>
                  <span><kbd className="font-mono">Esc</kbd> close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
