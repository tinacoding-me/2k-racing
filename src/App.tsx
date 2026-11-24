import { useRef, useState } from "react";
import { Header } from "./components/layout/Header";
import { BrandRail } from "./components/layout/BrandRail";
import { useHeroHeader } from "./hooks/useHeroHeader";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { BrandMarquee } from "./components/sections/BrandMarquee";
import { Services } from "./components/sections/Services";
import { About } from "./components/sections/About";
import { Showcase } from "./components/sections/Showcase";
import { News } from "./components/sections/News";
import { Contact } from "./components/sections/Contact";
import { VideoPlayer } from "./components/sections/VideoPlayer";
import { Modal } from "./components/ui/Modal";
import { Icon } from "./components/ui/Icon";
import { imageUrl } from "./data/content";
import type { Article, Service, GalleryItem } from "./data/content";

type ActiveModal =
  | { kind: "service"; data: Service }
  | { kind: "article"; data: Article }
  | { kind: "image"; data: GalleryItem }
  | { kind: "video" }
  | null;
export default function App() {
  const [modal, setModal] = useState<ActiveModal>(null);
  const heroMode = useHeroHeader();
  const mainRef = useRef<HTMLElement>(null);
  useScrollReveal(mainRef);
  const openVideo = () => setModal({ kind: "video" });
  const title =
    modal?.kind === "video" ? "CHUYỆN TẠI XƯỞNG" : modal?.data.title || "";
  return (
    <>
      <a className="skip-link" href="#noi-dung">
        Chuyển đến nội dung chính
      </a>
      <Header heroMode={heroMode} />
      <BrandRail heroMode={heroMode} />
      <main id="noi-dung" ref={mainRef}>
        <Hero onVideo={openVideo} mediaPaused={modal !== null} />
        <BrandMarquee />
        <About onVideo={openVideo} />
        <Services onService={(data) => setModal({ kind: "service", data })} />
        <Showcase onImage={(data) => setModal({ kind: "image", data })} />
        <News onArticle={(data) => setModal({ kind: "article", data })} />
        <Contact />
      </main>
      <Footer />
      {modal && (
        <Modal
          title={title}
          onClose={() => setModal(null)}
          className={
            modal.kind === "image"
              ? "image-modal"
              : modal.kind === "video"
                ? "video-modal"
                : ""
          }
        >
          {modal.kind === "service" && (
            <div className="service-detail">
              <div className="service-detail-icon">
                <Icon name={modal.data.icon} size={42} />
              </div>
              <p>{modal.data.description}</p>
              <h3>Cùng 2K chuẩn bị cho chiếc xe của bạn</h3>
              <ul>
                {modal.data.includes.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="muted">
                Chi phí và thời gian thực hiện được tư vấn sau khi kiểm tra xe.
              </p>
              <a
                className="button button-red mt-6"
                href="#lien-he"
                onClick={() => setModal(null)}
              >
                <Icon name="phone" size={18} />
                Liên hệ tư vấn
              </a>
            </div>
          )}
          {modal.kind === "article" && (
            <article className="article-detail">
              <img src={imageUrl(modal.data.image)} alt={modal.data.title} />
              <div className="news-meta mt-6">
                <span>{modal.data.label}</span>
                <span>{modal.data.readTime}</span>
              </div>
              <p className="article-intro">{modal.data.intro}</p>
              {modal.data.paragraphs.map((paragraph) => (
                <section key={paragraph.heading}>
                  <h3>{paragraph.heading}</h3>
                  <p>{paragraph.text}</p>
                </section>
              ))}
              <a
                className="button button-red mt-6"
                href="#lien-he"
                onClick={() => setModal(null)}
              >
                Trao đổi với 2K RACING
                <Icon name="message" size={18} />
              </a>
            </article>
          )}
          {modal.kind === "image" && (
            <figure className="lightbox">
              <img src={imageUrl(modal.data.image)} alt={modal.data.title} />
              <figcaption>{modal.data.caption}</figcaption>
            </figure>
          )}
          {modal.kind === "video" && <VideoPlayer />}
        </Modal>
      )}
    </>
  );
}
