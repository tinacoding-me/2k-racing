import type { CSSProperties } from "react";
import type { HeroIntroPhase } from "../../hooks/useHeroIntro";

const WORDMARK = "2K RACING";
const LETTER_COUNT = WORDMARK.replace(/\s/g, "").length;
const characters = [...WORDMARK].map((character, index) => ({
  character,
  order: WORDMARK.slice(0, index).replace(/\s/g, "").length,
}));

export function RacingWordmark({
  phase,
  onComplete,
}: {
  phase: HeroIntroPhase;
  onComplete: () => void;
}) {
  return (
    <div
      className={`showreel-wordmark racing-wordmark is-${phase}`}
      aria-hidden="true"
    >
      {characters.map(({ character, order }, index) =>
        character === " " ? (
          <span className="racing-wordmark-gap" key={index}>
            {"\u00a0"}
          </span>
        ) : (
          <span
            className="racing-letter"
            key={index}
            // G xuất phát đầu tiên; số 2 xuất phát sau cùng.
            style={
              {
                "--race-delay": `${200 + (LETTER_COUNT - 1 - order) * 90}ms`,
              } as CSSProperties
            }
            onAnimationEnd={(event) => {
              // Chờ số 2 kết thúc, tránh dừng cả intro ngay khi G vừa vào vị trí.
              if (order === 0 && event.animationName === "racing-letter-arrive")
                onComplete();
            }}
          >
            {character}
          </span>
        ),
      )}
    </div>
  );
}
