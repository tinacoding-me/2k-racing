// Hai nhóm giống nhau giúp dải chữ nối vòng liên tục, không bị giật khi chạy lại.
export function BrandMarquee() {
  return (
    <div className="brand-ribbon" aria-hidden="true">
      <div className="brand-marquee-track">
        {[0, 1].map((group) => (
          <div className="brand-marquee-group" key={group}>
            {Array.from({ length: 10 }, (_, index) => (
              <span key={index}>2K RACING</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
