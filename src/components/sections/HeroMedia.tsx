import { useCallback, useEffect, useRef, useState } from "react";
import { heroMedia, imageUrl } from "../../data/content";
import { Icon } from "../ui/Icon";

const PHOTO_DURATION = 6000;
const VIDEO_LOAD_TIMEOUT = 12000;

export function HeroMedia({
  onVideo,
  suspended = false,
}: {
  onVideo: () => void;
  suspended?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const active = heroMedia[index];
  const paused = userPaused || !visible || !pageVisible || suspended;

  const advance = useCallback(() => {
    setVideoPlaying(false);
    setIndex((previous) => (previous + 1) % heroMedia.length);
  }, []);

  function selectSlide(next: number) {
    if (next === index) return;
    setVideoPlaying(false);
    setIndex((next + heroMedia.length) % heroMedia.length);
  }

  // Tạm dừng khi cuộn khỏi hero, chuyển tab hoặc mở modal để tránh phát nền.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(frame.current!);
    const onVisibility = () => setPageVisible(!document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Ảnh giữ 6 giây. Video phát hết rồi chuyển; bỏ qua nếu tải/phát bị lỗi.
  useEffect(() => {
    if (paused || (active.kind === "video" && videoPlaying)) return;
    const timer = window.setTimeout(
      advance,
      active.kind === "image" ? PHOTO_DURATION : VIDEO_LOAD_TIMEOUT,
    );
    return () => window.clearTimeout(timer);
  }, [index, active.kind, paused, videoPlaying, advance]);

  useEffect(() => {
    const player = video.current;
    if (active.kind !== "video" || !player) return;
    let cancelled = false;
    if (paused) player.pause();
    else {
      player.muted = true;
      void player.play().catch(() => {
        if (!cancelled) advance();
      });
    }
    return () => {
      cancelled = true;
      player.pause();
    };
  }, [index, active.kind, paused, advance]);

  return (
    <div
      ref={frame}
      className="hero-photo-frame hero-slideshow"
      role="region"
      aria-roledescription="trình chiếu"
      aria-label="Ảnh và video thực tế tại 2K RACING"
    >
      {heroMedia.map((item, slideIndex) => (
        <div
          key={item.id}
          className={`hero-media-slide ${index === slideIndex ? "is-active" : ""}`}
          aria-hidden={index !== slideIndex}
        >
          {item.kind === "image" ? (
            <img
              className="hero-photo"
              src={imageUrl(item.image)}
              alt={item.alt}
              fetchPriority={slideIndex === 0 ? "high" : "auto"}
              loading={slideIndex === 0 ? "eager" : "lazy"}
              width="900"
              height="1200"
              onError={() => {
                if (index === slideIndex) advance();
              }}
            />
          ) : index === slideIndex ? (
            <video
              key={item.id}
              ref={video}
              className="hero-photo hero-media-video"
              muted
              playsInline
              preload="metadata"
              poster={imageUrl(item.poster)}
              aria-label={item.alt}
              onEnded={advance}
              onError={() => {
                if (!paused) advance();
              }}
              onPlaying={() => setVideoPlaying(true)}
              onWaiting={() => setVideoPlaying(false)}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          ) : null}
        </div>
      ))}
      <div className="photo-shade" />
      <span className="photo-tag">
        {active.kind === "video" ? "VIDEO TẠI XƯỞNG" : "BUILT WITH PASSION."}
      </span>
      <div className="photo-caption">
        <span>THE 2K RACING SPIRIT</span>
        <strong>
          KHÔNG CHỈ LÀ XE.
          <br />
          ĐÓ LÀ CÁ TÍNH.
        </strong>
      </div>
      <div
        className="hero-media-dots"
        role="group"
        aria-label="Chọn ảnh hoặc video"
      >
        {heroMedia.map((item, slideIndex) => (
          <button
            key={item.id}
            aria-label={`Xem ${item.kind === "image" ? "ảnh" : "video"} ${slideIndex + 1}: ${item.alt}`}
            aria-pressed={index === slideIndex}
            className={index === slideIndex ? "is-active" : ""}
            onClick={() => selectSlide(slideIndex)}
          >
            <span />
          </button>
        ))}
      </div>
      <div className="hero-media-footer">
        <button className="hero-watch" onClick={onVideo}>
          <span>
            <Icon name="play" size={15} />
          </span>
          Xem tại xưởng
        </button>
        <div
          className="hero-media-controls"
          role="group"
          aria-label="Điều khiển trình chiếu"
        >
          <button
            onClick={() => selectSlide(index - 1)}
            aria-label="Ảnh hoặc video trước"
          >
            <Icon name="chevron" size={17} className="hero-media-previous" />
          </button>
          <button
            onClick={() => setUserPaused((previous) => !previous)}
            aria-label={
              userPaused ? "Tiếp tục trình chiếu" : "Tạm dừng trình chiếu"
            }
            aria-pressed={userPaused}
          >
            <Icon name={userPaused ? "play" : "pause"} size={17} />
          </button>
          <button
            onClick={() => selectSlide(index + 1)}
            aria-label="Ảnh hoặc video tiếp theo"
          >
            <Icon name="chevron" size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
