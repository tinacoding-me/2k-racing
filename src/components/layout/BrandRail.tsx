// Chữ thương hiệu dọc cố định ở lề trái khi cuộn xuống.
export function BrandRail({ heroMode }: { heroMode: boolean }) {
  return (
    <div
      className={`brand-rail ${heroMode ? "brand-rail--hero" : "brand-rail--compact"}`}
      aria-hidden="true"
    >
      <span className="brand-rail-word">
        <b>2K</b>RACING
      </span>
      <span className="brand-rail-location">SAIGON</span>
    </div>
  );
}
