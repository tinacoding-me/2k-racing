import { useState } from "react";
import { imageUrl } from "../../data/content";

export function VideoPlayer() {
  const [video, setVideo] = useState(1);
  return (
    <div className="video-content">
      <p className="muted mb-5">
        Một góc nhìn thực tế từ 2K RACING. Bật âm thanh trên trình phát để nghe
        video.
      </p>
      <video
        key={video}
        controls
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster={imageUrl("honda-lead-detail")}
      >
        <source src={`/media/videos/workshop-0${video}.mp4`} type="video/mp4" />
        Trình duyệt không hỗ trợ video.{" "}
        <a href={`/media/videos/workshop-0${video}.mp4`}>Mở video</a>
      </video>
      <div
        className="gallery-filters mt-5"
        role="group"
        aria-label="Chọn video"
      >
        {[1, 2].map((item) => (
          <button
            key={item}
            aria-pressed={item === video}
            className={item === video ? "selected" : ""}
            onClick={() => setVideo(item)}
          >
            Video tại xưởng {item}
          </button>
        ))}
      </div>
    </div>
  );
}
