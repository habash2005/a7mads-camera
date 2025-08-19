// src/components/SmartImg.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Lazy-mounting <img> with optional wrapper aspect override.
 * - If `wrapperAspect` is provided (e.g. "1/1", "4/5"), it forces a uniform tile
 *   regardless of the image's intrinsic dimensions.
 * - Otherwise uses width/height to keep natural aspect ratio.
 */
export default function SmartImg({
  src,
  alt = "",
  width,
  height,
  wrapperAspect,      // <- "1/1" for square, "4/5" for portrait, etc.
  priority = false,   // true for above-the-fold
  className = "",     // wrapper (div)
  imgClassName = "",  // the <img>
  imgStyle,
  placeholderClass = "bg-slate-200/60 animate-pulse",
  sizes,              // optional <img sizes="">
  ...rest
}) {
  const [show, setShow] = useState(!!priority);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (show) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px 800px 0px", threshold: 0.01 }
    );
    if (wrapRef.current) io.observe(wrapRef.current);
    return () => io.disconnect();
  }, [show]);

  const ratio =
    wrapperAspect || (width && height ? `${width}/${height}` : undefined);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        aspectRatio: ratio,
        contentVisibility: "auto",
        containIntrinsicSize:
          !ratio && height ? `${height}px` : undefined,
      }}
    >
      {show ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          draggable="false"
          className={imgClassName}
          style={imgStyle}
          sizes={sizes}
          {...rest}
        />
      ) : (
        <div className={`w-full h-full ${placeholderClass}`} />
      )}
    </div>
  );
}
