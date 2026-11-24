import { useState } from "react";
import { heroMedia } from "../../data/content";
import { Icon } from "../ui/Icon";
import { HeroMedia } from "./HeroMedia";
import { RacingWordmark } from "./RacingWordmark";
import { useHeroIntro } from "../../hooks/useHeroIntro";

export function Hero({
  onVideo,
  mediaPaused = false,
}: {
  onVideo: () => void;
  mediaPaused?: boolean;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeService = heroMedia[activeSlide].topic;
  const intro = useHeroIntro();

  return (
    <section
      className="cinematic-hero"
      id="trang-chu"
      aria-labelledby="hero-heading"
      data-intro={intro.phase}
    >
      {/* Các lớp poster trang trí không tham gia điều hướng hay đọc màn hình. */}
      <div className="showreel-track" aria-hidden="true" />
      <div className="showreel-topline" aria-hidden="true">
        <span>SAIGON, VIETNAM</span>
        <span>MOTORCYCLE CULTURE</span>
      </div>
      <div className="showreel-copy">
        <p className="showreel-eyebrow">
          <span /> CHẤT XE TỪ ĐAM MÊ
        </p>
        <h1 id="hero-heading">
          <span>ĐỘ CHẤT XE</span>
          <em>ĐÚNG CHẤT BẠN</em>
        </h1>
        <p className="showreel-description">
          Từ một chi tiết nhỏ đến diện mạo mới.
          <br />
          Cùng 2K làm nên chiếc xe mang chất riêng của bạn.
        </p>
        <div className="showreel-actions">
          <button className="showreel-cta" onClick={onVideo}>
            <Icon name="play" size={15} /> Khám phá xưởng
          </button>
          <a className="showreel-service-link" href="#dich-vu">
            Dịch vụ tại 2K
          </a>
        </div>
      </div>
      <RacingWordmark phase={intro.phase} onComplete={intro.complete} />
      <HeroMedia suspended={mediaPaused} onSlideChange={setActiveSlide} />
      <nav className="showreel-services" aria-label="Dịch vụ nổi bật tại 2K">
        <span className="showreel-services-label">
          CHẤT RIÊNG
          <br />
          CỦA BẠN
        </span>
        {["SƠN & DECAL", "CHĂM SÓC", "NÂNG CẤP"].map((service) => (
          <a
            key={service}
            href="#dich-vu"
            className={service === activeService ? "is-current" : ""}
          >
            {service}
          </a>
        ))}
      </nav>
      <div className="showreel-bottomline" aria-hidden="true">
        <span>CHUYÊN ĐỒ CHƠI & DỊCH VỤ XE MÁY</span>
        <span>UY TÍN — CHẤT LƯỢNG</span>
      </div>
    </section>
  );
}
