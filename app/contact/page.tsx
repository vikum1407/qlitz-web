import Link from "next/link";
import { ContactSection } from "./ContactSection";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Qlitz team for inquiries, partnerships, or support."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Have questions, partnership ideas, or want to learn more about Qlitz?{" "}
          We'd love to hear from you.
        </p>
      </section>

      {/* CONTACT GRID ↔ SUCCESS MESSAGE (client-controlled) */}
      <ContactSection />

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-200 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Prefer to Talk Directly?
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-10">
          Join our waitlist and we'll reach out personally with early access and updates.
        </p>

        <Link
          href="/waitlist"
          prefetch
          className="px-10 py-4 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_22px_rgba(138,58,255,0.3)]"
        >
          Join the Waitlist
        </Link>
      </section>
    </main>
  );
}
