import { useEffect, useState } from "react";

const THEMES = ["dark", "light", "sunset", "emerald"]; // add more names that match CSS blocks below

export default function ThemeToggle(){
  const [mode,setMode]=useState(()=>{
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  },[mode]);

  function cycle(){
    setMode((m)=>{
      const i = THEMES.indexOf(m);
      return THEMES[(i + 1) % THEMES.length];
    });
  }

  const label = {
    dark: "Slate Noir",
    light: "Luxe Light",
    sunset: "Sunset Rose",
    emerald: "Emerald Mist",
  }[mode] || mode;

  return (
    <button onClick={cycle} className="btn btn-ghost" aria-label="Toggle theme" title={`Theme: ${label}`}>
      {label}
    </button>
  );
}
