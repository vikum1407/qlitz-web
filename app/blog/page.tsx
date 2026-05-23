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
      {/* HERO */}
      <section className="pt-28 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wide mb-6">
          Thought Leadership
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Insights
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Ideas about AI, the future of quality engineering, and what intelligent
          automation really means for software teams.
        </p>
      </section>

      {/* POSTS */}
      <section className="pb-24 px-6 border-t border-slate-200 pt-16">
        <div className="max-w-3xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-slate-400 py-16">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-5">
              {posts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
