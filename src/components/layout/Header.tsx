import { useEffect, useRef, useState } from "react";
import { navigation, shop, imageUrl } from "../../data/content";
import { Icon } from "../ui/Icon";
import { useActiveSection } from "../../hooks/useActiveSection";

export function Header({ heroMode }: { heroMode: boolean }) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(headerRef);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent | FocusEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus({ preventScroll: true });
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  return (
    <header
      ref={headerRef}
      className={`site-header ${heroMode ? "is-hero" : "is-compact"}`}
    >
      <div className="topbar" inert={heroMode} aria-hidden={heroMode}>
        <div className="site-container flex items-center justify-between gap-4">
          <span>CHUYÊN ĐỒ CHƠI & DỊCH VỤ XE MÁY</span>
          <div className="flex items-center gap-6">
            <span className="topbar-hours">
              <Icon name="clock" size={13} /> {shop.hours} · THỨ 2 – CHỦ NHẬT
            </span>
            <a href={`tel:${shop.tel}`}>
              <Icon name="phone" size={13} /> {shop.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="site-container header-main">
        <a
          href="#trang-chu"
          className="brand"
          aria-label="2K RACING — Trang chủ"
          onClick={() => setOpen(false)}
        >
          <img
            src={imageUrl("logo")}
            alt="Logo 2K RACING"
            width="58"
            height="58"
          />
          <span>
            <strong>
              2K <em>RACING</em>
            </strong>
            <small>
              UY TÍN <b>•</b> CHẤT LƯỢNG
            </small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {navigation.map(([label, hash]) => (
            <a
              key={hash}
              className={active === hash ? "active" : ""}
              href={hash}
              aria-current={active === hash ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#lien-he"
            className="button button-red header-cta"
            aria-label="Liên hệ ngay"
            onClick={() => setOpen(false)}
          >
            <Icon name="phone" size={17} />
            <span>Liên hệ ngay</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="icon-button mobile-toggle"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-dropdown" id="mobile-navigation">
          <nav className="site-container" aria-label="Điều hướng di động">
            {navigation.map(([label, hash]) => (
              <a
                key={hash}
                href={hash}
                className={active === hash ? "active" : ""}
                aria-current={active === hash ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
                <Icon name="chevron" size={16} />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
