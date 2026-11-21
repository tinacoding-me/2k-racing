import { useEffect, useState } from "react";

const COLLAPSE_AFTER = 24;
const EXPAND_BEFORE = 8;

// Thu gọn ngay khi rời đầu trang; chỉ mở lại khi về sát đầu để tránh nhấp nháy.
export function useHeroHeader() {
  const [heroMode, setHeroMode] = useState(
    () => window.scrollY <= COLLAPSE_AFTER,
  );
  useEffect(() => {
    let frame: number | null = null;
    const update = () => {
      frame = null;
      const scrollTop = Math.max(0, window.scrollY);
      setHeroMode(
        (previous) => scrollTop <= (previous ? COLLAPSE_AFTER : EXPAND_BEFORE),
      );
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("hashchange", schedule);
    window.addEventListener("load", schedule);
    window.addEventListener("pageshow", schedule);
    schedule();
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("load", schedule);
      window.removeEventListener("pageshow", schedule);
    };
  }, []);
  return heroMode;
}
