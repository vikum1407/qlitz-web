export const metadata = {
  title: "Privacy Policy",
  description: "Read how Qlitz collects, uses, and protects your personal information."
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white px-6 py-20 flex justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10 text-center">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Privacy Policy
          </span>
        </h1>

        <p className="text-white/60 mb-10 text-center">
          Last updated: {new Date().getFullYear()}
        </p>

        <section className="space-y-10 text-white/70 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Qlitz is committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, and safeguard your information when you interact with our website,
              platform, and services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Personal information you provide (such as name and email)</li>
              <li>Usage data and analytics</li>
              <li>Technical data such as IP address and browser type</li>
              <li>Information submitted through forms or waitlist sign‑ups</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p>Your information may be used to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Provide and improve our services</li>
              <li>Communicate updates, announcements, or onboarding details</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Maintain security and prevent misuse</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share data with trusted service
              providers who assist in operating our platform, analytics, or communication systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">5. Data Security</h2>
            <p>
              We implement industry‑standard security measures to protect your information.
              However, no method of transmission or storage is completely secure, and we cannot
              guarantee absolute protection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>You may request to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access your personal data</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of communications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">7. Third‑Party Services</h2>
            <p>
              Our website may include integrations with third‑party tools such as analytics,
              waitlist forms, or embedded widgets. These services may collect data according to
              their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use of our services
              indicates acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, you can contact us at:
              <br />
              <span className="text-white">contact@qlitz.dev</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
