"use client";

import { useState, type CSSProperties } from "react";
import { worm } from "@/content/site";
import { useWormWander } from "@/hooks/use-worm-wander";

const SEGMENT_COUNT = 7;

// Keep in sync with the SCALE constant in hooks/use-worm-wander.ts — both scale
// the same creature, just its body-plan geometry here vs. its motion there.
const SCALE = 1.7;

// Legs are pinned to a few front/mid segments so the tail stays bare and
// worm-like, insect legs clustered up front instead of running the whole body.
const LEG_SEGMENTS = [1, 2, 3];

// --rot / --wiggle-delay feed the .worm-appendage keyframe in app/globals.css;
// CSSProperties doesn't type custom properties, so extend it locally.
type AppendageStyle = CSSProperties & {
  "--rot": string;
  "--wiggle-delay": string;
};

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

      {/* body: rotates to face the direction of travel; segments trail behind the
          head, local +x is "forward" once the rotation is applied */}
      <div ref={bodyRef} className="relative" style={{ transformOrigin: "0 0" }}>
        {Array.from({ length: SEGMENT_COUNT }).map((_, i) => {
          const isHead = i === 0;
          const w = isHead ? 10 * SCALE : Math.max(3 * SCALE, (7 - i * 0.7) * SCALE);
          const h = isHead ? 7 * SCALE : Math.max(3 * SCALE, (7 - i * 0.7) * SCALE);

          return (
            <div
              key={i}
              ref={registerSegment(i)}
              className="absolute rounded-full bg-red-600 dark:bg-red-500"
              style={{
                top: 0,
                left: 0,
                width: w,
                height: h,
                marginLeft: -w / 2,
                marginTop: -h / 2,
                opacity: Math.max(0.35, 1 - i * 0.1),
              }}
            >
              {isHead ? <HeadDetails w={w} h={h} /> : <Spot w={w} h={h} />}
              {LEG_SEGMENTS.includes(i) && <Legs w={w} h={h} index={i} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** A single theme-adaptive spot on a body segment — reuses `bg-fg`, so it's
 *  black in light mode and white in dark mode for free. */
function Spot({ w, h }: { w: number; h: number }) {
  const size = Math.max(1.5, Math.min(w, h) * 0.4);
  return (
    <div
      className="absolute rounded-full bg-fg"
      style={{
        width: size,
        height: size,
        left: w / 2 - size / 2,
        top: h / 2 - size / 2,
      }}
    />
  );
}

/** Eyes + antennae on the head. Eyes stay fixed white-sclera/black-pupil in
 *  either theme (distinct from the theme-adaptive body spots). */
function HeadDetails({ w, h }: { w: number; h: number }) {
  const cx = w / 2;
  const cy = h / 2;
  const eyeSize = 4;
  const pupilSize = 1.8;

  return (
    <>
      {[-1, 1].map((side) => (
        <div
          key={`eye-${side}`}
          className="absolute rounded-full bg-white"
          style={{
            width: eyeSize,
            height: eyeSize,
            left: cx + w * 0.28 - eyeSize / 2,
            top: cy + side * (h * 0.3) - eyeSize / 2,
          }}
        >
          <div
            className="absolute rounded-full bg-zinc-900"
            style={{
              width: pupilSize,
              height: pupilSize,
              left: (eyeSize - pupilSize) / 2 + 0.4,
              top: (eyeSize - pupilSize) / 2,
            }}
          />
        </div>
      ))}

      {/* antennae: thin lines from the front corners, splayed forward-outward.
          --rot is measured from "straight down"; -90deg points forward (+x). */}
      {[-1, 1].map((side) => {
        const style: AppendageStyle = {
          width: 1.2,
          height: h * 0.9,
          left: cx + w * 0.32,
          top: cy - h * 0.1,
          transformOrigin: "50% 0%",
          "--rot": side < 0 ? "-110deg" : "-70deg",
          "--wiggle-delay": side < 0 ? "0s" : "0.3s",
        };
        return (
          <div
            key={`antenna-${side}`}
            className="worm-appendage absolute rounded-full bg-fg"
            style={style}
          />
        );
      })}
    </>
  );
}

/** A left/right pair of thin insect-style legs pinned to one body segment. */
function Legs({ w, h, index }: { w: number; h: number; index: number }) {
  const cx = w / 2;
  const cy = h / 2;
  const legLength = Math.max(3, h * 0.9);

  return (
    <>
      {[-1, 1].map((side) => {
        const style: AppendageStyle = {
          width: 1,
          height: legLength,
          left: cx,
          top: cy,
          transformOrigin: "50% 0%",
          // outward + angled back (0deg/180deg would be straight out to each side)
          "--rot": side < 0 ? "155deg" : "25deg",
          "--wiggle-delay": `${index * 0.12 + (side < 0 ? 0 : 0.15)}s`,
        };
        return (
          <div
            key={`leg-${index}-${side}`}
            className="worm-appendage absolute rounded-full bg-fg"
            style={style}
          />
        );
      })}
    </>
  );
}
