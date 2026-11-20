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
    <section
      className="cinematic-hero"
      id="trang-chu"
      aria-labelledby="hero-heading"
    >
      <HeroMedia onVideo={onVideo} suspended={mediaPaused} />
      <div className="cinematic-content">
        <p className="cinematic-eyebrow">
          <span />
          MOTORCYCLE SERVICE & CUSTOM · SAIGON
        </p>
        <h1 id="hero-heading">
          <span>CHẤT RIÊNG.</span>
          <em>TRÊN TỪNG CHUYỂN ĐỘNG.</em>
        </h1>
        <p className="cinematic-description">
          Chăm xe bằng sự tận tâm. Nâng cấp bằng đam mê.
        </p>
        <div className="cinematic-actions">
          <a className="button button-red" href="#dich-vu">
            Khám phá dịch vụ
            <Icon name="wrench" size={18} />
          </a>
          <a className="button button-outline" href={`tel:${shop.tel}`}>
            <Icon name="phone" size={18} />
            Gọi hotline
          </a>
        </div>
      </div>
    </section>
  );
}
