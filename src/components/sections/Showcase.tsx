import { useState } from "react";
import { gallery, products, imageUrl } from "../../data/content";
import type { GalleryItem } from "../../data/content";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";

export function Showcase({
  onImage,
}: {
  onImage: (item: GalleryItem) => void;
}) {
  const [filter, setFilter] = useState("Tất cả");
  const [expanded, setExpanded] = useState(false);
  const filtered = gallery.filter(
    (item) => filter === "Tất cả" || item.category === filter,
  );
  const shown = expanded ? filtered : filtered.slice(0, 4);
  return (
    <>
      <section className="section-pad showcase-section" id="du-an">
        <div className="site-container">
          <div className="heading-row" data-reveal>
            <SectionHeading
              eyebrow="TỪ XƯỞNG 2K RACING"
              title="XE THẬT"
              accent="CHẤT THẬT"
            />
            <span className="image-note">
              <span />
              Hình ảnh thực tế tại cửa hàng
            </span>
          </div>
          <div
            className="gallery-filters"
            data-reveal
            role="group"
            aria-label="Lọc hình ảnh"
          >
            {["Tất cả", "Xe hoàn thiện", "Sơn & decal", "Phụ tùng"].map(
              (item) => (
                <button
                  key={item}
                  className={filter === item ? "selected" : ""}
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setExpanded(false);
                  }}
                >
                  {item}
                </button>
              ),
            )}
          </div>
          <div className="gallery-grid">
            {shown.map((item) => (
              <button
                className="gallery-card"
                data-reveal="fade"
                key={item.image}
                onClick={() => onImage(item)}
              >
                <img
                  src={imageUrl(item.image)}
                  alt={item.title}
                  width="600"
                  height="750"
                  loading="lazy"
                />
                <span className="gallery-zoom">
                  <Icon name="plus" size={22} />
                </span>
                <span className="gallery-caption">
                  <small>{item.category}</small>
                  <strong>{item.title}</strong>
                </span>
              </button>
            ))}
          </div>
          {filtered.length > 4 && (
            <div className="text-center mt-8">
              <button
                className="button button-outline"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Thu gọn hình ảnh" : "Xem thêm hình ảnh"}
                <Icon name={expanded ? "close" : "plus"} size={17} />
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="section-pad parts-section" id="phu-tung">
        <div className="site-container">
          <div className="heading-row" data-reveal>
            <SectionHeading
              eyebrow="CHỌN ĐÚNG. CHẠY CHẤT."
              title="CHI TIẾT NHỎ"
              accent="KHÁC BIỆT LỚN"
            />
            <p>
              Phụ tùng phù hợp với xe.
              <br />
              Cấu hình phù hợp với bạn.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <article className="product-card" key={product.image} data-reveal>
                <a
                  href="#lien-he"
                  className="product-image"
                  aria-label={`Tư vấn ${product.title}`}
                >
                  <img
                    src={imageUrl(product.image)}
                    alt={product.title}
                    width="500"
                    height="500"
                    loading="lazy"
                  />
                  <span>{product.label}</span>
                </a>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <a className="text-link" href="#lien-he">
                    Tư vấn sản phẩm
                    <Icon name="plus" size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="parts-note" data-reveal>
            <Icon name="shield" size={18} />
            <span>
              Mỗi dòng xe có một cấu hình phù hợp. Liên hệ 2K để được tư vấn chi
              tiết và báo giá.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
