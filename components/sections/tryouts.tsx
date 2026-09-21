"use client";

import { useState } from "react";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { MediaImage } from "@/components/media-image";
import { MediaVideo } from "@/components/media-video";
import { MediaLightbox, type LightboxState } from "@/components/media-lightbox";
import { tryouts } from "@/content/site";

export function Tryouts() {
  const [open, setOpen] = useState<LightboxState>(null);

  return (
    <Section id="tryouts">
      <Heading en="tryouts" deva="प्रयास" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tryouts.images.map(({ base, alt }, i) => (
          <button
            key={base}
            type="button"
            onClick={() => setOpen({ type: "image", index: i })}
            className="aspect-[4/5] overflow-hidden cursor-zoom-in"
          >
            <MediaImage
              base={base}
              alt={alt}
              priority={i < 2}
              className="w-full h-full object-cover transition-opacity duration-150 hover:opacity-80"
            />
          </button>
        ))}
        {tryouts.videos.map((video, i) => (
          <button
            key={video}
            type="button"
            onClick={() => setOpen({ type: "video", index: i })}
            className="aspect-[4/5] overflow-hidden cursor-zoom-in"
          >
            <MediaVideo base={video} poster={video} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      <MediaLightbox open={open} onOpenChange={setOpen} />
    </Section>
  );
}