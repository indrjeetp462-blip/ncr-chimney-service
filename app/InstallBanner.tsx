"use client";
import { useState, useEffect } from "react";

export default function InstallBanner(){
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(()=>{
    const handler = (e:any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if(deferredPrompt){
      deferredPrompt.prompt();
      const {outcome} = await deferredPrompt.userChoice;
      if(outcome === 'accepted') setShow(false);
    }
  };

  if(!show) return null;

  return (
    <div style={{background:'#ff6600', color:'#fff', padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:9999}}>
      <span style={{fontWeight:900, fontSize:14}}>📲 Install Our Official App</span>
      <button onClick={handleInstall} style={{background:'#fff', color:'#ff6600', padding:'8px 16px', borderRadius:20, fontWeight:900, border:'none'}}>INSTALL</button>
    </div>
  )
}
