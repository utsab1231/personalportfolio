"use client";

import { useEffect } from "react";
import { faviconSvgDataUri } from "@/lib/favicon";

const BLINK_MS = 600;

function getFaviconLink(): HTMLLinkElement {
  let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  return link;
}

function currentThemeColors(): { bg: string; fg: string } {
  const styles = getComputedStyle(document.documentElement);
  return {
    bg: styles.getPropertyValue("--bg").trim() || "#fbfbfb",
    fg: styles.getPropertyValue("--fg").trim() || "#09090b",
  };
}

// Blinks the browser tab favicon between an "on"/"off" screen frame — a
// small pixel computer that bleeps — recoloring itself to match whatever
// theme is currently active. Static export + inconsistent animated
// ico/gif support rule out a real animated favicon, so this swaps a plain
// <link rel="icon"> href on an interval instead, which every browser honors.
export function FaviconAnimator() {
  useEffect(() => {
    const link = getFaviconLink();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function paint(on: boolean) {
      const { bg, fg } = currentThemeColors();
      link.href = faviconSvgDataUri(bg, fg, on);
    }

    if (reduceMotion) {
      paint(true);
      return;
    }

    let on = true;
    paint(on);

    let timer: ReturnType<typeof setInterval> | null = null;
    function start() {
      timer = setInterval(() => {
        on = !on;
        paint(on);
      }, BLINK_MS);
    }
    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function handleVisibility() {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    }

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", handleVisibility);

    // Repaint immediately (don't wait for the next blink tick) when the
    // user picks a new theme from the switcher.
    function handleThemeChange() {
      paint(on);
    }
    window.addEventListener("themechange", handleThemeChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  return null;
}
