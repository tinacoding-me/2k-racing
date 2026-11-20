import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { navigation } from "../data/content";

// Xác định section theo vị trí thực tế dưới sticky header, kể cả sau khi đổi bố cục.
export function useActiveSection(headerRef: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(navigation[0][1]);

  useEffect(() => {
    let frame: number | null = null;

    const update = () => {
      frame = null;
      const activationLine =
        (headerRef.current?.getBoundingClientRect().height ?? 0) + 24;
      let current = navigation[0][1];

      // Đọc DOM hiện tại thay vì giữ tham chiếu tới section đã bị thay thế.
      for (const [, hash] of navigation) {
        const section = document.getElementById(hash.slice(1));
        if (section && section.getBoundingClientRect().top <= activationLine)
          current = hash;
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        current = navigation[navigation.length - 1][1];
      }
      setActive((previous) => (previous === current ? previous : current));
    };

    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("load", schedule);
    schedule();

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("load", schedule);
    };
  }, [headerRef]);

  return active;
}
