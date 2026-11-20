import { useState } from "react";
import { shop, imageUrl } from "../../data/content";
import { Icon } from "../ui/Icon";

export function Footer() {
  const [social, setSocial] = useState("");
  return (
    <>
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-grid">
            <div>
              <a href="#trang-chu" className="brand footer-brand">
                <img
                  src={imageUrl("logo")}
                  alt="2K RACING"
                  width="68"
                  height="68"
                  loading="lazy"
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
              <p className="footer-intro">
                Chuyên đồ chơi & dịch vụ xe máy.
                <br />
                Chất riêng trên từng chuyển động.
              </p>
              <div className="social-links" aria-label="Kết nối mạng xã hội">
                <button
                  aria-label="Thông tin Facebook 2K RACING"
                  onClick={() => setSocial("Facebook")}
                >
                  <b className="social-facebook">f</b>
                </button>
                <button
                  aria-label="Thông tin YouTube 2K RACING"
                  onClick={() => setSocial("YouTube")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="5"
                      width="20"
                      height="14"
                      rx="4"
                      fill="currentColor"
                    />
                    <path d="m10 9 6 3-6 3z" fill="#151515" />
                  </svg>
                </button>
                <button
                  aria-label="Thông tin TikTok 2K RACING"
                  onClick={() => setSocial("TikTok")}
                >
                  <b className="social-tiktok">♪</b>
                </button>
                <a
                  href={shop.zalo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat với 2K RACING trên Zalo"
                >
                  <span className="zalo-word">Zalo</span>
                </a>
              </div>
              {social && (
                <p className="social-notice" role="status">
                  Kênh {social} đang cập nhật. Bạn có thể liên hệ cửa hàng qua{" "}
                  <a href={shop.zalo} target="_blank" rel="noreferrer">
                    Zalo
                  </a>
                  .
                </p>
              )}
            </div>
            <div className="footer-contact">
              <h3>GHÉ THĂM 2K RACING</h3>
              <a href={shop.maps} target="_blank" rel="noreferrer">
                <Icon name="pin" size={19} />
                <span>{shop.address}</span>
              </a>
              <a href={`tel:${shop.tel}`}>
                <Icon name="phone" size={19} />
                <span>
                  {shop.phone}
                  <small>Hotline & Zalo</small>
                </span>
              </a>
              <div>
                <Icon name="clock" size={19} />
                <span>
                  {shop.hours}
                  <small>Thứ 2 – Chủ Nhật</small>
                </span>
              </div>
              <a
                className="text-link"
                href={shop.maps}
                target="_blank"
                rel="noreferrer"
              >
                Chỉ đường đến cửa hàng
                <Icon name="pin" size={16} />
              </a>
            </div>
            <div className="footer-map">
              <iframe
                title="Vị trí 2K RACING — 118 Hồ Tùng Mậu, Quận 1, TP.HCM"
                src="https://www.google.com/maps?q=118%20H%E1%BB%93%20T%C3%B9ng%20M%E1%BA%ADu%2C%20Qu%E1%BA%ADn%201%2C%20TP.HCM&output=embed"
                width="500"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a href={shop.maps} target="_blank" rel="noreferrer">
                <Icon name="pin" size={16} />
                118 HỒ TÙNG MẬU, QUẬN 1
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} 2K RACING. All rights reserved.</p>
            <span>BUILT FOR THE RIDE. MADE WITH PASSION.</span>
            <a href="#trang-chu">
              Về đầu trang
              <Icon name="chevron" size={16} />
            </a>
          </div>
        </div>
      </footer>
      <div className="floating-hotline">
        <a
          href={`tel:${shop.tel}`}
          aria-label={`Gọi hotline tư vấn ${shop.phone}`}
        >
          <span className="floating-phone">
            <Icon name="phone" size={22} />
          </span>
          <span>
            <small>HOTLINE TƯ VẤN</small>
            <strong>{shop.phone}</strong>
          </span>
        </a>
      </div>
      <div className="floating-social">
        <a
          className="floating-zalo"
          href={shop.zalo}
          target="_blank"
          rel="noreferrer"
          aria-label="Liên hệ Zalo 2K RACING"
        >
          Zalo
        </a>
        <a
          className="floating-chat"
          href="#lien-he"
          aria-label="Liên hệ 2K RACING"
        >
          <Icon name="message" size={25} />
        </a>
      </div>
    </>
  );
}
