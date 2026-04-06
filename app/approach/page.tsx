"use client";

import { motion } from "framer-motion";

export default function ApproachPage() {
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
            Our Approach
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto">
          Qlitz is engineered with a modern, modular philosophy that prioritizes clarity,
          scalability, and long‑term maintainability. We believe great systems are built
          on strong foundations — not shortcuts.
        </p>

        {/* Our Approach */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">How We Think</h2>
          <p className="text-white/70 leading-relaxed text-lg">
            We design systems that are predictable, resilient, and adaptable. Our approach
            emphasizes clean separation of responsibilities, thoughtful orchestration, and
            architectures that scale naturally as complexity grows. We build for the long
            term — with clarity, consistency, and purpose.
          </p>
        </section>

        {/* Principles */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Our Principles</h2>
          <ul className="space-y-4 text-white/70 text-lg">
            <li>• Simplicity at scale — complexity handled behind the scenes.</li>
            <li>• Modularity — every part of the system has a clear purpose.</li>
            <li>• Resilience — built to adapt as software evolves.</li>
            <li>• Transparency — insights that empower teams.</li>
            <li>• Longevity — architecture designed for the next decade.</li>
          </ul>
        </section>
      </motion.div>
    </main>
  );
}
