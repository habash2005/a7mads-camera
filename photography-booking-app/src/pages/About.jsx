import React from "react";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2">
          <img src="/about.jpg" alt="" className="w-full rounded-2xl shadow-soft" />
        </div>
        <div className="md:col-span-3">
          <h1 className="font-display text-3xl md:text-5xl">Hi, I’m Ahmad.</h1>
          <p className="mt-4 text-black/70 leading-relaxed">
            I create intimate, editorial imagery with a focus on honest moments and thoughtful detail.
            My approach blends documentary sensitivity with gentle direction so you look and feel like yourself.
          </p>
          <p className="mt-3 text-black/70 leading-relaxed">
            Available for weddings, portraits, and brand campaigns worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
