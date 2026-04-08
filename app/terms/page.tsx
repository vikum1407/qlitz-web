export const metadata = {
  title: "Terms of Service",
  description: "Review the terms and conditions for using Qlitz and its services."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white px-6 py-20 flex justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10 text-center">
          <span className="bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] bg-clip-text text-transparent">
            Terms of Service
          </span>
        </h1>

        <p className="text-white/60 mb-10 text-center">
          Last updated: {new Date().getFullYear()}
        </p>

        <section className="space-y-10 text-white/70 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Qlitz, you agree to be bound by these Terms of Service. If you
              do not agree, you may not use our website or platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">2. Use of the Service</h2>
            <p>
              You agree to use Qlitz only for lawful purposes and in compliance with all applicable
              laws and regulations. Misuse, unauthorized access, or attempts to disrupt the service
              are strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">3. Accounts & Access</h2>
            <p>
              If you create an account, you are responsible for maintaining the confidentiality of
              your login credentials and for all activities under your account. Qlitz reserves the
              right to suspend or terminate accounts that violate these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content, branding, software, and materials provided by Qlitz are the property of
              Qlitz and protected by intellectual property laws. You may not copy, modify, or
              distribute any part of the platform without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">5. Third‑Party Services</h2>
            <p>
              Qlitz may integrate with third‑party tools or services. We are not responsible for the
              content, policies, or actions of third‑party providers. Your use of such services is
              subject to their respective terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              Qlitz is provided “as is” without warranties of any kind. We are not liable for any
              damages arising from your use of the platform, including loss of data, interruptions,
              or inaccuracies in content or performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">7. Termination</h2>
            <p>
              We may suspend or terminate access to the platform at any time, with or without
              notice, for conduct that violates these terms or is harmful to Qlitz or other users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">8. Changes to Terms</h2>
            <p>
              Qlitz may update these Terms of Service at any time. Continued use of the platform
              after changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              For questions about these Terms of Service, contact us at:
              <br />
              <span className="text-white">contact@qlitz.dev</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
