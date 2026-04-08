import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Year from "@/components/Year";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://qlitz.dev"),
  title: {
    default: "Qlitz — The Future of Software Quality",
    template: "%s | Qlitz",
  },
  description:
    "Qlitz is redefining how modern engineering teams ensure software quality with AI‑powered automation.",
  alternates: {
    canonical: "https://qlitz.dev",
  },
  keywords: [
    "Qlitz",
    "QA automation",
    "software testing",
    "AI testing",
    "test automation",
    "quality engineering",
  ],
  openGraph: {
    type: "website",
    url: "https://qlitz.dev",
    title: "Qlitz — The Future of Software Quality",
    description:
      "AI‑powered automation for modern engineering teams. Faster releases, higher quality.",
    siteName: "Qlitz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qlitz — The Future of Software Quality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qlitz — The Future of Software Quality",
    description:
      "AI‑powered automation for modern engineering teams. Faster releases, higher quality.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const revalidate = 0;

function QlitzSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Qlitz",
          url: "https://qlitz.dev",
          logo: "https://qlitz.dev/logo.png",
          description:
            "Qlitz is redefining how modern engineering teams ensure software quality with AI‑powered automation.",
          sameAs: ["https://www.linkedin.com/company/qlitz"],
        }),
      }}
    />
  );
}

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <QlitzSchema />
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>

      <body className={`${inter.className} bg-[#0A0A0F] text-white`}>
        {/* Premium Semi‑Transparent Header */}
        <Header />

        {/* Page Content with Smooth Transitions */}
        <main className="pt-20 relative before:absolute before:top-0 before:left-0 before:w-full before:h-6 before:bg-gradient-to-b before:from-black/40 before:to-transparent">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Premium Multi‑Column Footer */}
        <footer className="border-t border-white/10 mt-0 py-12 bg-[#050509] text-sm text-white/70">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Brand */}
            <div className="space-y-3">
              <p className="text-base font-semibold text-white">Qlitz</p>
              <p className="text-xs text-white/50">
                AI‑powered quality automation for modern engineering teams.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wide">
                Product
              </p>
              <a href="/product" className="block hover:text-white transition">Overview</a>
              <a href="/vision" className="block hover:text-white transition">Vision</a>
              <a href="/approach" className="block hover:text-white transition">Approach</a>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wide">
                Company
              </p>
              <a href="/about" className="block hover:text-white transition">About</a>
              <a href="/contact" className="block hover:text-white transition">Contact</a>
              <a
                href="https://www.linkedin.com/company/qlitz"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>

            {/* Legal */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wide">
                Legal
              </p>
              <a href="/privacy" className="block hover:text-white transition">Privacy</a>
              <a href="/terms" className="block hover:text-white transition">Terms</a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© <Year /> Qlitz. All rights reserved.</p>
            <p>Built for teams who care about quality.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
