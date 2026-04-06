"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            About Qlitz
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto">
          Qlitz is an independent technology company focused on advancing the future
          of software quality. We bring together deep experience in automation,
          system design, and modern engineering practices to build what comes next.
        </p>

        {/* Who We Are */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-white/70 leading-relaxed text-lg">
            We are a team driven by curiosity, engineering discipline, and a belief
            that software quality should empower teams — not slow them down. Our work
            is rooted in a commitment to clarity, innovation, and long‑term thinking.
          </p>
        </section>

        {/* Mission */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-white/70 leading-relaxed text-lg">
            Our mission is to build the world’s most intelligent and autonomous
            approach to software quality — one that enables teams to move faster,
            with greater confidence, and with far less manual effort.
          </p>
        </section>

        {/* Philosophy */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
          <ul className="space-y-4 text-white/70 text-lg">
            <li>• Quality should be integrated, not isolated.</li>
            <li>• Intelligence should reduce complexity, not add to it.</li>
            <li>• Systems should adapt as software evolves.</li>
            <li>• Developers should focus on innovation, not maintenance.</li>
            <li>• Great products come from great foundations.</li>
          </ul>
        </section>
      </motion.div>
    </main>
  );
}
