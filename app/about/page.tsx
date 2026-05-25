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

const convictions = [
  {
    num:   '01',
    title: 'Quality is an engineering responsibility, not a quality assurance one.',
    body:  'The separation of "engineering" and "quality assurance" into distinct disciplines was a practical response to a historical constraint. It is no longer the right model. Quality must be owned by the full engineering organisation — embedded in architecture decisions, development practices, and delivery processes — not delegated to a separate function at the end of a cycle.',
  },
  {
    num:   '02',
    title: 'Confidence cannot be manufactured — it must be earned.',
    body:  'Green builds, passing tests, and coverage percentages are signals. They are not confidence. Genuine confidence in software comes from a deep understanding of system behaviour — how it performs under load, how it degrades under failure, how it responds to change. That understanding cannot be shortcut. It must be built.',
  },
  {
    num:   '03',
    title: 'The complexity of modern software demands autonomous quality infrastructure.',
    body:  'No human team — regardless of size or skill — can maintain comprehensive understanding of a large, fast-moving distributed system through manual processes alone. This is not a criticism of engineering teams. It is an acknowledgement of the scale of the problem. Autonomous quality intelligence is not a luxury for large organisations. It is the necessary infrastructure for any team operating at modern software scale.',
  },
  {
    num:   '04',
    title: 'Accessibility matters as much as capability.',
    body:  'The most sophisticated quality intelligence in the world has limited impact if it is only accessible to organisations with the resources to build it themselves. Qlitz is committed to making this capability available to every serious engineering team — regardless of company size, budget, or existing infrastructure maturity.',
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
            shared by engineering teams across the industry — that the tools available for software
            quality have not kept pace with the software they are meant to protect.
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
              Every great engineering team we have seen hits the same wall.
            </motion.h2>
            {[
              'The pattern is consistent across organisations of every size. A team starts with a manageable codebase and a reasonable test suite. They move fast. They ship confidently. Then the system grows. Distributed services multiply. Release cycles compress. The test suite becomes a maintenance burden. Coverage metrics rise while confidence declines. Production incidents occur in areas that were "fully tested."',
              'At some point, every engineering leader faces the same uncomfortable truth: the quality model that worked at one scale does not work at the next.',
              'The conventional response is to hire more QA engineers, invest in more test automation, and enforce more rigorous review processes. These are reasonable responses to a symptom. They do not address the underlying problem — which is that the model itself is structurally limited.',
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
                Qlitz exists because we believed there was a better model. And because we thought
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
              A focused team with a clear mission.
            </motion.h2>
            {[
              'Qlitz is a software company with a single focus — building quality intelligence infrastructure for modern engineering teams. We are not a broad-spectrum DevOps platform. We are not a testing tool. We are not an observability product with quality features added.',
              'We are building one thing, with the full depth it deserves: an autonomous quality intelligence layer that gives engineering teams a level of confidence in their software that the current generation of tooling cannot provide.',
              'We are in the early stages of that build. We are working closely with a small number of engineering teams who share our conviction that this problem matters — and who are willing to help us shape the platform through direct engagement.',
              'That close collaboration is not a temporary phase. It is how we intend to build — in direct partnership with the teams who live with the consequences of software quality every day.',
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="leading-relaxed text-slate-600 mb-5">
                {para}
              </motion.p>
            ))}
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
              The beliefs that shape every decision we make.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed max-w-2xl">
              These are not brand values written for a website. They are the working principles
              that determine how we build, who we build for, and what we refuse to compromise on.
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
                  <span className="flex-shrink-0 text-2xl font-extrabold bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent pt-0.5">
                    {c.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">{c.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
              Close collaboration. Honest feedback. Long-term partnership.
            </motion.h2>
            {[
              'We do not have a self-serve onboarding flow and a support ticket queue. At this stage of Qlitz, every team we work with has direct access to the people building the platform.',
              'That is a deliberate choice. The problems we are solving are deep, specific, and different in detail for every engineering environment. We cannot build the right platform by observing from a distance. We build it by being close to the problem — understanding the real workflows, constraints, and failure modes that engineering teams face — and letting that understanding drive every product decision.',
              'We will scale that relationship model as the platform matures. But we will never move to a model where the teams using Qlitz are abstracted away from the people building it. The feedback loop between builder and user is one of the most valuable things we have.',
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="leading-relaxed text-slate-600 mb-5">
                {para}
              </motion.p>
            ))}
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
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-snug">
            We are not building a product. We are building a new standard.
          </motion.h2>
          {[
            'In ten years, the expectation for how software quality is managed will look fundamentally different from today. The teams that are defining that expectation now — through the tools they adopt, the practices they establish, and the standard they hold their software to — will have shaped the industry for the decade that follows.',
            'Qlitz is being built to be part of that definition. Not as a feature on a roadmap, but as a foundational conviction about what quality infrastructure should be — and what engineering teams deserve.',
          ].map((para, i) => (
            <motion.p key={i} variants={fadeUp} className="leading-relaxed text-slate-600 mb-5 text-lg">
              {para}
            </motion.p>
          ))}
          <motion.div variants={fadeUp} className="mt-10 space-y-3">
            <p className="text-xl font-bold text-slate-900">We are early. The platform is evolving. The standard is being set.</p>
            <p className="text-xl font-bold bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
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
            We are selectively expanding early access to engineering teams who are ready to operate
            at the next level of software quality. If that is your organisation, we would like to talk.
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
