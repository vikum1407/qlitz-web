import type { MDXComponents } from 'mdx/types';
import type { ReactNode, ReactElement } from 'react';
import { CodeHighlighter } from '@/app/docs/_components/CodeHighlighter';

function slugify(children: ReactNode): string {
  return String(children)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

type CodeChild = ReactElement<{ className?: string; children?: string }>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-2 mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 id={slugify(children)} className="mt-10 mb-4 text-2xl font-semibold text-slate-900 border-b border-slate-200 pb-2 dark:text-slate-100 dark:border-slate-800">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 id={slugify(children)} className="mt-8 mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal pl-6 space-y-2 text-slate-700 dark:text-slate-300">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7 dark:text-slate-300">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors dark:text-blue-400 dark:hover:text-blue-300">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-200">{children}</code>
    ),
    pre: ({ children }) => {
      const child = children as CodeChild;
      const lang = (child?.props?.className ?? '').replace('language-', '') || 'text';
      const code = String(child?.props?.children ?? '').trimEnd();
      return <CodeHighlighter code={code} lang={lang} />;
    },
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 italic text-slate-600 dark:border-blue-400 dark:text-slate-400">{children}</blockquote>
    ),
    table: ({ children }) => (
      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full border-collapse text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-slate-50 dark:bg-slate-800/60">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
        {children}
      </td>
    ),
    ...components,
  };
}
