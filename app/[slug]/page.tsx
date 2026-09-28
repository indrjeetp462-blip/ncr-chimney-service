"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

function TypeWriter({ text }: { text: string }) {
  const [d, setD] = useState("");
  useEffect(() => {
    setD(""); let i=0;
    const t=setInterval(()=>{ setD(text.slice(0,i+1)); i++; if(i>text.length) clearInterval(t); }, 30);
    return ()=>clearInterval(t);
  }, [text]);
  return <span>{d}<span style={{animation:"blink 1s infinite"}}>|</span></span>;
}

export default function Page() {
  const params = useParams();
  const slug = (params?.slug as string) || "kaff-chimney-service";
  const brand = slug.split("-")[0] || "kaff";
  const Brand = brand.charAt(0).toUpperCase() + brand.slice(1);
  const area = slug.replace(/-/g, " ");
  const phone = "8796284796";
  const [open, setOpen] = useState<string|null>(null);
  const [popup, setPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const msg = (s:string) => `Hi, I need ${s} for my ${Brand} Chimney in ${area}. Send technician in 60 mins. Address: `;

  const services = [
    {id:"1", title:"Chimney Not Working", icon:"⚡", color:"#ef4444", short:"Motor / PCB Dead", long: `If your BRAND chimney not working, no light, no display, motor not running, suction zero. Our expert visits in 60 mins in AREA. We check power supply, switch board, PCB, capacitor, wiring, motor jam. BRAND chimneys fail due to power fluctuation, oil, carbon. We provide same day repair with 90 days warranty. 10000+ BRAND chimney repaired in Noida Ghaziabad Delhi. Original parts. Motor, capacitor, PCB repair. Deep cleaning with repair. Bill + warranty. 8am-8pm 7 days.`.repeat(3)},
    {id:"2", title:"Chimney Noise Problem", icon:"🔊", color:"#2563eb", short:"Loud Sound Vibration", long: `BRAND chimney loud noise, ghar ghar, tak tak? Bearing damage, blower imbalance, dust, loose screw. Our team opens full chimney, cleans blower, fan, motor, duct, replaces bearing, oiling. After service silent like new. 5000+ noise fixed for BRAND in AREA. 90 days warranty, 60 mins doorstep. Filter, oil collector cleaned. Same day.`.repeat(3)},
    {id:"3", title:"Chimney Deep Cleaning", icon:"✨", color:"#16a34a", short:"Full Grease Removal", long: `Professional BRAND chimney deep cleaning in AREA. Remove 100% oil grease from baffle, cassette, charcoal filter, blower, motor, pipe, oil collector. Suction double. Machine + chemical eco-friendly. Every 3-4 months needed. Full dismantle wash dry refit. 60 mins doorstep Rs 499. All BRAND models auto manual filterless. 10000+ customers. Bill warranty.`.repeat(3)},
  ];

  return (
    <div style={{minHeight:"100vh", background:"#f6f6f6", paddingBottom:100}}>
      <div style={{background:"black", color:"white", padding:16, display:"flex", justifyContent:"space-between", position:"sticky", top:0, zIndex:10}}>
        <b>{Brand.toUpperCase()} • NCR</b><a href={`tel:${phone}`} style={{background:"#facc15", color:"black", padding:"6px 16px", borderRadius:20, fontWeight:900, fontSize:14}}>Call Expert</a>
      </div>

      <div style={{padding:16, maxWidth:600, margin:"0 auto"}}>
        <div style={{background:"white", borderRadius:28, padding:24}}>
          <h1 style={{fontSize:32, fontWeight:900, lineHeight:1.1, minHeight:100}}><TypeWriter text={`${Brand} Chimney Service in ${area}`} /></h1>
          <p style={{color:"#6b7280", marginTop:12, fontSize:15}}>Expert Repair & Deep Cleaning - 60 Mins Doorstep Service in {area}</p>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginTop:20}}>
            <button onClick={()=>setPopup(true)} style={{background:"#16a34a", color:"white", borderRadius:30, padding:16, fontWeight:900, border:"none"}}>CALL NOW</button>
            <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(msg("Service"))}`} style={{background:"black", color:"white", borderRadius:30, padding:16, fontWeight:700, textAlign:"center", textDecoration:"none"}}>WhatsApp</a>
          </div>
          <button onClick={()=>setShowForm(true)} style={{width:"100%", marginTop:12, border:"2px solid black", borderRadius:30, padding:12, fontWeight:700, background:"white"}}>📅 Book Service Now</button>
          <p style={{textAlign:"center", marginTop:12, fontSize:12}}>⭐ 4.8/5 • 10,000+ Customers • 90 Days Warranty</p>
        </div>

        {showForm && (
          <div style={{background:"white", borderRadius:24, padding:20, marginTop:16, border:"2px solid #facc15"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}><h3 style={{fontWeight:900}}>Book {Brand} Service</h3><button onClick={()=>setShowForm(false)}>✕</button></div>
            <p style={{fontSize:13, color:"gray"}}>Service in {area}</p>
            <div style={{display:"flex", flexDirection:"column", gap:12, marginTop:12}}>
              <input placeholder="Your Name" style={{border:"1px solid #ddd", padding:12, borderRadius:12}}/>
              <input placeholder="Mobile" style={{border:"1px solid #ddd", padding:12, borderRadius:12}}/>
              <input value={Brand} readOnly style={{border:"1px solid #ddd", padding:12, borderRadius:12, background:"#f3f4f6"}}/>
              <a href={`tel:${phone}`} style={{background:"#16a34a", color:"white", borderRadius:30, padding:16, fontWeight:900, textAlign:"center", textDecoration:"none"}}>SUBMIT & CALL NOW</a>
            </div>
          </div>
        )}

        <h2 style={{fontWeight:900, fontSize:20, marginTop:28, marginBottom:10}}>Our Professional Services</h2>
        {services.map(s=>(
          <div key={s.id} onClick={()=>setOpen(open===s.id?null:s.id)} style={{background:"white", borderRadius:20, padding:16, marginTop:12, border:"1px solid #eee", cursor:"pointer"}}>
            <div style={{display:"flex", alignItems:"center", gap:12}}>
              <div style={{background:s.color, width:48, height:48, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontSize:20}}>{s.icon}</div>
              <div style={{flex:1}}><div style={{fontWeight:900}}>{s.title}</div><div style={{fontSize:11, color:"gray"}}>{s.short}</div></div>
              <span>{open===s.id?"▲":"▼"}</span>
            </div>
            {open===s.id && (
              <div style={{marginTop:12, borderTop:"1px solid #eee", paddingTop:12}}>
                <p style={{fontSize:13.5, lineHeight:1.6, color:"#374151"}}>{s.long.replaceAll("BRAND", Brand).replaceAll("AREA", area)}</p>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:12}}>
                  <a href={`tel:${phone}`} style={{background:"#16a34a", color:"white", borderRadius:30, padding:12, textAlign:"center", fontWeight:900, textDecoration:"none", fontSize:14}}>CALL NOW</a>
                  <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(msg(s.title))}`} style={{background:"black", color:"white", borderRadius:30, padding:12, textAlign:"center", fontWeight:700, textDecoration:"none", fontSize:14}}>WhatsApp Auto</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {popup && (
        <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:50, display:"flex", alignItems:"center", justifyContent:"center", padding:16}}>
          <div style={{background:"white", borderRadius:28, padding:24, width:"100%", maxWidth:360}}>
            <h3 style={{fontWeight:900, fontSize:22}}>Talk to {Brand} Expert</h3>
            <p style={{color:"gray", fontSize:13, marginTop:6}}>60 Mins doorstep service in {area}</p>
            <a href={`tel:${phone}`} style={{display:"block", background:"#16a34a", color:"white", borderRadius:30, padding:16, textAlign:"center", fontWeight:900, marginTop:16, textDecoration:"none"}}>CALL NOW</a>
            <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(msg("Expert Help"))}`} style={{display:"block", background:"black", color:"white", borderRadius:30, padding:16, textAlign:"center", fontWeight:700, marginTop:10, textDecoration:"none"}}>WhatsApp (Auto Type)</a>
            <button onClick={()=>setPopup(false)} style={{width:"100%", marginTop:12, border:"none", background:"none", color:"gray"}}>Close</button>
          </div>
        </div>
      )}

      <div style={{position:"fixed", bottom:0, left:0, right:0, background:"white", borderTop:"1px solid #ddd", padding:12, display:"flex", gap:12, maxWidth:600, margin:"0 auto"}}>
        <a href={`tel:${phone}`} style={{flex:1, background:"#16a34a", color:"white", borderRadius:30, padding:12, textAlign:"center", fontWeight:900, textDecoration:"none", fontSize:14}}>CALL NOW</a>
        <a href={`https://wa.me/91${phone}?text=${encodeURIComponent(msg("Service"))}`} style={{flex:1, background:"black", color:"white", borderRadius:30, padding:12, textAlign:"center", fontWeight:700, textDecoration:"none", fontSize:14}}>WhatsApp</a>
      </div>

      <style>{`@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}`}</style>
    </div>
  );
}
