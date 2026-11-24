import { useCallback, useEffect, useState } from "react";

export type HeroIntroPhase = "waiting" | "racing" | "ready";

// Một đồng hồ chung cho toàn bộ sân khấu hero, không chạy lại theo slideshow.
export function useHeroIntro() {
  const [phase, setPhase] = useState<HeroIntroPhase>("waiting");
  const complete = useCallback(() => setPhase("ready"), []);

  useEffect(() => {
    let cancelled = false;
    let started = false;
    let frame: number | undefined;
    const begin = () => {
      if (cancelled || started) return;
      started = true;
      window.clearTimeout(deadline);
      frame = window.requestAnimationFrame(() => {
        if (!cancelled) setPhase("racing");
      });
    };
    // Tránh đổi font trong lúc chữ chạy, nhưng không chờ mạng quá một giây.
    const deadline = window.setTimeout(begin, 1000);
    if (document.fonts) {
      void document.fonts
        .load('italic 800 100px "Barlow Condensed"')
        .then(begin, begin);
    } else begin();

    return () => {
      cancelled = true;
      window.clearTimeout(deadline);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (phase !== "racing") return;
    // Dọn trạng thái nếu trình duyệt bỏ qua animationend khi tab bị treo nền.
    const fallback = window.setTimeout(complete, 3000);
    return () => window.clearTimeout(fallback);
  }, [phase, complete]);

  return { phase, complete };
}
