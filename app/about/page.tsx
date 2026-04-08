import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Learn about Qlitz, our mission, and the team shaping the future of QA."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            About Qlitz
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          We are building the future of software quality — intelligent, automated, and engineered
          for the next generation of digital products.
        </p>
      </section>

      {/* MISSION */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            To empower engineering teams with an autonomous quality engine that ensures reliability,
            performance, and trust — without slowing innovation. Qlitz exists to eliminate the
            bottlenecks of traditional testing and bring intelligence to every stage of the software
            lifecycle.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-2xl font-bold mb-3">Innovation</h3>
            <p className="text-white/60">
              We challenge outdated processes and build systems that redefine what’s possible.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-2xl font-bold mb-3">Integrity</h3>
            <p className="text-white/60">
              We believe quality is not optional — it’s the foundation of every great product.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-2xl font-bold mb-3">Impact</h3>
            <p className="text-white/60">
              Our work enables teams to ship faster, safer, and with greater confidence.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Story Behind Qlitz</h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            Qlitz was founded with a simple belief:  
            <strong>Software quality should be autonomous.</strong>  
            After years of seeing teams struggle with slow, manual, and fragmented testing processes,
            we set out to build a platform that brings intelligence, automation, and clarity to the
            entire quality lifecycle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Engineering Excellence</h3>
            <p className="text-white/60">
              Our architecture is designed for scale, performance, and deep integration with modern
              engineering ecosystems.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold mb-3">Human‑Centered Design</h3>
            <p className="text-white/60">
              We build tools that feel intuitive, empowering teams to focus on innovation rather
              than repetitive validation work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us on This Journey</h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10">
          Be part of the next evolution in software engineering.  
          Qlitz is shaping a world where quality becomes a superpower.
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
