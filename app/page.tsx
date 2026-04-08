export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-4xl space-y-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/40 fade-in-up">
          AI‑POWERED QUALITY AUTOMATION
        </p>

        <h1 className="fade-in-up fade-in-up-delay-1 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Redefining the Future
          </span>
          <br />
          of Software Quality
        </h1>

        <p className="fade-in-up fade-in-up-delay-2 mt-2 text-lg md:text-xl text-white/70">
          Qlitz is building a new standard for how modern engineering teams ensure
          reliability, resilience, and confidence in their software—without slowing down delivery.
        </p>

        <div className="fade-in-up fade-in-up-delay-3 mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-white font-semibold hover:opacity-90 transition shadow-[0_0_22px_rgba(138,58,255,0.45)]">
            Join the Waitlist
          </button>
          <p className="text-sm text-white/50">
            Designed for teams who treat quality as a first‑class product feature.
          </p>
        </div>
      </div>
    </div>
  );
}
