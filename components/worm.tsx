"use client";

import { useState } from "react";
import { worm } from "@/content/site";
import { useWormWander } from "@/hooks/use-worm-wander";

const SEGMENT_COUNT = 7;

export function Worm() {
  const [hovered, setHovered] = useState(false);
  const { containerRef, bodyRef, registerSegment } = useWormWander({
    paused: hovered,
    segmentCount: SEGMENT_COUNT,
  });

  return (
    <div
      ref={containerRef}
      className="group fixed top-0 left-0 z-30 h-2 w-2 cursor-default select-none pointer-events-auto"
      style={{ transform: "translate3d(50vw, 50vh, 0)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap
                   text-center opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      >
        <p className="font-deva text-sm leading-tight text-muted">{worm.labelDeva}</p>
      </div>

      {/* body: rotates to face the direction of travel; segments trail behind the head */}
      <div ref={bodyRef} className="relative" style={{ transformOrigin: "0 0" }}>
        {Array.from({ length: SEGMENT_COUNT }).map((_, i) => {
          const w = i === 0 ? 10 : Math.max(3, 7 - i * 0.7);
          const h = i === 0 ? 7 : Math.max(3, 7 - i * 0.7);
          return (
            <div
              key={i}
              ref={registerSegment(i)}
              className="absolute rounded-full bg-fg"
              style={{
                top: 0,
                left: 0,
                width: w,
                height: h,
                marginLeft: -w / 2,
                marginTop: -h / 2,
                opacity: Math.max(0.35, 1 - i * 0.1),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
