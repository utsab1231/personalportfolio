"use client";

import { useEffect, useState } from "react";
import NepaliDate from "nepali-date-converter";
import { person } from "@/content/site";

export function Splash() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [dates, setDates] = useState<{ bs: string; ad: string } | null>(null);

  useEffect(() => {
    // One-time reads of browser/clock state that isn't known during SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDates({
      bs: new NepaliDate().format("DD MMMM YYYY"),
      ad: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" }),
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
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
        <h1 className="text-[12vw] md:text-[8vw] font-cartoon font-medium leading-none text-fg">
          {person.name}
        </h1>
        {dates && (
          <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-muted mt-4">
            <span>{dates.bs}</span>
            <span aria-hidden="true">/</span>
            <span>{dates.ad}</span>
          </div>
        )}
      </div>
    </div>
  );
}
