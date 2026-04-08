import Link from "next/link";

export const metadata = {
  title: "Approach",
  description: "Explore how Qlitz approaches quality engineering with intelligence, automation, and reliability."
};

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Our Approach
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Qlitz combines intelligence, automation, and engineering excellence to deliver a new standard of software quality.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intelligence at the Core
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            Quality is no longer about writing more tests — it's about understanding systems deeply.
            Qlitz analyzes behavior, architecture, and patterns to uncover risks before they surface.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-3">Proactive</h3>
            <p className="text-white/60">
              Detect issues before they impact users through predictive intelligence.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Automated</h3>
            <p className="text-white/60">
              Reduce manual effort with autonomous validation and execution pipelines.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Integrated</h3>
            <p className="text-white/60">
              Seamlessly connect with your CI/CD, infrastructure, and engineering workflows.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Modern Engineering
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto mb-10">
            Qlitz is designed for teams that move fast, build globally distributed systems,
            and demand reliability at scale.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="text-xl font-semibold mb-3">Scalable Architecture</h4>
              <p className="text-white/60">
                Distributed execution and intelligent orchestration ensure performance at any scale.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="text-xl font-semibold mb-3">Deep Observability</h4>
              <p className="text-white/60">
                Gain insights across your entire system — from code to infrastructure to user behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Transform Your Quality Strategy
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10">
          Join the early access program and experience the next evolution of software quality.
        </p>

        <Link
          href="/waitlist"
          prefetch
          className="px-10 py-4 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] font-semibold hover:opacity-90 transition"
        >
          Join the Waitlist
        </Link>
      </section>
    </main>
  );
}
