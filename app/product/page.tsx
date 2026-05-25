import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Product",
  description: "Discover how Qlitz transforms software quality with AI‑powered automation.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center fade-in-up">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">
          THE QLITZ PLATFORM
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Intelligent Quality Engine
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          A unified, intelligent quality platform that automates validation, accelerates releases,
          and ensures software reliability at scale.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="py-24 px-6 border-t border-slate-200 fade-in-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">
              AI‑Driven Quality Intelligence
            </h2>
            <p className="text-slate-600 mb-6">
              Qlitz continuously analyzes your systems, detects anomalies, and predicts quality
              risks before they impact users.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li>• Automated risk detection</li>
              <li>• Intelligent test generation</li>
              <li>• Predictive quality scoring</li>
            </ul>
          </div>

          <Image
            src="/product-ai.png"
            alt="AI Quality Engine"
            width={600}
            height={400}
            loading="lazy"
            className="rounded-xl border border-slate-200 shadow-lg"
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-24 px-6 border-t border-slate-200 fade-in-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Image
            src="/product-automation.png"
            alt="Automation Engine"
            width={600}
            height={400}
            loading="lazy"
            className="rounded-xl border border-slate-200 shadow-lg"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">
              End‑to‑End Automation
            </h2>
            <p className="text-slate-600 mb-6">
              From test execution to environment orchestration, Qlitz automates the entire quality
              lifecycle.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li>• Zero‑touch execution pipelines</li>
              <li>• Smart environment provisioning</li>
              <li>• Real‑time validation feedback</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 px-6 border-t border-slate-200 fade-in-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">
              Enterprise‑Grade Reliability
            </h2>
            <p className="text-slate-600 mb-6">
              Built for scale, security, and performance. Qlitz integrates seamlessly into modern
              engineering ecosystems.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li>• SOC‑ready architecture</li>
              <li>• Scalable distributed execution</li>
              <li>• Deep CI/CD integrations</li>
            </ul>
          </div>

          <Image
            src="/product-enterprise.png"
            alt="Enterprise Reliability"
            width={600}
            height={400}
            loading="lazy"
            className="rounded-xl border border-slate-200 shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-200 text-center fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
          Experience the Future of Quality
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-10">
          Join the early access program and be among the first to explore the Qlitz platform.
        </p>

        <Link
          href="/waitlist"
          prefetch
          className="px-10 py-4 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_22px_rgba(138,58,255,0.45)]"
        >
          Join the Waitlist
        </Link>
      </section>
    </main>
  );
}
