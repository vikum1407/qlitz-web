'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const viewOpts = { once: true, margin: '-80px' } as const;

const eras = [
  { label: 'Manual',     desc: 'Human testers, scripted scenarios, linear validation.',   active: false },
  { label: 'Automated',  desc: 'CI pipelines and coverage metrics. Faster, not smarter.', active: false },
  { label: 'Autonomous', desc: 'Systems that understand, learn, anticipate, and act.',      active: true  },
];

const dimensions = [
  {
    icon: '◎',
    title: 'Self-aware systems',
    body: 'Software that understands its own behaviour under real conditions, not just the conditions defined in a test suite. Systems that can distinguish between expected variance and genuine risk, and communicate that distinction clearly to the teams responsible for them.',
  },
  {
    icon: '◈',
    title: 'Continuous confidence',
    body: 'Engineering teams that can ship at any point in their cycle without a quality review bottleneck, because the quality signal is always present, always current, and always trustworthy. Releases that carry a confidence score, not just a green build status.',
  },
  {
    icon: '◇',
    title: 'Intelligence that compounds',
    body: 'A quality layer that gets more effective over time, not one that requires constant maintenance to remain relevant. As the product evolves, the intelligence evolves with it. Every deployment teaches the system more about what good looks like.',
  },
];

export default function VisionPage() {
  return (
    <main className="min-h-screen">

      {/* ── SECTION 1 · HERO ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-28 px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-7"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-slate-400 font-medium">
            Our Vision
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              A world where software quality
            </span>
            <br />
            <span className="text-slate-900">is not enforced, it is inherent.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The most reliable systems in the world are not the most heavily tested. They are the
            most deeply understood. Qlitz is building toward that standard, where quality emerges
            from intelligence, not effort.
          </motion.p>
        </motion.div>
      </section>

      {/* ── SECTION 2 · THE THREE ERAS ───────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Where We Are Heading
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Software quality is entering its third era.
            </motion.h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="grid md:grid-cols-3 gap-0 relative"
          >
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-slate-200 z-0" />

            {eras.map((era, i) => (
              <motion.div key={era.label} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center px-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 font-bold text-sm border-2 transition-all ${
                  era.active
                    ? 'bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF] border-transparent text-white shadow-[0_0_20px_rgba(138,58,255,0.35)]'
                    : 'bg-white border-slate-200 text-slate-400'
                }`}>
                  0{i + 1}
                </div>
                <p className={`text-lg font-bold mb-2 ${era.active ? 'text-[#3A7BFF]' : 'text-slate-400'}`}>
                  {era.label}
                </p>
                <p className={`text-sm leading-relaxed ${era.active ? 'text-slate-700' : 'text-slate-400'}`}>
                  {era.desc}
                </p>
                {era.active && (
                  <span className="mt-3 text-xs font-semibold bg-blue-50 text-[#3A7BFF] border border-blue-100 rounded-full px-3 py-0.5">
                    Where we build
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Era body text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="mt-16 max-w-3xl mx-auto space-y-5"
          >
            {[
              'The first era was manual: human testers, scripted scenarios, and linear validation processes. It was slow, expensive, and fundamentally limited by human bandwidth.',
              'The second era was automated: test frameworks, CI pipelines, and coverage metrics. It brought speed and repeatability, but not intelligence. Automation scaled the wrong model. Faster execution of the same fundamental approach.',
              'The third era is autonomous: systems that understand behaviour, learn from change, anticipate failure, and enforce reliability without requiring human intervention at every step.',
              'Qlitz is building for the third era. Not as an incremental improvement to what exists, but as a rethinking of what quality infrastructure should be.',
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className={`leading-relaxed text-slate-600 ${i === 3 ? 'font-semibold text-slate-900' : ''}`}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 · CORE BELIEF ──────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              The Central Premise
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
              Quality should be a property of the system, not a phase in the process.
            </motion.h2>
            {[
              'Today, most engineering organisations treat quality as something that happens between writing code and shipping it. It is a checkpoint, a review, a gate. The problem with gates is that they are reactive by design. They can only catch what has already been built incorrectly.',
              'A system with quality as an inherent property operates differently. It understands its own behaviour. It surfaces anomalies before they become failures. It learns as the product evolves. It provides confidence continuously, not periodically.',
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="leading-relaxed text-slate-600 mb-5">
                {para}
              </motion.p>
            ))}

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp}
              className="mt-8 pl-6 border-l-4 border-[#3A7BFF] bg-blue-50/50 py-4 pr-4 rounded-r-xl"
            >
              <p className="text-lg font-semibold text-slate-800 leading-relaxed">
                That is what Qlitz is building toward. An engineering environment where releasing
                with confidence is the default, not the exception.
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4 · THREE DIMENSIONS ─────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              The Shape of the Future
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900">
              What autonomous quality looks like in practice.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="grid md:grid-cols-3 gap-6"
          >
            {dimensions.map(d => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-[0_4px_24px_rgba(58,123,255,0.08)] hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3A7BFF]/10 to-[#8A3AFF]/10 flex items-center justify-center mb-5 text-[#3A7BFF] text-lg font-bold border border-blue-100">
                  {d.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{d.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5 · INDUSTRY CONTEXT ─────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Why This Vision, Why Now
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
              The conditions for this shift finally exist.
            </motion.h2>

            {[
              'For most of software engineering history, the infrastructure required to make quality autonomous did not exist at scale. The compute was too expensive, the data was too sparse, and the tooling was too fragmented.',
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="leading-relaxed text-slate-600 mb-5">
                {para}
              </motion.p>
            ))}

            {/* Pull quote line */}
            <motion.p variants={fadeUp} className="text-2xl font-bold text-slate-900 my-8">
              That has changed.
            </motion.p>

            {[
              'Modern cloud infrastructure provides the scale. Large-scale observability platforms provide the data. Advances in applied AI provide the reasoning capability. The missing piece is a platform purpose-built to bring these together in service of software quality, and to make that capability accessible to every engineering team, not just those with the resources to build it themselves.',
              'That is the gap Qlitz exists to close.',
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className={`leading-relaxed mb-5 ${i === 1 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6 · THE LONGER ARC ───────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewOpts}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
            The Bigger Picture
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
            Quality as the foundation of digital trust.
          </motion.h2>
          {[
            'Software is no longer a feature of modern life. It is the infrastructure of it. Healthcare, finance, transportation, communication. Every critical system now runs on code. The reliability of that code is not a product concern. It is a societal one.',
            'Engineering teams carry more responsibility than ever before. The tools they use to uphold that responsibility should match the gravity of the task.',
            'Qlitz is building toward a future where every engineering team, regardless of size or resources, has access to quality intelligence that matches the complexity and consequence of the software they ship.',
          ].map((para, i) => (
            <motion.p key={i} variants={fadeUp} className="leading-relaxed text-slate-600 mb-5 text-lg">
              {para}
            </motion.p>
          ))}
          <motion.p variants={fadeUp} className="text-xl font-bold text-slate-900 mt-8">
            That is the vision. Everything we build points toward it.
          </motion.p>
        </motion.div>
      </section>

      {/* ── SECTION 7 · CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewOpts}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Build the future of quality with us.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-10">
            We are working with engineering leaders who share this belief. That software quality
            deserves a fundamentally better standard. If that resonates, join us.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/waitlist"
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_22px_rgba(138,58,255,0.3)]"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/approach"
              className="px-8 py-3.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:border-slate-400 hover:bg-white transition"
            >
              Explore Our Approach
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
