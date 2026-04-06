"use client";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white px-6 py-20 flex justify-center">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Join the Waitlist
          </span>
        </h1>

        <p className="text-lg text-white/70 mb-10">
          Be the first to experience the future of software quality. Sign up below.
        </p>

        <div className="w-full">
          <iframe
            data-tally-src="https://tally.so/embed/rjL84N?alignLeft=1&hideTitle=1&transparentBackground=1"
            loading="lazy"
            width="100%"
            height="300"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
