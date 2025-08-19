// src/components/SmartImg.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Defers mounting the <img> until it's near the viewport.
 * Keeps layout stable with aspect-ratio (when width/height known).
 */
export default function SmartImg({
  src,
  alt = "",
  width,
  height,
  priority = false, // true for above-the-fold/first row
  className = "",   // wrapper (div)
  imgClassName = "",// the <img>
  imgStyle,         // optional style for <img>
  placeholderClass = "bg-slate-200/70 animate-pulse",
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

  const ratio = width && height ? `${width}/${height}` : undefined;

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        aspectRatio: ratio,
        contentVisibility: "auto",
        containIntrinsicSize: !ratio && height ? `${height}px` : undefined
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
          {...rest}
        />
      ) : (
        <div className={`w-full h-full ${placeholderClass}`} />
      )}
    </div>
  );
}
