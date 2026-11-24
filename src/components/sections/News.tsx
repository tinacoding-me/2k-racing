import { articles, imageUrl } from "../../data/content";
import type { Article } from "../../data/content";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";

export function News({ onArticle }: { onArticle: (article: Article) => void }) {
  return (
    <section id="kinh-nghiem" className="section-pad news-section">
      <div className="site-container">
        <div className="heading-row" data-reveal>
          <SectionHeading
            eyebrow="GÓC CHĂM XE"
            title="HIỂU XE HƠN"
            accent="YÊU XE HƠN"
          />
          <p>
            Kinh nghiệm và những điều hữu ích
            <br />
            cho người bạn đồng hành mỗi ngày.
          </p>
        </div>
        <div className="news-grid">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={index === 0 ? "news-card news-featured" : "news-card"}
              data-reveal
            >
              <button
                className="news-image"
                onClick={() => onArticle(article)}
                aria-label={`Đọc bài: ${article.title}`}
              >
                <img
                  src={imageUrl(article.image)}
                  alt={article.title}
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </button>
              <div className="news-copy">
                <div className="news-meta">
                  <span>{article.label}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3>
                  <button onClick={() => onArticle(article)}>
                    {article.title}
                  </button>
                </h3>
                {index === 0 && <p>{article.intro}</p>}
                <button
                  className="text-link"
                  onClick={() => onArticle(article)}
                >
                  Đọc bài viết
                  <Icon name="plus" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
