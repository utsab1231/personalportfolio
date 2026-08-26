"use client";

import { useEffect, useRef, useState } from "react";
import { Palette } from "lucide-react";
import { themes, type ThemeKey } from "@/content/themes";

function applyTheme(key: ThemeKey) {
  document.documentElement.setAttribute("data-theme", key);
  document.documentElement.classList.toggle("dark", key !== "light");
  localStorage.setItem("theme", key);
  window.dispatchEvent(new Event("themechange"));
}

export function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeKey | null>(null);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // One-time read of DOM state set by the pre-hydration script in layout.tsx;
    // this can't be known during SSR, so it must be synced after mount.
    const current = document.documentElement.getAttribute("data-theme") as ThemeKey | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(current ?? "light");
  }, []);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function select(key: ThemeKey) {
    applyTheme(key);
    setActive(key);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="fixed top-8 right-16 md:right-8 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Choose color theme"
        aria-haspopup="true"
        aria-expanded={open}
        // Touch target expanded to 44x44 via padding + matching negative margin
        // (icon's rendered position is unaffected) — grown left/up/down only,
        // away from the mobile hamburger button's own expanded hit area to its
        // right, so the two don't overlap on narrow screens.
        className="text-muted hover:text-fg transition-colors pl-6 pt-3 pb-3 -ml-6 -mt-3 -mb-3"
      >
        {active === null ? null : <Palette className="h-5 w-5" />}
      </button>

      {open && (
        <ul className="absolute right-0 top-8 w-44 border border-border bg-bg py-1 text-sm">
          {themes.map((theme) => {
            const isActive = theme.key === active;
            return (
              <li key={theme.key}>
                <button
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => select(theme.key)}
                  className={`flex w-full items-center gap-2 px-3 py-1.5 text-left transition-colors border-l-2 ${
                    isActive ? "border-fg text-fg" : "border-transparent text-muted hover:text-fg"
                  }`}
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full border border-border"
                    style={{
                      background: `linear-gradient(135deg, ${theme.bg} 50%, ${theme.fg} 50%)`,
                    }}
                  />
                  {theme.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
