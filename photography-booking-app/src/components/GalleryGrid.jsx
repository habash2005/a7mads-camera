// src/components/GalleryGrid.jsx
import React from "react";
import SmartImg from "./SmartImg";

/**
 * Reusable grid for portfolio/admin previews.
 * Ensures consistent card size via wrapperAspect (default: square).
 */
export default function GalleryGrid({
  items = [],                 // [{ src, alt, width, height, id, filename }]
  wrapperAspect = "1/1",      // "1/1" square, "4/5" portrait, etc.
  firstNPriority = 4,         // number of first images to mark priority
  sizes = "(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw",
  figureClass = "overflow-hidden rounded-xl shadow-sm bg-white transition-transform duration-300 hover:scale-[1.01]",
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((img, i) => {
        const key = img.id || img.public_id || `${img.src}-${i}`;
        return (
          <figure key={key} className={figureClass} title={img.public_id || img.filename}>
            <SmartImg
              src={img.src}
              alt={img.alt || img.filename || img.public_id || "image"}
              width={img.width}
              height={img.height}
              wrapperAspect={wrapperAspect}
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
