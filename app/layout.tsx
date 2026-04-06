import "./globals.css";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata = {
  title: "Qlitz — The Future of Software Quality",
  description: "Qlitz is redefining how modern engineering teams ensure software quality.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0F] text-white">
        <header className="w-full border-b border-white/10">
          <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Qlitz Logo" width={50} height={50} />
              <span className="text-xl font-semibold">Qlitz</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="/" className="hover:text-[#8A3AFF] transition">Home</a>
              <a href="/product" className="hover:text-[#8A3AFF] transition">Product</a>
              <a href="/vision" className="hover:text-[#8A3AFF] transition">Vision</a>
              <a href="/approach" className="hover:text-[#8A3AFF] transition">Approach</a>
              <a href="/about" className="hover:text-[#8A3AFF] transition">About</a>
              <a href="/contact" className="hover:text-[#8A3AFF] transition">Contact</a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 mt-20 py-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Qlitz. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
