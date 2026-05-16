"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface CarouselOptions {
  total: number;
  /** Slides visible on mobile (< 1024px). Default 1. */
  mobileSPV?: number;
  /** Slides visible on desktop (≥ 1024px). Default 3. */
  desktopSPV?: number;
  autoplayDelay?: number;
  loop?: boolean;
}

export function useCarousel({
  total,
  mobileSPV = 1,
  desktopSPV = 3,
  autoplayDelay,
  loop = true,
}: CarouselOptions) {
  const [spv, setSpv] = useState(mobileSPV); // slides per view — SSR-safe default
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);

  // Breakpoint detection (client-only)
  useEffect(() => {
    const check = () =>
      setSpv(window.innerWidth >= 1024 ? desktopSPV : mobileSPV);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, [mobileSPV, desktopSPV]);

  const totalPages = Math.ceil(total / spv);
  const totalSlots = totalPages * spv; // padded to full pages

  // Clamp page when spv changes
  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  const next = useCallback(
    () =>
      setPage((p) =>
        loop ? (p + 1) % totalPages : Math.min(p + 1, totalPages - 1)
      ),
    [totalPages, loop]
  );

  const prev = useCallback(
    () =>
      setPage((p) =>
        loop
          ? (p - 1 + totalPages) % totalPages
          : Math.max(p - 1, 0)
      ),
    [totalPages, loop]
  );

  const goTo = useCallback(
    (i: number) => setPage(Math.max(0, Math.min(i, totalPages - 1))),
    [totalPages]
  );

  // Autoplay
  useEffect(() => {
    if (!autoplayDelay || paused || totalPages <= 1) return;
    const id = setInterval(next, autoplayDelay);
    return () => clearInterval(id);
  }, [autoplayDelay, paused, next, totalPages]);

  // Touch swipe handlers
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      touchX.current = e.touches[0].clientX;
    },
    []
  );

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = touchX.current - e.changedTouches[0].clientX;
      if (dx > 40) next();
      else if (dx < -40) prev();
    },
    [next, prev]
  );

  /*
   * CSS-based translation formula (no ResizeObserver needed):
   *
   * Track width  = totalPages * 100%  (of overflow container)
   * Item width   = (100 / totalSlots)%  (of track)
   *              = (100/totalSlots) * totalPages * %container
   *              = (1/spv) * %container  ✓
   *
   * translateX to reach page `p`:
   *   move = p * containerWidth
   *   as % of track: p / totalPages * 100%
   */
  const trackStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "stretch",
    width: `${totalPages * 100}%`,
  };

  const translateX = totalPages > 0 ? `${-(page / totalPages) * 100}%` : "0%";

  const itemWidth = totalSlots > 0 ? `${100 / totalSlots}%` : "auto";

  return {
    spv,
    page,
    totalPages,
    totalSlots,
    next,
    prev,
    goTo,
    setPaused,
    onTouchStart,
    onTouchEnd,
    trackStyle,
    translateX,
    itemWidth,
  };
}
