import { WaitlistForm } from './WaitlistForm';

export const metadata = {
  title: "Join the Waitlist",
  description: "Be among the first to access Qlitz — the autonomous quality engine for modern engineering teams."
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-xs font-semibold text-blue-600 uppercase tracking-wide mb-6">
            Early Access
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
              Be First to<br />Experience Qlitz
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We're building the next generation of AI-powered quality engineering.
            Join the waitlist and we'll reach out as soon as early access opens.
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            {[
              'Intelligent test strategy generation',
              'Real-time risk detection across UI, API & performance',
              'AI-driven insights from your existing test data',
              'Built for modern engineering teams',
            ].map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br from-[#3A7BFF] to-[#8A3AFF] flex-shrink-0 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — form */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-[0_4px_32px_rgba(58,123,255,0.07)]">
          <h2 className="text-xl font-bold text-slate-900 mb-1">Join the Waitlist</h2>
          <p className="text-sm text-slate-500 mb-6">We'll notify you the moment early access opens.</p>
          <WaitlistForm />
        </div>

      </div>
    </main>
  );
}
