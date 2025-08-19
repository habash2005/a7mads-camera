// src/components/MasonryGrid.jsx
import React from "react";

export default function MasonryGrid({ items = [], className = "" }) {
  return (
    <div
      className={
        [
          // responsive columns & gutters (similar to lensofher vibe)
          "columns-1 sm:columns-2 xl:columns-3 2xl:columns-4",
          "gap-2 sm:gap-3",
          className
        ].join(" ")
      }
    >
      {items.map((it) => (
        <a
          key={it.id}
          href={it.src}
          target="_blank"
          rel="noreferrer"
          className="block mb-2 sm:mb-3 break-inside-avoid rounded-lg overflow-hidden"
        >
          {/* keep natural aspect; no forced wrapperAspect square */}
          <img
            src={it.src}
            alt={it.alt || ""}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.01]"
          />
        </a>
      ))}
    </div>
  );
}
