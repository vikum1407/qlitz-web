"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/70">
          We’re partnering with forward‑thinking teams who want to shape the future
          of software quality. Reach out or join the waitlist to stay updated.
        </p>

        <div className="mt-12 space-y-4 text-lg text-white/80">
          <p>Email: <span className="text-white">contact@qlitz.com</span></p>
          <p>Location: <span className="text-white">Sweden</span></p>
        </div>

        <button className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition">
          Join the Waitlist
        </button>
      </motion.div>
    </main>
  );
}
