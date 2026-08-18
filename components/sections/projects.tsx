import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <Section id="projects">
      <Heading en="projects" deva="परियोजना" />
      <div className="max-w-2xl mx-auto space-y-12">
        {projects.map((project, i) => {
          const Wrapper = project.link ? "a" : "div";
          const linkProps = project.link
            ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={i}
              {...linkProps}
              className={`group block border-b border-border pb-8 ${
                i === projects.length - 1 ? "border-b-0 pb-0" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-display font-medium text-fg">
                  {project.title}
                </h3>
                {project.link && (
                  <ArrowUpRight className="shrink-0 mt-1 h-5 w-5 text-muted transition-colors group-hover:text-fg" />
                )}
              </div>
              <p className="text-sm text-muted mt-4">{project.description}</p>
              {!project.link && (
                <p className="text-sm text-muted mt-2">TODO: add the Chrome Web Store listing URL.</p>
              )}
              <div className="flex flex-wrap gap-4 mt-6">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-sm text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}
