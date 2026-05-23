import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ConditionalSiteChrome } from "@/components/ConditionalSiteChrome";
import { Analytics } from "@vercel/analytics/react";

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
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <QlitzSchema />
        <script async src="https://tally.so/widgets/embed.js"></script>
        {/* Theme FOUC prevention — runs before React hydration */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme')||'system';if(t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}` }} />
      </head>

      <body className={inter.className}>
        <ConditionalSiteChrome>
          {children}
        </ConditionalSiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
