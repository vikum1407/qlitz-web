"use client";

import { motion } from "framer-motion";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Something Powerful
          </span>
          <br />
          Is Coming
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70">
          We are building a new kind of quality platform — one that rethinks how
          modern engineering teams understand, validate, and trust their software.
          Details are under wraps for now.
        </p>

        <button className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition">
          Join the Waitlist
        </button>
      </motion.div>
    </main>
  );
}
