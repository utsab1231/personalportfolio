"use client";

import { useState } from "react";
import { nav } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="fixed top-8 right-4 z-50 md:hidden space-y-2"
      >
        <span
          className={`block w-8 h-0.5 bg-fg transition-transform ${
            open ? "rotate-45 translate-y-2.5" : ""
          }`}
        />
        <span className={`block w-8 h-0.5 bg-fg transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`block w-8 h-0.5 bg-fg transition-transform ${
            open ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 bg-bg z-40 md:hidden pt-24 px-8">
          <ul className="space-y-6">
            {nav.map((item) => (
              <li key={item.id} className="mb-6">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-2xl font-display font-medium text-fg"
                >
                  {item.en}
                  <span className="block font-deva text-sm text-muted mt-1">{item.deva}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
