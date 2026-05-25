'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const viewOpts = { once: true, margin: '-80px' } as const;

const convictions = [
  {
    num:   '01',
    title: 'Quality is an engineering responsibility, not a quality assurance one.',
    body:  'It must be embedded in every architecture decision and delivery process — not delegated to a separate function at the end of the cycle.',
  },
  {
    num:   '02',
    title: 'Confidence cannot be manufactured — it must be earned.',
    body:  'Green builds and coverage numbers are signals. Genuine confidence comes from understanding how a system behaves under real conditions.',
  },
  {
    num:   '03',
    title: 'Modern software scale demands autonomous quality infrastructure.',
    body:  'No team can maintain comprehensive understanding of a large, fast-moving distributed system through manual processes alone. Autonomous intelligence is not a luxury — it is the necessary infrastructure.',
  },
  {
    num:   '04',
    title: 'Accessibility matters as much as capability.',
    body:  'The most sophisticated quality intelligence has limited impact if only large organisations can access it. We are building for every serious engineering team.',
  },
];

export default function AboutPage() {
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
            About Qlitz
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              Built by engineers
            </span>
            <br />
            <span className="text-slate-900">who lived the problem.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Qlitz was not founded on a market opportunity. It was founded on a frustration —
            that the tools available for software quality have not kept pace with the software
            they are meant to protect.
          </motion.p>
        </motion.div>
      </section>

      {/* ── SECTION 2 · THE ORIGIN ───────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Where This Started
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">
              Every great engineering team hits the same wall.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-6">
              A team starts small, moves fast, ships confidently. Then the system grows. Services multiply,
              release cycles compress, and the test suite becomes a burden. Coverage metrics rise while
              confidence quietly declines.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-10">
              The conventional response — more QA, more automation, more reviews — addresses the symptom.
              It does not fix the model. The model is structurally limited.
            </motion.p>
            <motion.blockquote
              variants={fadeUp}
              className="pl-6 border-l-4 border-[#3A7BFF] bg-blue-50/50 py-4 pr-4 rounded-r-xl"
            >
              <p className="text-lg font-semibold text-slate-800 leading-relaxed">
                Qlitz exists because we believed there was a better model — and because we thought
                it was worth the hard work of building it.
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 · THE COMPANY ──────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Who We Are
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">
              A focused team with a clear mission.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-6">
              Qlitz is not a DevOps platform. Not a testing tool. Not an observability product with
              quality features added. We are building one thing, with the full depth it deserves —
              an autonomous quality intelligence layer for modern engineering teams.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed">
              We are working closely with a small number of teams who share our conviction that this
              problem matters. That collaboration is not a temporary phase — it is how we intend to build.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4 · CONVICTIONS ──────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts} className="mb-14">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Our Convictions
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-snug">
              The beliefs that shape every decision we make.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 text-sm">
              Not brand values. Working principles.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewOpts}
            className="space-y-px"
          >
            {convictions.map(c => (
              <motion.div
                key={c.num}
                variants={fadeUp}
                className="bg-white border border-slate-200 first:rounded-t-2xl last:rounded-b-2xl p-8 hover:bg-blue-50/30 transition-colors"
              >
                <div className="flex items-start gap-6">
                  <span className="flex-shrink-0 text-2xl font-extrabold bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
                    {c.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{c.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5 · HOW WE WORK ──────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewOpts}>
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
              Our Way of Working
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">
              Close collaboration. Honest feedback. Long-term partnership.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-6">
              Every team we work with has direct access to the people building the platform. That is deliberate.
              The problems we are solving are too specific and too deep to understand from a distance.
            </motion.p>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed">
              The feedback loop between builder and user is one of the most valuable things we have.
              We will not give that up as we scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6 · THE LONG VIEW ────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewOpts}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.22em] text-[#3A7BFF] font-semibold mb-4">
            The Long View
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">
            We are not building a product.<br />We are building a new standard.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed mb-10">
            The teams defining software quality expectations today will shape the industry for the
            decade that follows. Qlitz is being built to be part of that definition.
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-2">
            <p className="text-lg font-bold text-slate-900">We are early. The platform is evolving. The standard is being set.</p>
            <p className="text-lg font-bold bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              We are glad you are here for it.
            </p>
          </motion.div>
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
            Work with a team that takes quality as seriously as you do.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-10">
            We are selectively expanding early access to engineering teams ready to operate at
            the next level of software quality. If that is your organisation, we would like to talk.
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
