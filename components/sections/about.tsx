import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { about } from "@/content/site";

export function About() {
  const [p1, p2, p3, p4] = about.paragraphs;

  return (
    <Section id="about">
      <Heading en="about" deva="बारेमा" className="max-w-4xl" />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <p className="text-sm text-fg">{p1}</p>
        </div>
        <div className="space-y-8 md:mt-32">
          <p className="text-sm text-fg">{p2}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
        <div className="space-y-8">
          <p className="text-sm text-fg">{p3}</p>
        </div>
        <div className="space-y-8 md:mt-32">
          <p className="text-sm text-fg">{p4}</p>
        </div>
      </div>
    </Section>
  );
}
