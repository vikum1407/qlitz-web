"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/vision", label: "Vision" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setOpen(true)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0A0A0F] border-l border-white/10 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <span className="text-3xl text-white">&times;</span>
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 mt-6 text-lg">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition ${
                  active
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/waitlist"
            onClick={() => setOpen(false)}
            className="mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-[#3A7BFF] to-[#8A3AFF] text-center font-semibold shadow-[0_0_18px_rgba(138,58,255,0.35)] hover:opacity-90 transition"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </>
  );
}
