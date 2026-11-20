import { shop } from "../../data/content";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";

// Landing page: khách liên hệ trực tiếp, không thu thập hay gửi thông tin qua form.
export function Contact() {
  return (
    <section
      id="lien-he"
      className="section-pad contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="site-container contact-grid">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="TRÒ CHUYỆN CÙNG 2K RACING"
            title="CẦN TƯ VẤN?"
            accent="GỌI 2K NGAY."
          />
          <p>
            Bạn muốn hẹn lịch chăm xe? Hãy liên hệ trực tiếp qua hotline để được
            tư vấn dịch vụ và thống nhất thời gian ghé xưởng.
          </p>
          <p>
            Bạn cũng có thể nhắn Zalo để trao đổi tình trạng xe và gửi hình ảnh
            cho cửa hàng.
          </p>
        </div>
        <div className="contact-card">
          <span className="contact-card-icon">
            <Icon name="phone" size={28} />
          </span>
          <h3 id="contact-heading">HOTLINE TƯ VẤN & HẸN LỊCH</h3>
          <a className="contact-number" href={`tel:${shop.tel}`}>
            {shop.phone}
          </a>
          <div className="contact-actions">
            <a className="button button-red" href={`tel:${shop.tel}`}>
              <Icon name="phone" size={18} />
              Gọi ngay
            </a>
            <a
              className="button button-outline"
              href={shop.zalo}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="message" size={18} />
              Nhắn Zalo
            </a>
          </div>
          <div className="contact-details">
            <p>
              <Icon name="clock" size={19} />
              <span>{shop.hours} · Thứ 2 – Chủ Nhật</span>
            </p>
            <a href={shop.maps} target="_blank" rel="noreferrer">
              <Icon name="pin" size={19} />
              <span>{shop.address}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
