"use client";

import { useEffect, useState } from "react";
import { person } from "@/content/site";

export function Splash() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      // One-time read of a browser media query that isn't known during SSR.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const HOLD_MS = 1300; // how long the name stays fully visible
    const FADE_MS = 700; // fade-out duration — must match the duration-700 classes below

    // Hold at full opacity, then trigger the fade-out.
    const holdTimer = setTimeout(() => setMounted(true), HOLD_MS);
    const hideTimer = setTimeout(() => setVisible(false), HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] h-screen w-screen flex items-center justify-center bg-bg transition-opacity duration-700 ${
        mounted ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`text-center transition-all duration-700 ${
          mounted ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"
        }`}
      >
        <h1 className="text-[12vw] md:text-[8vw] font-display font-medium leading-none text-fg">
          {person.name}
        </h1>
        <p className="font-deva text-sm md:text-base text-muted mt-4">{person.nameDeva}</p>
      </div>
    </div>
  );
}
