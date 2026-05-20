import { DocsSidebar } from './_components/DocsSidebar';
import { DocsTopNav } from './_components/DocsTopNav';
import { TableOfContents } from './_components/TableOfContents';
import { PrevNextLinks } from './_components/PrevNextLinks';
import { ThemeProvider } from './_components/ThemeProvider';
import { Breadcrumb } from './_components/Breadcrumb';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <DocsTopNav />
        <div className="flex pt-16">
          <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 overflow-y-auto border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <DocsSidebar />
          </aside>

          <div className="ml-72 flex flex-1 min-w-0">
            <main className="flex-1 min-w-0">
              <div id="doc-content" className="mx-auto max-w-3xl px-10 py-10">
                <Breadcrumb />
                {children}
                <PrevNextLinks />
              </div>
            </main>

            <aside className="hidden xl:block w-56 shrink-0 py-10 pr-8">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
