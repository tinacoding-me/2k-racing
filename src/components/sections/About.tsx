import { imageUrl } from "../../data/content";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";

export function About({ onVideo }: { onVideo: () => void }) {
  return (
    <section id="gioi-thieu" className="section-pad about-section">
      <div className="site-container about-grid" data-reveal>
        <div className="about-image">
          <img
            src={imageUrl("honda-lead-detail")}
            alt="Cận cảnh xe Honda LEAD tại cửa hàng 2K RACING"
            width="700"
            height="850"
            loading="lazy"
          />
          <div className="about-image-note">
            <span>2K RACING GARAGE</span>
            <strong>
              NƠI ĐAM MÊ
              <br />
              GẶP SỰ TỈ MỈ
            </strong>
          </div>
          <button
            className="about-play"
            onClick={onVideo}
            aria-label="Phát video tại xưởng"
          >
            <Icon name="play" size={24} />
          </button>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="CÂU CHUYỆN 2K RACING"
            title="CÙNG ĐAM MÊ"
            accent="CÙNG CHẤT XE"
          />
          <p>
            Với chúng tôi, mỗi chiếc xe đều có một câu chuyện. Và mỗi chủ xe đều
            xứng đáng có một người đồng hành hiểu mình.
          </p>
          <p>
            2K RACING là nơi bạn tìm thấy dịch vụ chăm sóc, phụ tùng và những ý
            tưởng nâng cấp dành riêng cho xế yêu. Chúng tôi bắt đầu bằng lắng
            nghe, tư vấn rõ ràng và chăm chút đến chi tiết cuối cùng.
          </p>
          <div className="about-values">
            {[
              [
                "shield",
                "RÕ RÀNG TỪ ĐẦU",
                "Trao đổi hạng mục và chi phí trước khi thực hiện.",
              ],
              [
                "wrench",
                "TẬN TÂM ĐẾN CUỐI",
                "Kiểm tra cùng khách hàng và hướng dẫn sau bàn giao.",
              ],
            ].map(([icon, title, text]) => (
              <div key={title}>
                <Icon name={icon as "shield" | "wrench"} size={24} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#lien-he" className="text-link">
            Ghé xưởng, trò chuyện về chiếc xe của bạn
            <Icon name="message" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
