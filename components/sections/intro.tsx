"use client";

import { useRef, useState } from "react";
import { Section } from "@/components/section";
import { audiences, type AudienceKey } from "@/content/site";

export function Intro() {
  const [displayed, setDisplayed] = useState<AudienceKey>("anyone");
  const [visible, setVisible] = useState(true);
  const pendingKey = useRef<AudienceKey | null>(null);
  const current = audiences.find((a) => a.key === displayed)!;

  function handleSelect(key: AudienceKey) {
    if (key === displayed && pendingKey.current === null) return;
    pendingKey.current = key;
    setVisible(false);
  }

  function handleTransitionEnd() {
    if (visible || pendingKey.current === null) return;
    setDisplayed(pendingKey.current);
    pendingKey.current = null;
    setVisible(true);
  }

  return (
    <Section id="intro" className="flex flex-col justify-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        {/* Audience tab strip — horizontally scrollable on mobile with edge fades (A6) */}
        <div className="relative mb-12 -mx-4 md:mx-0">
          <div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-bg to-transparent pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-bg to-transparent pointer-events-none md:hidden" />
          <div className="flex gap-6 md:gap-8 justify-start md:justify-center text-sm overflow-x-auto scrollbar-hide px-4 md:px-0">
            {audiences.map((a) => (
              <button
                key={a.key}
                onClick={() => handleSelect(a.key)}
                className={`whitespace-nowrap flex-shrink-0 transition-colors duration-300 ease-out flex flex-col items-center gap-1 ${
                  a.key === displayed ? "text-fg font-medium" : "text-muted hover:text-fg"
                }`}
              >
                <span>{a.label}</span>
                <span className="font-deva text-xs">{a.labelDeva}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          className={`min-h-[280px] md:min-h-[500px] transition-opacity duration-300 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
          onTransitionEnd={handleTransitionEnd}
        >
          <p className="text-2xl md:text-5xl leading-tight text-fg mb-10">{current.statement}</p>

          <div className="flex gap-4 flex-wrap justify-center">
            {current.skills.map((skill, i) => (
              <span key={i} className="text-sm text-muted">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
