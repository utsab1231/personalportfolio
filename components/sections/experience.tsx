import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience">
      <Heading en="experience" deva="अनुभव" />
      <div className="max-w-2xl mx-auto">
        {experience.map((entry, i) => (
          <div key={i} className={i === 0 ? "" : "mt-16"}>
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                {entry.company}
              </p>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-fg">
                {entry.role}
              </h3>
              <p className="text-sm text-fg">
                {entry.dateLabelDeva ? `${entry.dateLabelDeva} · ` : ""}
                {entry.dateLabel} · {entry.location}
              </p>
              <div className="space-y-2">
                {entry.bullets.map((bullet, j) => (
                  <div key={j} className="flex gap-2 text-sm text-muted">
                    <span className="shrink-0">·</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
