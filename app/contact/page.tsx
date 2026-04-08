import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Qlitz team for inquiries, partnerships, or support."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Have questions, partnership ideas, or want to learn more about Qlitz?  
          We’d love to hear from you.
        </p>
      </section>

      {/* CONTACT + FORM */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* CONTACT INFO */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-white/60 mb-6">
              Reach out to our team and we’ll get back to you as soon as possible.
            </p>

            <div className="space-y-4 text-white/70">
              <p>📧 contact@qlitz.dev</p>
              <p>🌍 Karlstad, Sweden</p>
            </div>
          </div>

          {/* FORM */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-[#111118] border border-white/10 text-white focus:border-[#8A3AFF] outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-[#111118] border border-white/10 text-white focus:border-[#8A3AFF] outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#111118] border border-white/10 text-white focus:border-[#8A3AFF] outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Prefer to Talk Directly?
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10">
          Join our waitlist and we’ll reach out personally with early access and updates.
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
