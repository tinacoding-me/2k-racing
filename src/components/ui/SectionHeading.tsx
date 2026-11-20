export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>
        {title} {accent && <span>{accent}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}
