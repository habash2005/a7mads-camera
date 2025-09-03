import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";

function Stat({ k, v }) {
  return (
    <div className="rounded-2xl ring-1 ring-[hsl(var(--border))] bg-white/80 p-4">
      <div className="text-3xl font-bold">{v}</div>
      <div className="mt-1 text-sm text-[hsl(var(--muted))]">{k}</div>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="card p-5 hover:ring-iris transition">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-[hsl(var(--muted))]">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>A7mads Camera — Modern, story-driven photography</title>
        <meta name="description" content="Editorial imagery with honest moments and thoughtful detail. Available for branding, events, and portraits." />
        <link rel="canonical" href="https://a7madscamera.com/" />
      </Helmet>

      {/* HERO */}
      <section className="container-pro pt-14 md:pt-20 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Story-driven images
                <span className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg,hsl(var(--brand)),hsl(var(--accent)))" }}>
                  for people & brands.
                </span>
              </h1>
            </Reveal>
            <Reveal className="reveal-up mt-4">
              <p className="text-lg text-[hsl(var(--muted))] max-w-xl">
                Clean light. Sharp detail. Direction when you need it, space when you don’t.
                I create modern visuals that feel like you—and look good everywhere.
              </p>
            </Reveal>
            <Reveal className="reveal-up mt-6">
              <div className="flex flex-wrap gap-3">
                <Link to="/booking" className="no-underline"><button className="btn btn-primary">Book a session</button></Link>
                <Link to="/portfolio" className="no-underline"><button className="btn btn-ghost">See portfolio</button></Link>
              </div>
            </Reveal>

            <Reveal className="reveal-up mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat k="Cities covered" v="20+" />
              <Stat k="Sessions shot" v="300+" />
              <Stat k="Turnaround" v="3–7 days" />
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] shimmer opacity-50"></div>
              <img
                src="/hero-cover.jpg"
                alt=""
                className="relative z-10 w-full rounded-[32px] ring-1 ring-[hsl(var(--border))] shadow-soft"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-[hsl(var(--accent-soft))] -z-10" />
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-3xl bg-[hsl(var(--brand-soft))] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-pro py-12">
        <Reveal><h2 className="h2">Services</h2></Reveal>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Feature title="Branding"
                   text="Launches, websites, campaigns, and social sets that feel contemporary and consistent across platforms." />
          <Feature title="Events"
                   text="Concerts, gatherings, and celebrations with a documentary approach—clean edits, crisp moments." />
          <Feature title="Portraits"
                   text="Personal, seniors, or milestones with gentle direction so you look and feel like yourself." />
        </div>
        <div className="mt-6">
          <Link to="/booking" className="no-underline">
            <button className="btn btn-rose">Start a project →</button>
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-pro py-12">
        <Reveal><h2 className="h2">Process</h2></Reveal>
        <div className="mt-6 grid lg:grid-cols-12 gap-6">
          <Reveal className="reveal-up lg:col-span-5 card p-6">
            <h3 className="h3">How it works</h3>
            <ol className="mt-3 space-y-3 text-sm text-[hsl(var(--muted))] list-decimal pl-5">
              <li>Share your date, location, and goals.</li>
              <li>We confirm a plan, mood, and logistics.</li>
              <li>Shoot day: direction when needed, space when not.</li>
              <li>Proofs arrive fast; final delivery in 3–7 days.</li>
            </ol>
            <div className="mt-4">
              <Link to="/booking" className="no-underline"><button className="btn btn-primary">Check availability</button></Link>
            </div>
          </Reveal>

          <Reveal className="reveal-up lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4">
                <div className="text-xs uppercase text-[hsl(var(--muted))]">Delivery</div>
                <div className="mt-1 font-semibold">Online gallery + fast downloads</div>
              </div>
              <div className="card p-4">
                <div className="text-xs uppercase text-[hsl(var(--muted))]">Licensing</div>
                <div className="mt-1 font-semibold">Personal use for portraits; custom for brands</div>
              </div>
              <div className="card p-4">
                <div className="text-xs uppercase text-[hsl(var(--muted))]">Travel</div>
                <div className="mt-1 font-semibold">NC statewide, simple fee structure</div>
              </div>
              <div className="card p-4">
                <div className="text-xs uppercase text-[hsl(var(--muted))]">Turnaround</div>
                <div className="mt-1 font-semibold">Proofs in ~48 hours</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED GRID */}
      <section className="container-pro py-12">
        <Reveal><h2 className="h2">Recent work</h2></Reveal>
        <Reveal className="reveal-up mt-6">
          <div className="columns-2 md:columns-3 gap-4">
            {["/work/1.jpg","/work/2.jpg","/work/3.jpg","/work/4.jpg","/work/5.jpg","/work/6.jpg"].map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noreferrer"
                 className="block mb-4 break-inside-avoid rounded-xl overflow-hidden ring-1 ring-[hsl(var(--border))] shadow-soft">
                <img src={src} alt="" loading="lazy" className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.01]" />
              </a>
            ))}
          </div>
        </Reveal>
        <div className="mt-4">
          <Link to="/portfolio" className="no-underline"><button className="btn btn-ghost">See full portfolio</button></Link>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="container-pro py-12">
        <Reveal><h2 className="h2">Quick answers</h2></Reveal>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="card p-5">
            <div className="font-semibold">What should I wear?</div>
            <p className="text-sm text-[hsl(var(--muted))] mt-1">Be you. Comfortable + confident always photographs best.</p>
          </div>
          <div className="card p-5">
            <div className="font-semibold">Rescheduling?</div>
            <p className="text-sm text-[hsl(var(--muted))] mt-1">Deposits move with your date—just give a heads-up.</p>
          </div>
          <div className="card p-5">
            <div className="font-semibold">Travel?</div>
            <p className="text-sm text-[hsl(var(--muted))] mt-1">NC statewide with simple mileage tiers.</p>
          </div>
        </div>
        <div className="mt-4">
          <Link to="/faq" className="no-underline"><button className="btn btn-primary">View full FAQ</button></Link>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="container-pro my-16">
        <div className="relative card p-6 md:p-8 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-60 h-60 rounded-3xl bg-[hsl(var(--accent-soft))]" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-3xl bg-[hsl(var(--brand-soft))]" />
          <div className="relative">
            <h3 className="h3">Ready to make something you’ll love?</h3>
            <p className="text-[hsl(var(--muted))] mt-2 max-w-xl">
              Tell me what you’re dreaming up—branding, portraits, or an event. I’ll get back quickly with a plan.
            </p>
            <div className="mt-4 flex gap-3">
              <Link to="/booking" className="no-underline"><button className="btn btn-rose">Book now</button></Link>
              <a href="mailto:hello@a7mads.com" className="no-underline"><button className="btn btn-ghost">Email me</button></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
