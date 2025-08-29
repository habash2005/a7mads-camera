// src/components/SelectableGallery.jsx
import React from "react";

function cls(...xs) { return xs.filter(Boolean).join(" "); }

export default function SelectableGallery({ items, selected, onToggle, layout = "masonry" }) {
  if (layout === "masonry") {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
        {items.map((img) => (
          <figure
            key={img.public_id}
            className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-burgundy/10 transition-shadow hover:shadow-[0_14px_38px_rgba(0,0,0,0.10)]"
            title={img.original_filename || img.public_id}
          >
            <img
              src={img.secure_url}
              alt={img.original_filename || img.public_id}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <label className="absolute top-2 left-2 inline-flex items-center">
              <input
                type="checkbox"
                checked={!!selected[img.public_id]}
                onChange={() => onToggle(img.public_id)}
                className="sr-only"
              />
              <span
                className={cls(
                  "grid place-items-center w-8 h-8 rounded-full text-[12px] font-bold shadow-soft ring-1 transition-colors",
                  selected[img.public_id]
                    ? "bg-wine text-white ring-gold"
                    : "bg-white/95 text-charcoal ring-burgundy/20 hover:bg-gold/20"
                )}
                aria-hidden
              >
                {selected[img.public_id] ? "✓" : "+"}
              </span>
            </label>
            <a
              className="absolute top-2 right-2 text-[11px] underline decoration-1 text-white/95 hover:text-gold opacity-0 group-hover:opacity-100 transition-opacity"
              href={img.secure_url}
              target="_blank"
              rel="noreferrer"
            >
              Original
            </a>
          </figure>
        ))}
      </div>
    );
  }

  // uniform grid fallback
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((img) => (
        <figure
          key={img.public_id}
          className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-burgundy/10 transition-shadow hover:shadow-[0_14px_38px_rgba(0,0,0,0.10)]"
          title={img.original_filename || img.public_id}
        >
          <div className="aspect-square w-full">
            <img
              src={img.secure_url}
              alt={img.original_filename || img.public_id}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <label className="absolute top-2 left-2 inline-flex items-center">
            <input
              type="checkbox"
              checked={!!selected[img.public_id]}
              onChange={() => onToggle(img.public_id)}
              className="sr-only"
            />
            <span
              className={cls(
                "grid place-items-center w-8 h-8 rounded-full text-[12px] font-bold shadow-soft ring-1 transition-colors",
                selected[img.public_id]
                  ? "bg-wine text-white ring-gold"
                  : "bg-white/95 text-charcoal ring-burgundy/20 hover:bg-gold/20"
              )}
            >
              {selected[img.public_id] ? "✓" : "+"}
            </span>
          </label>
          <a
            className="absolute top-2 right-2 text-[11px] underline decoration-1 text-white/95 hover:text-gold opacity-0 group-hover:opacity-100 transition-opacity"
            href={img.secure_url}
            target="_blank"
            rel="noreferrer"
          >
            Original
          </a>
        </figure>
      ))}
    </div>
  );
}
