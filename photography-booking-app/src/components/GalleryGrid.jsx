// src/components/GalleryGrid.jsx
import React from "react";
import SmartImg from "./SmartImg";

/**
 * Minimal, modern gallery grid.
 *
 * Props:
 *  - items: [{ src, alt, width, height, id, filename, public_id }]
 *  - layout: "grid" | "masonry"  (default "grid")
 *  - wrapperAspect: "1/1" | "4/5" | "3/2" ... (used only in grid layout)
 *  - firstNPriority: number of first images to load as priority
 *  - sizes: responsive sizes string for <img>
 *  - figureClass: extra classes for each card
 */
export default function GalleryGrid({
  items = [],
  layout = "grid",
  wrapperAspect = "1/1",
  firstNPriority = 4,
  sizes = "(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw",
  figureClass = "",
}) {
  if (!items?.length) return null;

  const baseCard =
    "group relative overflow-hidden rounded-lg border border-default bg-white transition " +
    "hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-rose/30";

  const figClass =
    figureClass?.trim() ||
    (layout === "masonry"
      ? `${baseCard} mb-4 break-inside-avoid`
      : `${baseCard}`);

  return layout === "masonry" ? (
    // Masonry (flows vertically; natural image ratios)
    <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
      {items.map((img, i) => {
        const key = img.id || img.public_id || `${img.src}-${i}`;
        return (
          <figure key={key} className={figClass} title={img.public_id || img.filename}>
            {/* Accent dot */}
            <span
              className="pointer-events-none absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-rose opacity-90"
              aria-hidden
            />
            <SmartImg
              src={img.src}
              alt={img.alt || img.filename || img.public_id || "image"}
              width={img.width}
              height={img.height}
              // Let masonry use the image's natural aspect ratio
              wrapperAspect={undefined}
              priority={i < firstNPriority}
              className="w-full"
              imgClassName="w-full h-auto block"
              sizes={sizes}
            />
          </figure>
        );
      })}
    </div>
  ) : (
    // Uniform grid (clean cards with consistent aspect)
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((img, i) => {
        const key = img.id || img.public_id || `${img.src}-${i}`;
        return (
          <figure key={key} className={figClass} title={img.public_id || img.filename}>
            {/* Accent dot */}
            <span
              className="pointer-events-none absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-rose opacity-90"
              aria-hidden
            />
            <SmartImg
              src={img.src}
              alt={img.alt || img.filename || img.public_id || "image"}
              width={img.width}
              height={img.height}
              wrapperAspect={wrapperAspect}           // enforce uniform crop
              priority={i < firstNPriority}
              className="w-full"
              imgClassName="w-full h-full object-cover"
              sizes={sizes}
            />
          </figure>
        );
      })}
    </div>
  );
}
