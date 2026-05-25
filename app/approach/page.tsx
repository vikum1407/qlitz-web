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

const layers = [
  {
    num:   '01',
    title: 'Behavioural Intelligence',
    body:  'Understanding how a system actually behaves — not just how it was designed to behave. This means analysing real execution patterns, identifying divergence from expected behaviour, and surfacing signals that indicate emerging risk before failure occurs. The goal is early awareness, not post-incident analysis.',
  },
  {
    num:   '02',
    title: 'Structural Integrity',
    body:  'Software architecture has quality properties that exist independently of any individual feature or test case. Complexity concentrations, coupling patterns, dependency risk, and change velocity all create systemic fragility that standard testing cannot detect. Qlitz analyses the structure of systems — not just their output.',
  },
  {
    num:   '03',
    title: 'Execution Confidence',
    body:  'Validation at scale requires infrastructure that matches the sophistication of the systems being validated. Distributed execution, intelligent orchestration, and environment fidelity are not implementation details — they are the difference between a quality signal that can be trusted and one that cannot.',
  },
  {
    num:   '04',
    title: 'Continuous Signal',
    body:  'Quality is not a point-in-time measurement. It is a continuous property of a living system. Qlitz is designed to provide a persistent, current, and trustworthy quality signal — one that engineering teams can rely on at any point in the delivery cycle, not just at the gate before release.',
  },
];

const principles = [
  {
    title: 'Scalability is not an afterthought',
    body:  'Quality infrastructure that cannot operate at the scale of modern distributed systems is not quality infrastructure for modern teams. Qlitz is architected for the volume, velocity, and variability of real engineering environments — not idealised conditions.',
  },
  {
    title: 'Integration must be seamless',
    body:  'A quality platform that sits outside the engineering workflow will always be treated as optional. Qlitz is designed to integrate at the points where engineering decisions are made — in the pipeline, in the development environment, in the delivery process.',
  },
  {
    title: 'Trust requires transparency',
    body:  'Engineering teams cannot act on a quality signal they do not understand. Every insight Qlitz surfaces is grounded in observable evidence — not black-box scoring. Teams should always know why a risk is flagged, what the evidence is, and what the appropriate response looks like.',
  },
  {
    title: 'Intelligence compounds over time',
    body:  'A platform that requires the same configuration and maintenance investment indefinitely provides diminishing returns. Qlitz is designed to become more effective as it learns — building a model of system behaviour that improves with every deployment, every incident, every change.',
  },
];

export default function ApproachPage() {
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
            Our Approach
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              Intelligence-first.
            </span>
            <br />
            <span className="text-slate-900">Engineering-grade. Built for the scale of modern software.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Qlitz is not a testing tool with AI features added. It is a quality intelligence
            platform designed from first principles — for the complexity, velocity, and consequence
            of software engineering in 2026 and beyond.
          </motion.p>
        </motion.div>
      </section>

      {/* ── SECTION 2 · FOUNDING PRINCIPLE ──────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Where We Start
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
              Understanding systems deeply is more valuable than covering them broadly.
            </motion.h2>
            {[
              'The conventional approach to software quality optimises for coverage — how much of the codebase is exercised by tests, how many scenarios are validated, how many checks pass before a release. Coverage is measurable, reportable, and easy to track. It is also a poor proxy for actual reliability.',
              'A system can have high coverage and still fail in production — because real failures do not follow the paths that were anticipated when tests were written. They emerge from the intersection of conditions, from edge cases in distributed systems, from load patterns nobody modelled, from the behaviour of third-party dependencies under stress.',
              'Qlitz approaches quality differently. The primary question is not "how much have we tested?" — it is "how well do we understand this system?"',
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
                Understanding, not volume, is the foundation on which genuine confidence is built.
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 · FOUR LAYERS ──────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts} className="mb-14">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              How We Think About Quality
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
              Quality intelligence operates across four dimensions.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 max-w-2xl leading-relaxed">
              Reliable software does not fail at a single point — and it cannot be protected at a single layer.
              Qlitz is built around a multi-dimensional model of quality that spans the full engineering surface.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="space-y-4"
          >
            {layers.map(layer => (
              <motion.div
                key={layer.num}
                variants={fadeUp}
                className="flex gap-6 p-7 bg-white border border-slate-200 rounded-2xl hover:shadow-[0_4px_24px_rgba(58,123,255,0.07)] hover:border-blue-200 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_14px_rgba(138,58,255,0.25)]">
                  {layer.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{layer.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{layer.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4 · WHAT THIS REPLACES ──────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              A Structural Shift
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900">
              Not a better version of the old approach. A different one.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Left — old */}
            <motion.div variants={fadeUp} className="bg-white border border-slate-200 rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-slate-300 inline-block" />
                The Old Assumption
              </p>
              {[
                'Most quality tooling on the market today follows the same underlying model — define scenarios, automate execution, report results. The tools have become faster and more feature-rich, but the model has not changed.',
                'The implicit assumption is still that humans can anticipate the conditions under which software will fail, and that writing tests for those conditions is sufficient.',
                'That assumption breaks down at scale. It breaks down in distributed systems. It breaks down when release velocity outpaces the capacity to maintain test suites.',
              ].map((para, i) => (
                <p key={i} className="text-sm text-slate-400 leading-relaxed mb-4">{para}</p>
              ))}
            </motion.div>

            {/* Right — Qlitz */}
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-blue-50/60 to-purple-50/40 border border-blue-100 rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3A7BFF] flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#3A7BFF] inline-block" />
                The Qlitz Approach
              </p>
              {[
                'Qlitz replaces the assumption. Quality intelligence does not depend on humans pre-defining every failure mode.',
                'It builds understanding from behaviour, learns from change, and provides confidence that is proportional to actual system knowledge — not test count.',
                'The question shifts from "what did we test?" to "what do we understand?" — and the confidence that follows is grounded in evidence, not enumeration.',
              ].map((para, i) => (
                <p key={i} className="text-sm text-slate-700 leading-relaxed mb-4">{para}</p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5 · ENGINEERING PRINCIPLES ──────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              How We Build
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900">
              The platform itself is held to the standard we set for software quality.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="grid md:grid-cols-2 gap-6"
          >
            {principles.map(p => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-[0_4px_24px_rgba(58,123,255,0.07)] hover:border-blue-200 transition-all"
              >
                <h3 className="text-base font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6 · WHO THIS IS FOR ──────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              The Right Fit
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
              Built for teams where software quality is a strategic priority.
            </motion.h2>
            {[
              'Qlitz is not the right platform for every team. It is built for engineering organisations that have moved beyond viewing quality as a compliance exercise — and have started treating it as a competitive differentiator.',
              'These are teams operating at a pace where manual quality processes have become a constraint. Teams managing distributed systems where the surface area of failure exceeds what test suites can cover. Teams where an undetected production incident has material consequences — not just technical ones.',
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="leading-relaxed text-slate-600 mb-5">
                {para}
              </motion.p>
            ))}
            <motion.p variants={fadeUp} className="text-lg font-semibold text-slate-900 leading-relaxed">
              If your organisation has reached the point where the old model of quality assurance is visibly insufficient, Qlitz is designed for exactly that moment.
            </motion.p>
          </motion.div>
        </div>
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
            A different approach to quality. Built for where software is going.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-10">
            We are in early access. If your team is operating at the edge of what conventional quality
            tooling can support, we want to hear from you.
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
              Learn About Our Vision
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
