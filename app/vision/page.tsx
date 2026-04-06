"use client";

import { motion } from "framer-motion";

export default function VisionPage() {
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
            Our Vision
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto">
          To redefine software quality for the next decade by introducing a smarter,
          more autonomous, and more connected approach to understanding complex systems.
        </p>

        {/* Why This Matters */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Why This Matters</h2>
          <p className="text-white/70 leading-relaxed text-lg">
            Modern applications are no longer simple. They span multi‑page user journeys,
            distributed APIs, microservices, rapid release cycles, and global user expectations.
            Traditional QA methods weren’t built for this world. Qlitz is.
          </p>
        </section>

        {/* What We Believe */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">What We Believe</h2>
          <ul className="space-y-4 text-white/70 text-lg">
            <li>• Quality should scale with development speed.</li>
            <li>• Automation should reduce cognitive load.</li>
            <li>• Systems should explain themselves.</li>
            <li>• Teams should focus on innovation, not maintenance.</li>
            <li>• Quality should be a strategic advantage.</li>
          </ul>
        </section>
      </motion.div>
    </main>
  );
}
