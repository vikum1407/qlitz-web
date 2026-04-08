"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/vision", label: "Vision" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Prevent hydration mismatch by delaying scroll logic
    requestAnimationFrame(() => {
      const handler = () => {
        if (!headerRef.current) return;

        if (window.scrollY > 10) {
          headerRef.current.classList.add("header-scrolled");
        } else {
          headerRef.current.classList.remove("header-scrolled");
        }
      };

      handler(); // Run once on mount
      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10"
    >
      <nav className="header-inner max-w-6xl mx-auto flex items-center justify-between py-4 px-4 transition-all">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="logo-glow rounded-full">
            <Image
              src="/logo.png"
              alt="Qlitz Logo"
              width={50}
              height={50}
              priority
              className="header-logo transition-transform rounded-full"
            />
          </div>
          <span className="text-xl font-semibold tracking-wide">Qlitz</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  active ? "nav-link--active" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/waitlist"
          className="hidden md:block px-5 py-2 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-sm font-semibold hover:opacity-90 transition shadow-[0_0_18px_rgba(138,58,255,0.35)]"
        >
          Join Waitlist
        </Link>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}
