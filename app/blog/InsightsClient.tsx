'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const viewOpts = { once: true, margin: '-60px' } as const;

type Article = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  readTime: number;
  preview: string;
};

const categoryStyle: Record<string, string> = {
  Industry:    'bg-blue-50 text-blue-600 border border-blue-100',
  Engineering: 'bg-violet-50 text-violet-600 border border-violet-100',
  Leadership:  'bg-amber-50 text-amber-700 border border-amber-100',
  Vision:      'bg-emerald-50 text-emerald-700 border border-emerald-100',
};

function CategoryPill({ category }: { category: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryStyle[category] ?? 'bg-slate-50 text-slate-600 border border-slate-200'}`}>
      {category}
    </span>
  );
}

const articles: Article[] = [
  {
    slug:     'self-healing-tests-discipline',
    category: 'Engineering',
    title:    'Self-Healing Tests Are Not Magic. They Are Discipline.',
    subtitle: 'Self-healing test automation gets sold as a black box that fixes itself. The teams getting real value from it treat it as an engineering discipline with rules, not magic.',
    readTime: 5,
    preview:  'Self-healing testing is usually pitched with the same promise: your tests stop breaking. That promise is real, but it is incomplete. Self-healing does not mean the system heals itself without judgment.',
  },
  {
    slug:     'third-era-software-quality',
    category: 'Industry',
    title:    'The Third Era of Software Quality Has Already Begun',
    subtitle: 'Manual testing gave us process. Automation gave us speed. Neither gave us confidence. Here is what the third era gets right.',
    readTime: 6,
    preview:  'Every major shift in software engineering follows the same arc. A model emerges that solves the problems of its time. It scales well, becomes standard practice, and eventually becomes the ceiling. The teams that recognise the ceiling early are the ones that define what comes next.',
  },
  {
    slug:     'flaky-tests-system-signal',
    category: 'Engineering',
    title:    'Flaky Tests Are Not a Testing Problem',
    subtitle: 'Flakiness is a signal about system behaviour, not test quality. Most teams fix the wrong thing.',
    readTime: 5,
    preview:  'The common response to flaky tests is to fix them or delete them. Retry logic is added. Timeouts are extended. The test is quarantined. None of these responses address what the flakiness is actually signalling.',
  },
  {
    slug:     'test-suite-maintenance-debt',
    category: 'Engineering',
    title:    'The Maintenance Debt Hidden in Every Test Suite',
    subtitle: 'The true cost of a test suite is not the time to write it but the time to keep it current. Most teams do not account for this.',
    readTime: 6,
    preview:  'The conversation about test suites almost always focuses on coverage. How much of the codebase is exercised. What percentage of critical paths are tested. Coverage is the wrong metric.',
  },
  {
    slug:     'test-coverage-confidence',
    category: 'Engineering',
    title:    'Why High Test Coverage Does Not Mean High Confidence',
    subtitle: 'Coverage metrics are easy to measure and hard to trust. The gap between what they promise and what they deliver is where most production incidents live.',
    readTime: 5,
    preview:  'There is a moment familiar to most engineering leaders. A major incident occurs. The post-mortem begins. Someone checks the test coverage for the affected area. It is 87%. The room goes quiet. This is not an edge case. It is the rule.',
  },
  {
    slug:     'ai-generated-code-quality',
    category: 'Industry',
    title:    'AI-Generated Code Changes Everything About Software Quality',
    subtitle: 'When the volume of code produced exceeds what human review can process, the quality model must change. Most engineering teams are not ready for this.',
    readTime: 7,
    preview:  'In 2024, GitHub reported that more than 40% of code written in Copilot-enabled environments was AI-generated. That number is rising. More code, written faster, by a process that does not understand the system it is modifying.',
  },
  {
    slug:     'qa-as-phase-cost',
    category: 'Engineering',
    title:    'The Real Cost of Treating QA as a Phase',
    subtitle: 'When quality is a gate at the end of delivery, the entire engineering organisation pays the price. The numbers are larger than most teams realise.',
    readTime: 5,
    preview:  'Quality assurance as a phase made sense when software was built in long cycles with clear handoff points. Modern delivery does not work that way. When a team ships multiple times a day, a quality gate at the end is not a safety mechanism.',
  },
  {
    slug:     'scaling-quality-mistakes',
    category: 'Leadership',
    title:    'What Engineering Leaders Get Wrong About Scaling Quality',
    subtitle: 'Hiring more QA engineers is the most common response to a quality problem. It is also the least effective one at scale.',
    readTime: 6,
    preview:  'When a quality problem surfaces in a fast-growing engineering organisation, the instinct is to staff the solution. More testers, more reviewers, more process. It is a reasonable response. It is also a signal that the organisation is scaling the wrong model.',
  },
  {
    slug:     'autonomous-quality-infrastructure',
    category: 'Vision',
    title:    'Autonomous Quality Is Not a Feature. It Is Infrastructure.',
    subtitle: 'The engineering teams that will define the next decade are already treating quality intelligence as foundational, not optional.',
    readTime: 4,
    preview:  'There is a difference between a team that has quality tooling and a team that has quality infrastructure. Tooling is selected, configured, and maintained. Infrastructure is foundational, always present, and trusted by default.',
  },
];

const [hero, ...grid] = articles;

function ReadArrow() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
    </svg>
  );
}

export function InsightsClient() {
  return (
    <main className="min-h-screen">

      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto space-y-6"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-slate-400 font-medium">
            Insights
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Thinking on the future of{' '}
            <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              software quality.
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Perspectives on where the QA industry is heading, what modern engineering teams
            are getting wrong, and what the next standard looks like.
          </motion.p>
        </motion.div>
      </section>

      {/* ── HERO ARTICLE ─────────────────────────────────────────────────── */}
      <section className="px-6 pb-6 max-w-5xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts}>
          <motion.div variants={fadeUp}>
            <Link href={`/blog/${hero.slug}`} className="block group">
              <motion.article
                whileHover={{ scale: 1.015, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="bg-gradient-to-br from-white to-blue-50/30 border border-blue-100 rounded-2xl p-10 md:p-12 shadow-sm hover:shadow-[0_8px_40px_rgba(58,123,255,0.10)] hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CategoryPill category={hero.category} />
                  <span className="text-slate-400 text-sm">{hero.readTime} min read</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug mb-4 group-hover:text-[#3A7BFF] transition-colors">
                  {hero.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-5 max-w-3xl">
                  {hero.subtitle}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-3xl line-clamp-2">
                  {hero.preview}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A7BFF]">
                  Read article
                  <ReadArrow />
                </span>
              </motion.article>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ARTICLE GRID ─────────────────────────────────────────────────── */}
      <section className="px-6 pb-28 max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewOpts}
          className="grid md:grid-cols-2 gap-5"
        >
          {grid.map(article => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
              <motion.article
                variants={fadeUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="h-full bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-[0_4px_28px_rgba(58,123,255,0.08)] transition-colors flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <CategoryPill category={article.category} />
                  <span className="text-slate-400 text-xs">{article.readTime} min read</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#3A7BFF] transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                  {article.subtitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-2">
                  {article.preview}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A7BFF] mt-auto">
                  Read article
                  <ReadArrow />
                </span>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </section>

    </main>
  );
}
