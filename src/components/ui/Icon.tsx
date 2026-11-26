import type { CSSProperties } from "react";

// Bộ icon SVG tự xây dựng, không dùng thư viện component.
export type IconName =
  | "facebook"
  | "tiktok"
  | "phone"
  | "calendar"
  | "menu"
  | "close"
  | "check"
  | "play"
  | "pause"
  | "shield"
  | "paint"
  | "wrench"
  | "gear"
  | "sun"
  | "light"
  | "palette"
  | "truck"
  | "pin"
  | "clock"
  | "chevron"
  | "plus"
  | "copy"
  | "message"
  | "bike"
  | "mail"
  | "volume";
const paths: Record<IconName, React.ReactNode> = {
  tiktok: (
    <path
      d="M16 3c.4 2.3 1.7 3.7 4 4v3.2a8.3 8.3 0 0 1-4-1.3v6.6a6 6 0 1 1-5-5.9v3.3a2.8 2.8 0 1 0 1.8 2.6V3H16Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  facebook: (
    <path
      d="M13.25 20.75v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.35c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.4h-2.7v3.1h2.7v8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  phone: (
    <path d="m7 3 3 5-2.5 2.5a14 14 0 0 0 6 6L16 14l5 3-1 4C10 22 2 14 3 4z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 11h18m-14 4h3m4 0h3m-10 3h3" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  play: <path d="m9 5 11 7-11 7z" />,
  pause: <path d="M8 5v14M16 5v14" strokeWidth="3" />,
  shield: (
    <>
      <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  paint: (
    <>
      <path d="M4 3h12v6H4zM16 6h4v7h-9v4m-2 0h4v5H9z" />
    </>
  ),
  wrench: (
    <path d="M14 4a6 6 0 0 0-7 8L2 17a3 3 0 0 0 5 5l5-6a6 6 0 0 0 8-8l-4 4-4-4z" />
  ),
  gear: (
    <>
      <path d="m9 3-1 3-3 1-2 3 2 2v3l2 3 3-1 2 4 3-1 1-3 3-1 2-3-2-2V8l-3-2-3 1-2-4z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  light: (
    <>
      <path d="M14 5C1 4 1 20 14 19zm4 0 4-2m-4 7h4m-4 5h4m-4 4 4 2" />
    </>
  ),
  palette: (
    <>
      <path d="M21 12a9 9 0 1 0-9 9h2a2 2 0 0 0 1-4c-2-1 0-4 2-3h2a2 2 0 0 0 2-2Z" />
      <path d="M7 8h.01M12 6h.01M17 8h.01M6 13h.01" strokeWidth="3" />
    </>
  ),
  truck: (
    <>
      <path d="M2 5h12v13H2zm12 5h4l4 5v3h-8" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6h4" />
    </>
  ),
  chevron: <path d="m9 5 7 7-7 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  copy: (
    <>
      <rect x="8" y="8" width="13" height="13" rx="2" />
      <path d="M16 8V3H3v13h5" />
    </>
  ),
  message: (
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.35 0-2.65-.32-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" />
  ),
  bike: (
    <>
      <circle cx="5" cy="17" r="4" />
      <circle cx="19" cy="17" r="4" />
      <path d="m5 17 5-9h5l4 9M8 6h4m2-3h3l2 7M8 12h7l-4 5H5" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 5 10 8L22 5" />
    </>
  ),
  volume: (
    <>
      <path d="M4 9h4l5-5v16l-5-5H4zM17 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
    </>
  ),
};
export function Icon({
  name,
  size = 20,
  className = "",
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
