import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { stack } from "@/content/site";

export function Stack() {
  return (
    <Section id="stack">
      <Heading en="stack" deva="प्रविधि" />
      <div className="max-w-2xl mx-auto grid gap-y-8">
        {stack.map((row, i) => (
          <div key={i} className="grid md:grid-cols-[10rem_1fr] gap-y-2 gap-x-8">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {row.label}
              <span className="block font-deva normal-case tracking-normal text-muted/80 mt-1">
                {row.labelDeva}
              </span>
            </p>
            <p className="text-sm text-fg leading-relaxed">{row.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
