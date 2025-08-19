import React from "react";

export default function Stepper({ step = 0, steps = 3 }) {
  const items = Array.from({ length: steps + 1 });
  return (
    <div className="flex items-center gap-2">
      {items.map((_, i) => {
        const active = i <= step;
        return (
          <div
            key={i}
            className={`h-1.5 w-8 rounded-full transition-all ${
              active ? "bg-rose" : "bg-gray-200"
            }`}
          />
        );
      })}
    </div>
  );
}
