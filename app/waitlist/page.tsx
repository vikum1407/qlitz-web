import Link from "next/link";

export const metadata = {
  title: "Join the Waitlist",
  description: "Be among the first to access Qlitz — the autonomous quality engine for modern engineering teams."
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Join the Qlitz Waitlist
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Get early access to the Qlitz platform and experience the future of autonomous software quality.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be First to Try Qlitz
          </h2>

          <p className="text-white/60 mb-10">
            Sign up below and you’ll be notified as soon as early access opens.
          </p>

          {/* Tally Form Embed */}
          <iframe
            data-tally-src="https://tally.so/embed/mJgW1N?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="300"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Waitlist Form"
          ></iframe>
        </div>
      </section>

      {/* CTA BACK TO HOME */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Want to Learn More?
        </h2>

        <p className="text-white/60 max-w-xl mx-auto mb-10">
          Explore our vision, approach, and product to see how Qlitz is redefining software quality.
        </p>

        <Link
          href="/"
          prefetch
          className="px-10 py-4 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
