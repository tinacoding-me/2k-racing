import { useEffect } from "react";
import type { RefObject } from "react";

// Một observer dùng chung. Nội dung luôn có sẵn, chỉ hiện dần khi đi vào viewport.
export function useScrollReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    let active = true;
    const registered = new WeakSet<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        if (!active) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          if (element.dataset.revealState !== "pending") continue;
          element.dataset.revealState = "visible";
          observer.unobserve(element);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );

    const register = (element: HTMLElement) => {
      if (registered.has(element)) return;
      registered.add(element);
      const rect = element.getBoundingClientRect();
      // Mở trực tiếp một anchor không để người đọc gặp khối nội dung trống.
      if (rect.top < window.innerHeight - 36 && rect.bottom > 0) {
        element.dataset.revealState = "shown";
      } else {
        element.dataset.revealState = "pending";
        observer.observe(element);
      }
    };
    const visit = (node: Node, action: (element: HTMLElement) => void) => {
      if (!(node instanceof HTMLElement)) return;
      if (node.matches("[data-reveal]")) action(node);
      node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(action);
    };
    visit(root, register);

    // Gallery có thể đổi bộ lọc/thêm ảnh: đăng ký các node mới, thả node đã gỡ.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.removedNodes.forEach((node) =>
          visit(node, (element) => observer.unobserve(element)),
        );
        record.addedNodes.forEach((node) => visit(node, register));
      }
    });
    mutations.observe(root, { childList: true, subtree: true });

    const showImmediately = (element: HTMLElement) => {
      element.dataset.revealState = "shown";
      observer.unobserve(element);
    };
    const onHashChange = () => {
      let id: string;
      try {
        id = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      if (target && root.contains(target)) visit(target, showImmediately);
    };
    const onFocus = (event: FocusEvent) => {
      let element =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-reveal]")
          : null;
      while (element && root.contains(element)) {
        showImmediately(element);
        element =
          element.parentElement?.closest<HTMLElement>("[data-reveal]") ?? null;
      }
    };
    const onAnimationEnd = (event: AnimationEvent) => {
      if (
        (event.animationName === "section-reveal-rise" ||
          event.animationName === "section-reveal-fade") &&
        event.target instanceof HTMLElement &&
        event.target.hasAttribute("data-reveal")
      ) {
        event.target.dataset.revealState = "shown";
      }
    };
    root.addEventListener("focusin", onFocus);
    root.addEventListener("animationend", onAnimationEnd);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();

    return () => {
      active = false;
      observer.disconnect();
      mutations.disconnect();
      root.removeEventListener("focusin", onFocus);
      root.removeEventListener("animationend", onAnimationEnd);
      window.removeEventListener("hashchange", onHashChange);
      root
        .querySelectorAll<HTMLElement>("[data-reveal-state]")
        .forEach((element) => delete element.dataset.revealState);
    };
  }, [rootRef]);
}
