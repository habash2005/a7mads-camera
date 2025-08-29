import { useEffect, useState } from "react";
export default function ThemeToggle(){
  const [mode,setMode]=useState(()=>localStorage.getItem("theme")||"dark");
  useEffect(()=>{document.documentElement.setAttribute("data-theme",mode);localStorage.setItem("theme",mode)},[mode]);
  return (
    <button onClick={()=>setMode(m=>m==="dark"?"light":"dark")} className="btn btn-ghost" aria-label="Toggle theme" title="Toggle theme">
      {mode==="dark"?"☀️":"🌙"}
    </button>
  );
}
