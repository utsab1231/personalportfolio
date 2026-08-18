/**
 * Nepali kicker + lowercase English section heading, per plan B3/B6.
 * `deva` sits above `en` in the small/muted register; `en` carries the
 * large/primary weight and a trailing period, matching the reference's
 * `work.` / `about.` treatment.
 */
export function Heading({
  en,
  deva,
  className = "",
}: {
  en: string;
  deva: string;
  className?: string;
}) {
  return (
    <div className={`mb-8 max-w-2xl ${className}`}>
      <p className="font-deva text-sm text-muted tracking-wide mb-2">{deva}</p>
      <h2 className="text-4xl md:text-7xl font-display font-medium lowercase text-fg">
        {en}.
      </h2>
    </div>
  );
}
