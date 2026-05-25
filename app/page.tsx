'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden:   { opacity: 0, y: 22 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const viewOpts = { once: true, margin: '-80px' } as const;

// ─── data ────────────────────────────────────────────────────────────────────

const stats = [
  {
    value: '$2.4T',
    label: 'Estimated annual global cost of poor software quality — exceeding the GDP of most nations.',
    source: 'NIST / CISQ',
  },
  {
    value: '83%',
    label: 'Of critical production failures occur in systems that passed all defined test criteria.',
    source: 'Passing tests ≠ ensuring reliability',
  },
  {
    value: '10×',
    label: 'The rate at which software system complexity is growing compared to the evolution of quality tooling.',
    source: 'Industry analysis',
  },
];

const comparisonRows = [
  { old: 'Quality is validated at the end of delivery',      next: 'Quality is woven into every stage of engineering'          },
  { old: 'Tests are written to cover known scenarios',        next: 'Intelligence surfaces risks that tests cannot anticipate'  },
  { old: 'QA is a team, a phase, and a gate',                next: 'Quality is a system property, not a process step'          },
  { old: 'Reliability is measured after the fact',            next: 'Confidence is built before code ships'                     },
  { old: 'Complexity is managed manually',                    next: 'Complexity is understood autonomously'                     },
];

const beliefs = [
  {
    num:   '01',
    title: 'Quality is a system property, not a department.',
    body:  'Reliability cannot be bolted on at the end of a delivery cycle. It must be understood at the architecture level, measured continuously, and owned by the entire engineering organisation.',
  },
  {
    num:   '02',
    title: 'Intelligence should replace volume, not add to it.',
    body:  'More tests do not mean more confidence. What engineering teams need is deeper understanding of system behaviour — the kind that only emerges from analysing patterns, not counting assertions.',
  },
  {
    num:   '03',
    title: 'The next generation of software quality will be autonomous.',
    body:  'Human expertise will always matter. But the scale, speed, and complexity of modern software demands that the quality layer itself be capable of reasoning, learning, and acting — not just reporting.',
  },
];

// ─── page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── SECTION 1 · HERO ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-28 px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-7"
        >
          <motion.p variants={fadeUp} className="text-xs md:text-sm uppercase tracking-[0.22em] text-slate-400 font-medium">
            The Next Era of Software Quality
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              Quality Intelligence
            </span>
            <br />
            <span className="text-slate-900">for the Age of Complex Software</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Modern engineering teams ship faster, across more systems, with greater complexity
            than any previous generation. Qlitz is building the intelligence layer that ensures
            reliability keeps pace — without slowing delivery.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/waitlist"
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_22px_rgba(138,58,255,0.3)]"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/vision"
              className="px-8 py-3.5 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition"
            >
              Explore Our Vision
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 2 · INDUSTRY INFLECTION POINT ───────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              The State of Software Quality
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
              The tools built for yesterday cannot scale to today.
            </motion.h2>
            {[
              'For decades, software quality relied on a straightforward premise — write more tests, catch more bugs. That model worked when systems were smaller, release cycles were measured in quarters, and complexity was contained.',
              'It no longer does.',
              'AI-generated code, distributed architectures, microservices at scale, and continuous delivery pipelines have fundamentally changed what software is — and what it takes to trust it. The volume and velocity of software produced today exceeds what any manual oversight model can meaningfully validate.',
              'The industry is not facing a tooling gap. It is facing a structural shift in how quality must be understood, enforced, and measured. Qlitz is built for that shift.',
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`leading-relaxed text-slate-600 ${i < 3 ? 'mb-5' : ''} ${para === 'It no longer does.' ? 'font-semibold text-slate-900 text-lg' : ''}`}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 · STATS ────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Why This Matters
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900">
              The cost of the old model is no longer acceptable.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="grid md:grid-cols-3 gap-6"
          >
            {stats.map(s => (
              <motion.div
                key={s.value}
                variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-[0_4px_24px_rgba(58,123,255,0.08)] hover:border-blue-200 transition-all"
              >
                <p className="text-5xl font-extrabold bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent mb-4">
                  {s.value}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{s.label}</p>
                <p className="text-xs text-slate-400 italic">{s.source}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4 · PARADIGM SHIFT ───────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              A New Standard
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From reactive testing to autonomous quality intelligence.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 max-w-xl mx-auto">
              The shift is not about doing more of the same. It is about operating from a fundamentally different model.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
          >
            {/* Header row */}
            <div className="grid grid-cols-2">
              <div className="px-8 py-4 bg-slate-100 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
                The Conventional Model
              </div>
              <div className="px-8 py-4 bg-gradient-to-r from-[#3A7BFF]/10 to-[#8A3AFF]/10 text-xs font-bold uppercase tracking-[0.18em] text-[#3A7BFF] flex items-center gap-2 border-l border-blue-100">
                <span className="w-2 h-2 rounded-full bg-[#3A7BFF] inline-block" />
                The Qlitz Model
              </div>
            </div>

            {/* Data rows */}
            {comparisonRows.map((row, i) => (
              <motion.div
                key={i}
                variants={fadeLeft}
                className="grid grid-cols-2 border-t border-slate-100"
              >
                <div className="px-8 py-5 text-sm text-slate-400 leading-relaxed bg-white flex items-start gap-3">
                  <span className="mt-1 text-slate-300 flex-shrink-0">✕</span>
                  {row.old}
                </div>
                <div className="px-8 py-5 text-sm font-medium text-slate-700 leading-relaxed bg-blue-50/40 border-l border-blue-100 flex items-start gap-3">
                  <span className="mt-1 text-[#3A7BFF] flex-shrink-0">✓</span>
                  <span className="text-slate-800">{row.next}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5 · BELIEFS ──────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Our Position
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900">
              Three beliefs that define how we build.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="grid md:grid-cols-3 gap-6"
          >
            {beliefs.map(b => (
              <motion.div
                key={b.num}
                variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-[0_4px_24px_rgba(58,123,255,0.08)] hover:border-blue-200 transition-all"
              >
                <p className="text-3xl font-extrabold bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent mb-5">
                  {b.num}
                </p>
                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6 · FINAL CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewOpts}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The standard is changing. Be part of defining it.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-10">
            Qlitz is working with engineering teams who believe quality is a competitive advantage —
            not an overhead. If that describes your organisation, we'd like to build this with you.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/waitlist"
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_22px_rgba(138,58,255,0.3)]"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/vision"
              className="px-8 py-3.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:border-slate-400 hover:bg-white transition"
            >
              Read Our Vision
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
