"use client";

// Full-size viewer for tryouts thumbnails. Wraps a native <dialog> so
// Esc-to-close, backdrop, and focus trap come for free with zero deps.

import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { X } from "lucide-react";
import { MediaImage } from "@/components/media-image";
import { MediaVideo } from "@/components/media-video";
import { tryouts } from "@/content/site";

export type LightboxState = { type: "image" | "video"; index: number } | null;

export function MediaLightbox({
  open,
  onOpenChange,
}: {
  open: LightboxState;
  onOpenChange: Dispatch<SetStateAction<LightboxState>>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const list = open?.type === "video" ? tryouts.videos : tryouts.images;

  function navigate(delta: number) {
    if (!open) return;
    const index = (open.index + delta + list.length) % list.length;
    onOpenChange({ type: open.type, index });
  }

  const current = open ? list[open.index] : null;

  return (
    <dialog
      ref={dialogRef}
      onClose={() => onOpenChange(null)}
      onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      onKeyDown={(e) => {
        if (list.length < 2) return;
        if (e.key === "ArrowLeft") navigate(-1);
        if (e.key === "ArrowRight") navigate(1);
      }}
      className="m-auto max-w-[90vw] max-h-[90vh] bg-bg p-0 border-0 backdrop:bg-black/90"
    >
      {open && current && (
        <div className="relative animate-[fadeIn_150ms_ease-out]">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="absolute top-2 right-2 text-fg"
          >
            <X size={20} />
          </button>
          {typeof current === "string" ? (
            <MediaVideo base={current} poster={current} className="max-w-[90vw] max-h-[90vh] object-contain" />
          ) : (
            <MediaImage
              base={current.base}
              alt={current.alt}
              sizes="90vw"
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          )}
          {list.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-fg text-2xl"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => navigate(1)}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-fg text-2xl"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
