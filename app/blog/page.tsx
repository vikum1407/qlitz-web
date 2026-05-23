import Link from 'next/link';
import { getAllPosts, formatDate, type PostMeta } from '@/lib/posts';

export const metadata = {
  title: 'Insights',
  description: 'Ideas about AI, the future of quality engineering, and what intelligent automation really means for software teams.',
};

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="p-7 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-[0_4px_24px_rgba(58,123,255,0.08)] transition-all duration-200">
        <div className="flex items-center gap-2 mb-4 text-xs text-slate-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#3A7BFF] transition-colors leading-snug">
          {post.title}
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
          {post.description}
        </p>
        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[#3A7BFF]">
          Read more
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
          </svg>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6">

        {/* HERO — compact, inline with posts */}
        <div className="pt-28 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-200 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
              Thought Leadership
            </div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              Insights
            </h1>
          </div>
          <p className="text-sm text-slate-500 max-w-xs md:text-right leading-relaxed">
            Ideas on AI, the future of QA, and intelligent automation for engineering teams.
          </p>
        </div>

        {/* POSTS */}
        <section className="pb-24">
          {posts.length === 0 ? (
            <p className="text-center text-slate-400 py-16">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-4">
              {posts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
