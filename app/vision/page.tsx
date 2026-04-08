import Link from "next/link";

export const metadata = {
  title: "Vision",
  description: "Learn the long‑term vision behind Qlitz and the future of software quality."
};

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Our Vision
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Qlitz exists to redefine how the world thinks about software quality — from a slow,
          reactive process to an intelligent, autonomous system that empowers engineering teams
          everywhere.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quality Should Be Autonomous
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            Software systems are becoming more complex, distributed, and dynamic. Traditional
            testing cannot keep up. Qlitz envisions a world where quality is continuously monitored,
            validated, and improved — without manual intervention.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-3">Intelligent</h3>
            <p className="text-white/60">
              Systems that understand behavior, detect anomalies, and predict failures before they
              happen.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Adaptive</h3>
            <p className="text-white/60">
              Quality engines that evolve with your product, infrastructure, and user patterns.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Effortless</h3>
            <p className="text-white/60">
              A future where engineering teams focus on innovation, not repetitive validation work.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Unified Quality Brain
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto mb-10">
            Qlitz is building a central intelligence layer that understands your entire system —
            code, data, infrastructure, and user behavior — and ensures reliability across every
            dimension.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="text-xl font-semibold mb-3">Holistic Understanding</h4>
              <p className="text-white/60">
                Quality is not just tests — it's architecture, performance, resilience, and user
                experience.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="text-xl font-semibold mb-3">Continuous Evolution</h4>
              <p className="text-white/60">
                As your product grows, Qlitz learns, adapts, and improves its validation
                intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The Future Is Autonomous Quality
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10">
          Join us in shaping the next era of software engineering — where quality becomes a
          superpower, not a bottleneck.
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
