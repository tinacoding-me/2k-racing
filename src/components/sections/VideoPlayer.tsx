import { useState } from "react";
import { imageUrl, workshopVideos } from "../../data/content";

export function VideoPlayer({ initialVideoId }: { initialVideoId?: string }) {
  const [videoId, setVideoId] = useState(
    initialVideoId ?? workshopVideos[0].id,
  );
  const [failed, setFailed] = useState(false);
  const video =
    workshopVideos.find((item) => item.id === videoId) ?? workshopVideos[0];
  return (
    <div className="video-content">
      <p className="muted mb-5">
        {video.description} Bật âm thanh trên trình phát để nghe video.
      </p>
      <video
        key={video.id}
        controls
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster={imageUrl(video.poster)}
        width={video.width}
        height={video.height}
        aria-label={video.title}
        onError={() => setFailed(true)}
      >
        <source src={video.src} type="video/mp4" />
        Trình duyệt không hỗ trợ video. <a href={video.src}>Mở video</a>
      </video>
      {failed && (
        <p role="alert">
          Không phát được video.{" "}
          <a href={video.src} target="_blank" rel="noreferrer">
            Mở video trực tiếp
          </a>
        </p>
      )}
      <div
        className="gallery-filters mt-5"
        role="group"
        aria-label="Chọn video"
      >
        {workshopVideos.map((item) => (
          <button
            key={item.id}
            aria-pressed={item.id === video.id}
            className={item.id === video.id ? "selected" : ""}
            onClick={() => {
              setVideoId(item.id);
              setFailed(false);
            }}
          >
            {item.title} · {item.durationLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
