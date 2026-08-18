import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { MediaImage } from "@/components/media-image";
import { MediaVideo } from "@/components/media-video";
import { tryouts } from "@/content/site";

export function Tryouts() {
  return (
    <Section id="tryouts">
      <Heading en="tryouts" deva="प्रयास" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tryouts.images.map((base, i) => (
          <div key={base} className="aspect-[4/5] overflow-hidden">
            <MediaImage
              base={base}
              alt="Utsab — tryouts"
              priority={i < 2}
              className="w-full h-full object-cover transition-opacity duration-150 hover:opacity-80"
            />
          </div>
        ))}
        {tryouts.videos.map((video) => (
          <div key={video} className="aspect-[4/5] overflow-hidden">
            <MediaVideo base={video} poster={video} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </Section>
  );
}