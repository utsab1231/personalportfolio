// Responsive, format-negotiated image component for the tryouts gallery.
//
// Emits a <picture> with AVIF → WebP → JPEG <source> elements and a
// srcset/sizes pair so the browser downloads only the format and width
// it actually needs. Widths must match WIDTHS in scripts/optimize-media.mjs.

const IMAGE_WIDTHS = [320, 480, 640, 960] as const;

const FORMAT_ORDER = ["avif", "webp", "jpg"] as const;

type Format = (typeof FORMAT_ORDER)[number];

function srcset(base: string, format: Format) {
  return IMAGE_WIDTHS.map((w) => `/tryouts/${base}-${w}.${format} ${w}w`).join(", ");
}

export function MediaImage({
  base,
  alt,
  sizes = "50vw",
  priority = false,
  className = "",
}: {
  /** Image id — matches the `base` field in content/site.ts tryouts.images. */
  base: string;
  alt: string;
  /** CSS sizes hint for srcset selection. Defaults to half the viewport. */
  sizes?: string;
  /** Set true for the first 1–2 images to fetch eagerly. */
  priority?: boolean;
  className?: string;
}) {
  return (
    <picture>
      {FORMAT_ORDER.map((format) => (
        <source
          key={format}
          type={`image/${format === "jpg" ? "jpeg" : format}`}
          srcSet={srcset(base, format)}
          sizes={sizes}
        />
      ))}
      <img
        src={`/tryouts/${base}-960.jpg`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}