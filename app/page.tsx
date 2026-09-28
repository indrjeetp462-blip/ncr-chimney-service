"use client"
import { useState, useEffect } from "react"

export default function Home(){
 const [tab, setTab] = useState("Service")
 const [showForm, setShowForm] = useState(false)
 const [selectedService, setSelectedService] = useState("")
 const [brand, setBrand] = useState("Chimney")
 const [area, setArea] = useState("Noida & Ghaziabad")
 const [BrandCap, setBrandCap] = useState("Chimney")

 const phone = "8796284796"

 useEffect(()=>{
   const p = new URLSearchParams(window.location.search);
   // support?brand=faber&area=indirapuram OR?slug=faber-chimney-service-indirapuram
   let b = p.get("brand") || "";
   let a = p.get("area") || "";
   const slug = p.get("slug") || "";

   if(!b && slug){
     b = slug.split("-")[0];
     a = slug.replace(/-/g," ").replace(b,"").replace("chimney service","").trim();
   }
   if(b){
     const cap = b.charAt(0).toUpperCase()+b.slice(1).toLowerCase();
     setBrand(cap);
     setBrandCap(cap);
     if(a) setArea(a.split(" ").map((w:string)=>w.charAt(0).toUpperCase()+w.slice(1)).join(" "));
   }
 },[])

 const data:any = {
  Service: [
   {name:`Deep ${BrandCap} Service`, img:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400", rating:"4.6 (59 reviews)", time:"1 hr 15 mins", points:[`Full internal clean — ${BrandCap} blower, filters & grease trap deep-cleaned in ${area}.`,`Suction tested before we leave.`,`Oil & grease 100% removed.`]},
   {name:`Basic ${BrandCap} Service`, img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", rating:"4.5 (70 reviews)", time:"60 mins", points:[`Removes grease & oil buildup, restores suction for ${BrandCap} in ${area}.`,`Filters cleaned, exterior degreased.`,`Budget friendly service.`]},
   {name:`${BrandCap} Repair & Check-up`, img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", rating:"4.5 (75 reviews)", time:"60 mins", points:[`${BrandCap} Suction, motor, noise, PCB issue repair in ${area}.`,`All brands spare available.`,`Checkup fee adjusted in bill.`]},
  ],
  Repair: [
   {name:`${BrandCap} Check-up & Diagnosis`, img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", rating:"4.5 (75 reviews)", time:"60 mins", points:[`Accurate diagnosis of ${BrandCap} suction, motor or noise issues in ${area}.`]},
   {name:`${BrandCap} Motor & PCB Repair`, img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", rating:"4.6 (82 reviews)", time:"60 mins", points:[`${BrandCap} Motor, PCB, fan, blower replacement in ${area}.`,`30-day warranty.`]},
  ],
  Installation: [
   {name:`${BrandCap} Installation`, img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400", rating:"4.6 (67 reviews)", time:"1 hr 30 mins", points:[`Safe ${BrandCap} setup with ducting & core cutting in ${area}.`,`30-day warranty.`]},
   {name:`${BrandCap} Uninstallation`, img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400", rating:"4.7 (64 reviews)", time:"60 mins", points:[`Secure disconnection of ${BrandCap} power and ducting in ${area}.`]},
  ]
 }

 const link = (b:string, a:string) => `/?brand=${b.toLowerCase()}&area=${encodeURIComponent(a)}`;

 return (
 <>
 <style>{`body{margin:0; background:#f8f8f8; font-family:system-ui} *{box-sizing:border-box}`}</style>
 <div style={{maxWidth:800, margin:'0 auto', background:'#fff', minHeight:'100vh'}}>

  <div style={{padding:'12px 16px', borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, background:'#fff', zIndex:20}}>
   <div><div style={{fontWeight:900, fontSize:19}}>{BrandCap.toUpperCase()} <span style={{color:'#e11d48'}}>SERVICE</span></div><div style={{fontSize:10, color:'#666', fontWeight:700, letterSpacing:1}}>{area.toUpperCase()} ONLY • {phone}</div></div>
   <a href={`tel:${phone}`} style={{background:'#e11d48', color:'#fff', padding:'10px 18px', borderRadius:8, textDecoration:'none', fontWeight:800}}>Call Now</a>
  </div>

  <div style={{padding:'24px 16px 12px'}}>
   <h1 style={{fontSize:26, fontWeight:900, margin:0, lineHeight:1.2}}>{BrandCap} Cleaning & Services in {area}</h1>
   <div style={{display:'flex', alignItems:'center', gap:8, marginTop:10}}><span style={{background:'#0f7a0f', color:'#fff', padding:'4px 10px', borderRadius:6, fontSize:13, fontWeight:700}}>★ 4.6</span><span style={{fontSize:13, color:'#555'}}>335 reviews • Trusted • Same Day Service in {area} • 10k+ Customers</span></div>
  </div>

  <div style={{padding:'0 16px'}}>
   <div style={{fontWeight:800, marginBottom:12, fontSize:16}}>What {BrandCap} service do you need in {area}?</div>
   <div style={{display:'flex', gap:8, paddingBottom:16, overflowX:'auto'}}>
    {Object.keys(data).map(t=>(
     <button key={t} onClick={()=>setTab(t)} style={{padding:'10px 22px', borderRadius:24, border: tab===t? '1px solid #000' : '1px solid #ddd', background: tab===t? '#000' : '#fff', color: tab===t? '#fff' : '#000', fontWeight:800, fontSize:14, whiteSpace:'nowrap'}}>{t}</button>
    ))}
   </div>
  </div>

  <div style={{padding:16, background:'#f6f6f6'}}>
   {data[tab].map((s:any,i:number)=>(
    <div key={i} style={{background:'#fff', border:'1px solid #e8e8e8', borderRadius:16, padding:16, marginBottom:14, display:'flex', gap:14}}>
     <img src={s.img} style={{width:92, height:92, borderRadius:12, objectFit:'cover'}} alt={s.name} />
     <div style={{flex:1}}>
      <div style={{fontWeight:800, fontSize:17}}>{s.name}</div>
      <div style={{fontSize:12, color:'#666', marginTop:4}}>★ {s.rating} • {s.time} • {area} Only</div>
      <ul style={{margin:'10px 0 0', paddingLeft:16, color:'#444', fontSize:13, lineHeight:1.6}}>{s.points.map((p:string,j:number)=><li key={j}>{p}</li>)}</ul>
      <button onClick={()=>{setSelectedService(s.name); setShowForm(true)}} style={{display:'inline-block', marginTop:14, background:'#111', color:'#fff', padding:'10px 20px', borderRadius:8, border:'none', fontWeight:800}}>Book Now in {area}</button>
     </div>
    </div>
   ))}
  </div>

  <div style={{padding:'32px 16px', background:'#fff'}}>
   <h2 style={{fontSize:20, fontWeight:900, margin:0}}>How Our {BrandCap} Service Works in {area}</h2>
   <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, marginTop:20}}>
    <div style={{textAlign:'center', border:'1px solid #eee', borderRadius:12, padding:16}}><div style={{fontSize:28}}>📞</div><div style={{fontWeight:700, marginTop:6, fontSize:13}}>1. Call {phone}</div><div style={{fontSize:11, color:'#666', marginTop:4}}>Book {BrandCap} in {area}</div></div>
    <div style={{textAlign:'center', border:'1px solid #eee', borderRadius:12, padding:16}}><div style={{fontSize:28}}>🛠️</div><div style={{fontWeight:700, marginTop:6, fontSize:13}}>2. Expert Arrives</div><div style={{fontSize:11, color:'#666', marginTop:4}}>In 45 mins in {area}</div></div>
    <div style={{textAlign:'center', border:'1px solid #eee', borderRadius:12, padding:16}}><div style={{fontSize:28}}>✨</div><div style={{fontWeight:700, marginTop:6, fontSize:13}}>3. Service Done</div><div style={{fontSize:11, color:'#666', marginTop:4}}>{BrandCap} Suction tested</div></div>
   </div>
  </div>

  <div style={{padding:'32px 16px', background:'#f9f9f9', borderTop:'8px solid #f6f6f6'}}>
   <h2 style={{fontSize:20, fontWeight:900, margin:0}}>Why Choose {BrandCap} Service in {area}?</h2>
   <div style={{marginTop:16, display:'grid', gap:12}}>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14, display:'flex', gap:12}}><span style={{fontSize:20}}>✓</span><div><b style={{fontSize:14}}>{area} Only - Local {BrandCap} Experts</b><div style={{fontSize:12, color:'#666', marginTop:2}}>We serve only {area} - 45 min arrival for {BrandCap}.</div></div></div>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14, display:'flex', gap:12}}><span style={{fontSize:20}}>✓</span><div><b style={{fontSize:14}}>All Brands Service - {BrandCap} Specialist</b><div style={{fontSize:12, color:'#666', marginTop:2}}>Faber, Elica, Hindware, Kaff, Glen, Sunflame, Prestige, Pigeon, Inalsa, Kutchina, Blowhot, Bosch, Siemens, Hafele - {BrandCap} sab ka expert.</div></div></div>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14, display:'flex', gap:12}}><span style={{fontSize:20}}>✓</span><div><b style={{fontSize:14}}>45 Min Arrival - {BrandCap} Same Day in {area}</b><div style={{fontSize:12, color:'#666', marginTop:2}}>Same day {BrandCap} service in {area}, 30-day warranty, suction tested.</div></div></div>
   </div>
  </div>

  <div style={{padding:'32px 16px', background:'#fff'}}>
   <h2 style={{fontSize:18, fontWeight:900}}>All Chimney Brands We Service in {area}</h2>
   <div style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:12}}>
    {["Faber","Elica","Hindware","Kaff","Glen","Sunflame","Prestige","Pigeon","Inalsa","Kutchina","Blowhot","Bosch","Siemens","Hafele"].map(b=>(
     <a key={b} href={link(b, area)} style={{border:'1px solid #ddd', padding:'6px 12px', borderRadius:20, fontSize:12, fontWeight:600, textDecoration:'none', color:'#000'}}>{b} in {area}</a>
    ))}
   </div>
  </div>

  <div style={{padding:'32px 16px', background:'#f9f9f9'}}>
   <h2 style={{fontSize:18, fontWeight:900}}>{BrandCap} Reviews in {area} - 4.6 ★ (335 reviews)</h2>
   <div style={{marginTop:16, display:'grid', gap:12}}>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14}}><div style={{fontWeight:700, fontSize:13}}>★ ★ ★ ★ ★ Rajesh - {area}</div><div style={{fontSize:12, color:'#666', marginTop:4}}>{BrandCap} Deep cleaning bahut acchi ki in {area}, suction new jaisi.</div></div>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14}}><div style={{fontWeight:700, fontSize:13}}>★ ★ ★ ★ ★ Priya - {area}</div><div style={{fontSize:12, color:'#666', marginTop:4}}>{BrandCap} repair 1 ghante me ho gaya in {area}. Genuine spare.</div></div>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14}}><div style={{fontWeight:700, fontSize:13}}>★ ★ ★ ★ ★ Amit - {area}</div><div style={{fontSize:12, color:'#666', marginTop:4}}>Best {BrandCap} service in {area}. 45 min me aa gaye.</div></div>
   </div>
  </div>

  <div style={{padding:'32px 16px', background:'#fff'}}>
   <h2 style={{fontSize:18, fontWeight:900}}>FAQ - {BrandCap} in {area}</h2>
   <div style={{marginTop:12}}>
    <div style={{borderBottom:'1px solid #eee', padding:'14px 0'}}><b style={{fontSize:14}}>Q: {area} me {BrandCap} service dete ho?</b><div style={{fontSize:12, color:'#666', marginTop:4}}>A: Haan, Only {area} - {BrandCap} specialist 45 min arrival.</div></div>
    <div style={{borderBottom:'1px solid #eee', padding:'14px 0'}}><b style={{fontSize:14}}>Q: Kitne time me technician ayega {area} me?</b><div style={{fontSize:12, color:'#666', marginTop:4}}>A: 45 minutes me same day {BrandCap} service in {area}. Call {phone}</div></div>
    <div style={{borderBottom:'1px solid #eee', padding:'14px 0'}}><b style={{fontSize:14}}>Q: {BrandCap} ka warranty milti hai?</b><div style={{fontSize:12, color:'#666', marginTop:4}}>A: Haan 30-day service warranty for {BrandCap} in {area}.</div></div>
   </div>
  </div>

  <footer style={{background:'#f3f4f6', padding:'40px 20px', fontSize:12, color:'#6b7280', marginTop:20}}>
    <p style={{fontWeight:'bold', marginBottom:16, fontSize:14, color:'black'}}>Our {BrandCap} Service Areas (30 Locations):</p>
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
      <a href={link("Faber","Jaypee Greens")}>Faber Jaypee Greens</a>
      <a href={link("Faber","Sector 150 Noida")}>Faber Sector 150</a>
      <a href={link("Faber","Wishtown 128")}>Faber Wishtown 128</a>
      <a href={link("Faber","Indirapuram")}>Faber Indirapuram</a>
      <a href={link("Faber","Vaishali Sec 5")}>Faber Vaishali Sec 5</a>
      <a href={link("Faber","Raj Nagar")}>Faber Raj Nagar</a>
      <a href={link("Glen","Jaypee Greens")}>Glen Jaypee Greens</a>
      <a href={link("Glen","Sector 150")}>Glen Sector 150</a>
      <a href={link("Glen","Wishtown 128")}>Glen Wishtown 128</a>
      <a href={link("Glen","Indirapuram")}>Glen Indirapuram</a>
      <a href={link("Glen","Vaishali Sec 5")}>Glen Vaishali Sec 5</a>
      <a href={link("Glen","Raj Nagar")}>Glen Raj Nagar</a>
      <a href={link("Hafele","Jaypee Greens")}>Hafele Jaypee Greens</a>
      <a href={link("Hafele","Sector 150")}>Hafele Sector 150</a>
      <a href={link("Hafele","Wishtown 128")}>Hafele Wishtown 128</a>
      <a href={link("Hafele","Indirapuram")}>Hafele Indirapuram</a>
      <a href={link("Hafele","Vaishali Sec 5")}>Hafele Vaishali Sec 5</a>
      <a href={link("Hafele","Raj Nagar")}>Hafele Raj Nagar</a>
      <a href={link("Kaff","Jaypee Greens")}>Kaff Jaypee Greens</a>
      <a href={link("Kaff","Sector 150")}>Kaff Sector 150</a>
      <a href={link("Kaff","Wishtown 128")}>Kaff Wishtown 128</a>
      <a href={link("Kaff","Indirapuram")}>Kaff Indirapuram</a>
      <a href={link("Kaff","Vaishali Sec 5")}>Kaff Vaishali Sec 5</a>
      <a href={link("Kaff","Raj Nagar")}>Kaff Raj Nagar</a>
      <a href={link("Siemens","Jaypee Greens")}>Siemens Jaypee Greens</a>
      <a href={link("Siemens","Sector 150")}>Siemens Sector 150</a>
      <a href={link("Siemens","Wishtown 128")}>Siemens Wishtown 128</a>
      <a href={link("Siemens","Indirapuram")}>Siemens Indirapuram</a>
      <a href={link("Siemens","Vaishali Sec 5")}>Siemens Vaishali Sec 5</a>
      <a href={link("Siemens","Raj Nagar")}>Siemens Raj Nagar</a>
    </div>
  </footer>

  <div style={{textAlign:'center', fontSize:10, color:'#bbb', padding:'20px 0 100px'}}>© {BrandCap} Service • {phone} • {area} ONLY • All Brands • 10k+ Happy Customers</div>

  {showForm && (
  <div style={{position:'fixed', inset:0, zIndex:100000, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', padding:16}}>
    <div style={{background:'#fff', width:'100%', maxWidth:400, borderRadius:16, padding:20}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h3 style={{margin:0}}>Book {selectedService} in {area}</h3>
        <button onClick={()=>setShowForm(false)} style={{border:'none', background:'#eee', borderRadius:20, width:30, height:30, fontWeight:900}}>X</button>
      </div>
      <div style={{marginTop:16, display:'flex', flexDirection:'column', gap:12}}>
        <input placeholder="Your Name" style={{padding:12, borderRadius:8, border:'1px solid #ddd'}} />
        <input placeholder="Mobile Number" style={{padding:12, borderRadius:8, border:'1px solid #ddd'}} />
        <input value={`${selectedService} - ${BrandCap} in ${area}`} readOnly style={{padding:12, borderRadius:8, border:'1px solid #ddd', background:'#f5f5f5'}} />
        <a href={`https://wa.me/91${phone}?text=Hi, I want to book ${selectedService} for ${BrandCap} in ${area}`} style={{background:'#ff6600', color:'#fff', padding:12, borderRadius:8, textAlign:'center', textDecoration:'none', fontWeight:800}}>Submit on WhatsApp</a>
      </div>
    </div>
  </div>
  )}

  <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#fff', borderTop:'1px solid #ddd', padding:10, display:'flex', gap:10, maxWidth:800, margin:'0 auto', zIndex:30}}>
   <a href={`tel:${phone}`} style={{flex:1, background:'#000', color:'#fff', textAlign:'center', padding:14, borderRadius:10, textDecoration:'none', fontWeight:900}}>Call: {phone}</a>
   <a href={`https://wa.me/91${phone}?text=Hi, I need ${BrandCap} service in ${area}`} style={{flex:1, background:'#25D366', color:'#fff', textAlign:'center', padding:14, borderRadius:10, textDecoration:'none', fontWeight:900}}>WhatsApp</a>
  </div>
 </div>
 </>
 )
}
