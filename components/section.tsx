import { ReactNode } from "react";

/**
 * The one spacing rule every section obeys (plan B2). Never override padding
 * or max-width ad hoc in a section component — extend this shell instead.
 */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`min-h-screen px-4 md:px-24 py-16 md:py-24 pt-24 scroll-mt-24 ${className}`}
    >
      <div className="max-w-5xl mx-auto w-full">{children}</div>
    </section>
  );
}
