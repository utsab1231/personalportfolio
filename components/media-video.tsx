// Video component for the tryouts gallery.
//
// Uses preload="none" + a poster image so the browser never buffers video
// data until the user actually hovers/taps. Provides WebM (VP9) and H.264
// <source> pairs so the browser picks the best-supported codec.

export function MediaVideo({
  base,
  poster,
  className = "",
}: {
  /** Video id — matches the `base` field in content/site.ts tryouts.videos. */
  base: string;
  /** Poster image base name (from tryouts.images) shown before playback. */
  poster: string;
  className?: string;
}) {
  return (
    <video
      src={`/tryouts/${base}.mp4`}
      poster={`/tryouts/${poster}-480.jpg`}
      preload="none"
      muted
      loop
      playsInline
      controls
      className={className}
    >
      <source src={`/tryouts/${base}.webm`} type="video/webm" />
      <source src={`/tryouts/${base}.mp4`} type="video/mp4" />
    </video>
  );
}