"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";

type WormWanderOptions = {
  paused: boolean;
  segmentCount: number;
};

type WormWanderApi = {
  containerRef: RefObject<HTMLDivElement | null>;
  bodyRef: RefObject<HTMLDivElement | null>;
  registerSegment: (index: number) => (el: HTMLDivElement | null) => void;
};

const EDGE_PADDING = 24;
const NAV_TOP_BAND = 96;
const NAV_LEFT_BAND_MD = 96;
const MD_BREAKPOINT = 768;
const MIN_SPEED = 40;
const MAX_SPEED = 90;
const MIN_PAUSE_MS = 300;
const MAX_PAUSE_MS = 900;
const ROTATE_DURATION = 0.35; // sec — how long a heading change takes to ease in
const SEGMENT_SPACING = 6; // px between segments along the spine
const WAVE_AMPLITUDE = 3; // px of perpendicular sway at the tail
const WAVE_FREQUENCY = 0.5; // wave cycles per segment index
const WAVE_SPEED = 0.12; // rad of phase advanced per px travelled (ties sway to movement)

function normalizeAngle(angle: number) {
  let a = angle;
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

export function useWormWander({
  paused,
  segmentCount,
}: WormWanderOptions): WormWanderApi {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const segmentEls = useRef<(HTMLDivElement | null)[]>([]);
  const pausedRef = useRef(paused);
  const posTweenRef = useRef<gsap.core.Tween | null>(null);
  const angleTweenRef = useRef<gsap.core.Tween | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    pausedRef.current = paused;
    if (paused) {
      posTweenRef.current?.pause();
      angleTweenRef.current?.pause();
      delayedCallRef.current?.pause();
    } else {
      posTweenRef.current?.resume();
      angleTweenRef.current?.resume();
      delayedCallRef.current?.resume();
    }
  }, [paused]);

  const registerSegment = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      segmentEls.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    const body = bodyRef.current;
    if (!container || !body) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let cancelled = false;

    const pos = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
    const headingState = { angle: 0 };
    let lastPhaseX = pos.x;
    let lastPhaseY = pos.y;
    let phase = 0;

    function applyTransform() {
      container!.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    }

    function applyRotation() {
      body!.style.transform = `rotate(${headingState.angle}rad)`;
    }

    function updateSway() {
      const dx = pos.x - lastPhaseX;
      const dy = pos.y - lastPhaseY;
      lastPhaseX = pos.x;
      lastPhaseY = pos.y;
      phase += Math.hypot(dx, dy) * WAVE_SPEED;

      for (let i = 0; i < segmentCount; i++) {
        const el = segmentEls.current[i];
        if (!el) continue;
        // head (i=0) stays on the spine; sway grows toward the tail, like a real crawl
        const sway =
          Math.sin(phase - i * WAVE_FREQUENCY) *
          WAVE_AMPLITUDE *
          (i / segmentCount);
        el.style.transform = `translate(${-i * SEGMENT_SPACING}px, ${sway}px)`;
      }
    }

    function nextLeg() {
      if (cancelled) return;

      const isMdUp = window.innerWidth >= MD_BREAKPOINT;
      const minX = isMdUp ? NAV_LEFT_BAND_MD : EDGE_PADDING;
      const minY = NAV_TOP_BAND;
      const maxX = window.innerWidth - EDGE_PADDING;
      const maxY = window.innerHeight - EDGE_PADDING;
      const targetX = minX + Math.random() * Math.max(1, maxX - minX);
      const targetY = minY + Math.random() * Math.max(1, maxY - minY);
      const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);

      const dx = targetX - pos.x;
      const dy = targetY - pos.y;
      const distance = Math.hypot(dx, dy);
      const duration = Math.max(0.05, distance / speed);

      // shortest angular delta, added onto the unbounded running angle so
      // gsap always turns the short way instead of unwrapping through ±π
      const targetHeading = Math.atan2(dy, dx);
      const angleDiff = normalizeAngle(
        targetHeading - normalizeAngle(headingState.angle)
      );
      const nextAngle = headingState.angle + angleDiff;

      // start turning immediately on arrival — overlaps with movement instead
      // of waiting for the pause to finish, so it never freezes mid-turn
      angleTweenRef.current?.kill();
      angleTweenRef.current = gsap.to(headingState, {
        angle: nextAngle,
        duration: ROTATE_DURATION,
        ease: "sine.out",
        onUpdate: applyRotation,
      });

      posTweenRef.current?.kill();
      posTweenRef.current = gsap.to(pos, {
        x: targetX,
        y: targetY,
        duration,
        ease: "power1.inOut",
        onUpdate: applyTransform,
        onComplete: () => {
          if (cancelled) return;
          const pauseMs =
            MIN_PAUSE_MS + Math.random() * (MAX_PAUSE_MS - MIN_PAUSE_MS);
          delayedCallRef.current?.kill();
          delayedCallRef.current = gsap.delayedCall(pauseMs / 1000, nextLeg);
        },
      });
    }

    gsap.ticker.add(updateSway);
    nextLeg();

    return () => {
      cancelled = true;
      gsap.ticker.remove(updateSway);
      posTweenRef.current?.kill();
      angleTweenRef.current?.kill();
      delayedCallRef.current?.kill();
    };
  }, [segmentCount]);

  return { containerRef, bodyRef, registerSegment };
}
