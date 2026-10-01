"use client"
import { useState, useEffect } from "react"

const areaInfo:any = {
  "jaypee-greens-greater-noida": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk" },
  "sector-150-noida": { full: "Sector 150 Noida", pin: "201310", near: "Sports City" },
  "jaypee-wishtown-sector-128-noida": { full: "Wishtown Sector 128 Noida", pin: "201304", near: "JP Hospital" },
  "indirapuram-ghaziabad": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall" },
  "vaishali-sector-5-ghaziabad": { full: "Vaishali Sector 5 Ghaziabad", pin: "201010", near: "Vaishali Metro" },
  "raj-nagar-ghaziabad": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC" },
}

function getData(slug:string){
  const lower = slug.toLowerCase();
  const brandRaw = lower.split("-")[0] || "chimney";
  const Brand = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1);
  let areaKey = lower.replace(brandRaw+"-","").replace(/^-/,"");
  let info = areaInfo[areaKey];
  if(!info){ for(const k in areaInfo){ if(lower.includes(k)){ info = areaInfo[k]; break; } } }
  if(!info){ const nice = areaKey.replace(/-/g," ").replace(/\b\w/g, (l:string)=>l.toUpperCase()); info = { full: nice, pin: "201301", near: "NCR" }; }
  return { Brand, area: info.full, pin: info.pin, near: info.near };
}

function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0); const [subIndex, setSubIndex] = useState(0); const [deleting, setDeleting] = useState(false); const [text, setText] = useState("");
  useEffect(() => { const current = texts[index]; if (!deleting && subIndex === current.length) { setTimeout(() => setDeleting(true), 1500); return; } if (deleting && subIndex === 0) { setDeleting(false); setIndex((prev) => (prev + 1) % texts.length); return; } const timeout = setTimeout(() => { setSubIndex((prev) => (deleting? prev - 1 : prev + 1)); setText(current.substring(0, deleting? subIndex - 1 : subIndex + 1)); }, deleting? 30 : 50); return () => clearTimeout(timeout); }, [subIndex, index, deleting, texts]);
  return <span>{text}<span style={{borderLeft:"2px solid #000", marginLeft:2}}>|</span></span>;
}

export default function Page({ params }: { params: { slug: string } }){
 const { Brand, area, pin, near } = getData(params.slug);
 const [tab, setTab] = useState("Service"); const [showForm, setShowForm] = useState(false); const [selectedService, setSelectedService] = useState(""); const [showCallPopup, setShowCallPopup] = useState(false); const phone = "8796284796";
 useEffect(()=>{
   document.title = `${Brand} Chimney Service in ${area} - 30 Min Visit`;
   const timer = setTimeout(()=> setShowCallPopup(true), 5000);
   return ()=> clearTimeout(timer);
 },[Brand, area])

 const data:any = {
  Service: [
   {name:`Deep ${Brand} Chimney Service`, img:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400", rating:"4.6 (59 reviews)", time:"1 hr 15 mins", points:[`Full internal clean in ${area} — blower, filters & grease trap deep-cleaned.`,`Suction tested before we leave in ${area}.`,`Oil & grease 100% removed in ${area}.`]},
   {name:`Basic ${Brand} Chimney Service`, img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", rating:"4.5 (70 reviews)", time:"60 mins", points:[`Removes grease & oil buildup, restores suction in ${area}.`,`Filters cleaned, exterior degreased in ${area}.`,`Budget friendly service in ${area}.`]},
  ],
  Repair: [
   {name:`${Brand} Chimney Check-up & Diagnosis`, img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", rating:"4.5 (75 reviews)", time:"60 mins", points:[`Accurate diagnosis of suction, motor or noise issues in ${area} near ${near}.`]},
   {name:`${Brand} Chimney Motor & PCB Repair`, img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", rating:"4.6 (82 reviews)", time:"60 mins", points:[`Motor, PCB, fan, blower replacement in ${area}.`,`30-day warranty in ${area}.`]},
  ],
  Installation: [
   {name:`${Brand} Chimney Installation`, img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400", rating:"4.6 (67 reviews)", time:"1 hr 30 mins", points:[`Safe ${Brand} setup with ducting & core cutting in ${area}.`,`30-day warranty in ${area}.`]},
  ]
 }
 const typewriterTexts = [`What ${Brand} service do you need in ${area}?`, `${Brand} Noise Problem Solve in ${area}?`, `${Brand} Not Working? 45 Min Service in ${area}`];
 const popupTexts = [`${Brand} Noise Solve in ${area}?`, `${Brand} Not Working Solve in ${area}?`];

 return (
 <>
 <style>{`body{margin:0; background:#f8f8f8; font-family:system-ui} *{box-sizing:border-box}`}</style>
 <div style={{maxWidth:800, margin:'0 auto', background:'#fff', minHeight:'100vh', paddingBottom:80}}>
  <div style={{padding:'12px 14px', borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, background:'#fff', zIndex:20}}>
   <div><div style={{fontWeight:900, fontSize:22}}>{Brand.toUpperCase()} <span style={{color:'#e11d48'}}>SERVICE</span></div><div style={{fontSize:11.5, color:'#666', fontWeight:800}}>NOIDA & GHAZIABAD ONLY</div></div>
   <a href={`tel:${phone}`} style={{background:'#e11d48', color:'#fff', padding:'6px 10px', borderRadius:6, textDecoration:'none', fontWeight:800, fontSize:11, textAlign:'center'}}>Call<br/>Now</a>
  </div>
  <div style={{padding:'24px 16px 12px'}}>
   <h1 style={{fontSize:24, fontWeight:900, margin:0, lineHeight:1.2}}>{Brand} Chimney Service & Cleaning in {area} - 30 Min Visit | Professional Technician</h1>
   <div style={{display:'flex', alignItems:'center', gap:8, marginTop:10}}><span style={{background:'#0f7a0f', color:'#fff', padding:'4px 10px', borderRadius:6, fontSize:13, fontWeight:700}}>★ 4.6</span><span style={{fontSize:13, color:'#555'}}>335 reviews • Same Day Service in {area} • PIN {pin}</span></div>
  </div>
  <div style={{padding:'0 16px'}}>
   <div style={{fontWeight:800, marginBottom:12, fontSize:16, minHeight:48}}><TypeWriter texts={typewriterTexts} /></div>
   <div style={{display:'flex', gap:8, paddingBottom:16, overflowX:'auto'}}>
    {Object.keys(data).map(t=>(<button key={t} onClick={()=>setTab(t)} style={{padding:'10px 22px', borderRadius:24, border: tab===t? '1px solid #000' : '1px solid #ddd', background: tab===t? '#000' : '#fff', color: tab===t? '#fff' : '#000', fontWeight:800, fontSize:14, whiteSpace:'nowrap'}}>{t}</button>))}
   </div>
  </div>
  <div style={{padding:16, background:'#f6f6f6'}}>
   {data[tab].map((s:any,i:number)=>(
    <div key={i} style={{background:'#fff', border:'1px solid #e8e8e8', borderRadius:16, padding:16, marginBottom:14, display:'flex', gap:14}}>
     <img src={s.img} style={{width:92, height:92, borderRadius:12, objectFit:'cover'}} />
     <div style={{flex:1}}>
      <div style={{fontWeight:800, fontSize:17}}>{s.name}</div>
      <div style={{fontSize:12, color:'#666', marginTop:4}}>★ {s.rating} • {s.time} • {area} Only • PIN {pin}</div>
      <ul style={{margin:'10px 0 0', paddingLeft:16, color:'#444', fontSize:13, lineHeight:1.6}}>{s.points.map((p:string,j:number)=><li key={j}>{p}</li>)}</ul>
      <button onClick={()=>{setSelectedService(s.name); setShowForm(true)}} style={{marginTop:14, background:'#111', color:'#fff', padding:'10px 20px', borderRadius:8, border:'none', fontWeight:800}}>Book Now</button>
     </div>
    </div>
   ))}
  </div>
  <footer style={{background:'#f3f4f6', padding:'40px 20px', fontSize:12}}><div style={{fontWeight:900, marginBottom:8}}>📍 {Brand} Chimney Service in {area} - PIN {pin} Near {near}</div><div style={{color:'#666', lineHeight:1.6}}>We provide {Brand} chimney service in {area} PIN {pin} near {near}. Same day service, 45 min arrival, 30 day warranty.</div></footer>
  <div style={{background:'#fffbe6', border:'1px solid #fde68a', padding:'14px', margin:'16px', borderRadius:10, fontSize:11, color:'#92400e'}}>Disclaimer: We are independent service provider. NOT authorized center of {Brand}. Brand names used for reference only. Service in {area} only.</div>
  {showForm && (<div style={{position:'fixed', inset:0, zIndex:100000, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', padding:16}}><div style={{background:'#fff', width:'100%', maxWidth:400, borderRadius:16, padding:20}}><div style={{display:'flex', justifyContent:'space-between'}}><h3 style={{margin:0}}>Book {selectedService} in {area}</h3><button onClick={()=>setShowForm(false)} style={{border:'none', background:'#eee', borderRadius:20, width:30, height:30}}>X</button></div><div style={{marginTop:16, display:'flex', flexDirection:'column', gap:12}}><input placeholder="Your Name" style={{padding:12, borderRadius:8, border:'1px solid #ddd'}} /><input placeholder="Mobile Number" style={{padding:12, borderRadius:8, border:'1px solid #ddd'}} /><a href={`https://wa.me/91${phone}?text=Hi, I want to book ${selectedService} for ${Brand} in ${area} PIN ${pin}`} style={{background:'#ff6600', color:'#fff', padding:12, borderRadius:8, textAlign:'center', textDecoration:'none', fontWeight:800}}>Submit on WhatsApp</a></div></div></div>)}
  {showCallPopup && (<div style={{position:'fixed', inset:0, zIndex:100001, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', padding:16}}><div style={{background:'#fff', width:'100%', maxWidth:360, borderRadius:20, padding:24, textAlign:'center', position:'relative'}}><button onClick={()=>setShowCallPopup(false)} style={{position:'absolute', top:10, right:12, border:'none', background:'#f3f4f6', borderRadius:20, width:28, height:28}}>X</button><div style={{fontSize:36}}>🛠️</div><h3 style={{margin:'10px 0 4px', fontWeight:900, fontSize:21}}>{Brand} Expert in {area}</h3><div style={{fontWeight:700, fontSize:14, minHeight:44, marginTop:8, color:'#e11d48'}}><TypeWriter texts={popupTexts} /></div><a href={`tel:${phone}`} style={{display:'block', background:'#000', color:'#fff', padding:14, borderRadius:30, textDecoration:'none', fontWeight:900, marginTop:18}}>Call Now Expert</a></div></div>)}
  <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#fff', borderTop:'1px solid #ddd', padding:10, display:'flex', gap:10, maxWidth:800, margin:'0 auto', zIndex:30}}><a href={`tel:${phone}`} style={{flex:1, background:'#000', color:'#fff', textAlign:'center', padding:14, borderRadius:10, textDecoration:'none', fontWeight:900}}>Call Expert</a><a href={`https://wa.me/91${phone}?text=Hi, I need ${Brand} service in ${area}`} style={{flex:1, background:'#25D366', color:'#fff', textAlign:'center', padding:14, borderRadius:10, textDecoration:'none', fontWeight:900}}>WhatsApp</a></div>
 </div>
 </>
 )
}
