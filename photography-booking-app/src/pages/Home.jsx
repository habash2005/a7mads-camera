import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPortfolioImages } from "../lib/storage";

export default function Home(){
  const [images,setImages]=useState([]);
  const [state,setState]=useState({loading:true,error:""});

  useEffect(()=>{
    let on=true;
    (async()=>{
      try{
        const urls=await fetchPortfolioImages({ path:"portfolio", includeSubfolders:true });
        on && setImages(urls);
      }catch(e){
        on && setState(s=>({...s,error:"Failed to load portfolio."}));
      }finally{
        on && setState(s=>({...s,loading:false}));
      }
    })();
    return ()=>{on=false;}
  },[]);

  return (
    <main>
      {/* HERO */}
      <section className="relative isolate">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h1 className="h1 text-4xl md:text-5xl">Studio-grade photography for people & brands.</h1>
              <p className="mt-4 text-lg text-[color:var(--muted)] max-w-xl">
                Crisp, contemporary imagery with consistent craft—portraits, branding, and events across North Carolina.
              </p>
              <div className="mt-8 flex gap-3">
                <Link to="/booking" className="btn btn-primary">Book a Session</Link>
                <a href="#portfolio" className="btn btn-ghost">View Recent Work</a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-[color:var(--muted)]">
                <Stat k="300+" v="Sessions"/> <Stat k="4.9★" v="avg. rating"/> <Stat k="72hr" v="typical turn-around"/>
              </div>
            </div>
            <div className="img-tile aspect-[4/3]">
              <img src="/hero-placeholder.jpg" alt="Hero" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (clean, 3-up) */}
      <section className="container-site pb-14 md:pb-20">
        <h2 className="h2 text-2xl md:text-3xl mb-6">Services</h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {[
            {t:"Portraits",d:"Clean, confident portraits for profiles, teams, and talent."},
            {t:"Branding",d:"On-brand lifestyle & product sets for web and social."},
            {t:"Events",d:"Polished coverage focused on people, moments, and atmosphere."},
          ].map((s)=>(
            <div key={s.t} className="card p-6">
              <h3 className="h3 text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO (from Firebase) */}
      <section id="portfolio" className="container-site pb-16 md:pb-24">
        <h2 className="h2 text-2xl md:text-3xl mb-6">Selected Work</h2>

        {state.loading && (
          <div className="grid gap-4" style={{gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))"}}>
            {Array.from({length:9}).map((_,i)=><div key={i} className="card h-60 animate-pulse" />)}
          </div>
        )}

        {!state.loading && state.error && (
          <div className="card p-4 border border-red-500/30 bg-red-500/10 text-sm">{state.error}</div>
        )}

        {!state.loading && !state.error && (
          <div className="grid gap-4" style={{gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))"}}>
            {images.map(img=>(
              <figure key={img.id} className="img-tile">
                <img src={img.src} alt={img.path} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        )}

        <div className="mt-10 card p-4 flex items-center justify-between gap-4">
          <p className="text-sm text-[color:var(--muted)]">Want a tailored preview for your project? I’ll curate a set to your brief.</p>
          <Link to="/booking" className="btn btn-primary">Request a Curated Set</Link>
        </div>
      </section>
    </main>
  );
}

function Stat({k,v}){ return (
  <div>
    <div className="text-xl font-extrabold">{k}</div>
    <div>{v}</div>
  </div>
)}
