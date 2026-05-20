"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const path = usePathname().split("/").filter(Boolean);

  const crumbs = path.map((segment, i) => {
    const href = "/" + path.slice(0, i + 1).join("/");
    return { label: segment.replace(/-/g, " "), href };
  });

  return (
    <div className="text-sm text-white/40 mb-6 flex gap-2">
      {crumbs.map((c, i) => (
        <span key={i}>
          <Link href={c.href} className="hover:text-white">
            {c.label}
          </Link>
          {i < crumbs.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
}
