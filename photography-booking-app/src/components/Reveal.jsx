import React, { useEffect, useRef } from "react";

/** Wrap any block to fade/slide in on scroll */
export default function Reveal({ children, className = "reveal-up", once = true }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (once) io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  return <div ref={ref} className={className}>{children}</div>;
}
