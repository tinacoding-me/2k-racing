import { shop } from "../../data/content";
import { Icon } from "../ui/Icon";
import { HeroMedia } from "./HeroMedia";

export function Hero({
  onVideo,
  mediaPaused = false,
}: {
  onVideo: () => void;
  mediaPaused?: boolean;
}) {
  return (
    <section className="hero" id="trang-chu" aria-labelledby="hero-heading">
      <div className="hero-grid-line" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span /> MOTORCYCLE SERVICE & CUSTOM
          </div>
          <h1 id="hero-heading">
            CHẤT RIÊNG
            <br />
            TRÊN TỪNG
            <br />
            <em>CHUYỂN ĐỘNG.</em>
          </h1>
          <p className="hero-subheading">2K RACING — ĐỈNH CAO ĐỘ XE SÀI GÒN</p>
          <p className="hero-description">
            Từ một chi tiết nhỏ đến diện mạo hoàn toàn mới.
            <br className="desktop-break" /> Chăm xe bằng sự tận tâm. Nâng cấp
            bằng đam mê.
          </p>
          <ul className="hero-checks">
            <li>
              <Icon name="check" size={16} />
              Tư vấn đúng nhu cầu, rõ từng hạng mục
            </li>
            <li>
              <Icon name="check" size={16} />
              Chăm chút từ thi công đến bàn giao
            </li>
          </ul>
          <div className="hero-actions flex flex-wrap gap-3">
            <a className="button button-red" href="#dich-vu">
              Khám phá dịch vụ
              <Icon name="wrench" size={18} />
            </a>
            <a className="button button-outline" href={`tel:${shop.tel}`}>
              <Icon name="phone" size={18} />
              Gọi hotline
            </a>
          </div>
          <div className="hero-trust">
            <span>
              <Icon name="shield" size={18} />
              TƯ VẤN MINH BẠCH
            </span>
            <i />
            <span>
              <Icon name="gear" size={18} />
              CHỈN CHU TỪ CHI TIẾT
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <svg
            className="hero-wordmark"
            viewBox="0 0 1200 280"
            aria-hidden="true"
            focusable="false"
          >
            <text
              x="600"
              y="235"
              textAnchor="middle"
              textLength="1140"
              lengthAdjust="spacingAndGlyphs"
            >
              2K RACING
            </text>
          </svg>
          <HeroMedia onVideo={onVideo} suspended={mediaPaused} />
          <div className="hero-side-label">SAIGON, VIETNAM / EST. PASSION</div>
          <span className="hero-corner" aria-hidden="true" />
        </div>
      </div>
      <div className="hero-bottom">
        <div className="site-container flex items-center justify-between gap-4">
          <span>
            YOUR BIKE. YOUR STYLE. <strong>OUR PASSION.</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
