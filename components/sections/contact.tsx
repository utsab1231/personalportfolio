import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { contact, person } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" className="flex flex-col justify-center">
      <Heading en="contact" deva="सम्पर्क" />
      <div className="max-w-2xl mx-auto text-center w-full">
        <p className="text-xl text-fg underline">
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </p>

        <div className="flex items-center gap-2 justify-center mt-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-fg opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fg" />
          </span>
          <p className="text-sm text-muted">
            status : {contact.status} / <span className="font-deva">{contact.statusDeva}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-8 pt-8 justify-center">
          {contact.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted hover:text-fg transition-colors text-sm px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
