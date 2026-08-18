import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { tryouts } from "@/content/site";

const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;

export function Tryouts() {
  const media = [...tryouts.images, ...tryouts.videos].map((src) => ({
    src,
    isVideo: VIDEO_EXT.test(src),
  }));

  return (
    <Section id="tryouts">
      <Heading en="tryouts" deva="प्रयास" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, i) => (
          <div key={i} className="aspect-[4/5] overflow-hidden">
            {item.isVideo ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-opacity duration-150 hover:opacity-80"
              />
            ) : (
              <img
                src={item.src}
                alt="Utsab — tryouts"
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-150 hover:opacity-80"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
