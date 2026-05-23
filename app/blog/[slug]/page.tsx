import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostSlugs, getAllPosts, formatDate } from '@/lib/posts';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const all = getAllPosts();
  const post = all.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

type PostModule = {
  default: React.ComponentType;
  meta: { title: string; date: string; description: string };
};

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  let mod: PostModule;
  try {
    mod = await import(`@/content/posts/${slug}.mdx`) as PostModule;
  } catch {
    notFound();
  }

  const { default: Post, meta } = mod;

  const all = getAllPosts();
  const postMeta = all.find(p => p.slug === slug);
  const readTime = postMeta?.readTime ?? 1;

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-12 transition-colors group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5 5-5M18 12H6" />
          </svg>
          Back to Insights
        </Link>

        {/* Date + read time */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-5">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          <span>·</span>
          <span>{readTime} min read</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            {meta.title}
          </span>
        </h1>

        {/* Description lead */}
        <p className="text-lg text-slate-600 leading-relaxed mb-10 pb-10 border-b border-slate-200">
          {meta.description}
        </p>

        {/* MDX content */}
        <article>
          <Post />
        </article>

        {/* Footer CTA */}
        <div className="mt-16 pt-10 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Found this useful? Follow Qlitz on LinkedIn for more insights.
          </p>
          <a
            href="https://www.linkedin.com/company/qlitz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white text-sm font-semibold hover:opacity-90 transition shadow-[0_0_18px_rgba(138,58,255,0.2)]"
          >
            Follow on LinkedIn
          </a>
        </div>

      </div>
    </main>
  );
}
