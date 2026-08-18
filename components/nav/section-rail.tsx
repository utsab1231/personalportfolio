"use client";

import Link from "next/link";
import { nav } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";

export function SectionRail() {
  const ids = nav.map((item) => item.id);
  const activeId = useActiveSection(ids);

  return (
    <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <ul className="space-y-4 text-left">
        {nav.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`group flex items-center gap-2 text-sm transition-colors ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                <span className="font-mono text-xs">{item.num}</span>
                <span>{item.en}</span>
                <span className="font-deva text-xs">{item.deva}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
