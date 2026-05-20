import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    title: "Get Started",
    items: [
      { href: "/docs/get-started/what-is-qlitz", label: "What is Qlitz?" },
      { href: "/docs/get-started/why-qlitz", label: "Why Qlitz?" }
    ]
  },
  {
    title: "Features",
    items: [
      { href: "/docs/features/ai-quality-engine", label: "AI Quality Engine" },
      { href: "/docs/features/automation-engine", label: "Automation Engine" },
      { href: "/docs/features/enterprise-reliability", label: "Enterprise Reliability" }
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-8">
      {nav.map((section) => (
        <div key={section.title}>
          <p className="text-xs uppercase tracking-wide text-white/40 mb-3">
            {section.title}
          </p>

          <div className="space-y-2">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-sm transition ${
                    active ? "text-white font-semibold" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
