import { useEffect, useState } from "react";

// Header trong suốt khi còn trên hero; thu gọn khi hero đã đi qua navbar.
export function useHeroHeader() {
  const [heroMode, setHeroMode] = useState(true);
  useEffect(() => {
    let frame: number | null = null;
    const update = () => {
      frame = null;
      const hero = document.getElementById("trang-chu");
      const compactHeight = window.innerWidth < 768 ? 100 : 120;
      setHeroMode(
        Boolean(hero && hero.getBoundingClientRect().bottom > compactHeight),
      );
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("load", schedule);
    schedule();
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("load", schedule);
    };
  }, []);
  return heroMode;
}
