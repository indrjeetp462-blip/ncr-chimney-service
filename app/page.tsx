"use client"
import { useState } from "react"

export default function Home(){
 const [tab, setTab] = useState("Service")
 
  const [showForm, setShowForm] = useState(false)
  const [selectedService, setSelectedService] = useState("") 
 
 const phone = "8796284796"

 const data:any = {
  Service: [
   {name:"Deep Chimney Service", img:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400", rating:"4.6 (59 reviews)", time:"1 hr 15 mins", points:["Full internal clean — blower, filters & grease trap deep-cleaned.","Suction tested before we leave.","Oil & grease 100% removed."]},
   {name:"Basic Chimney Service", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400", rating:"4.5 (70 reviews)", time:"60 mins", points:["Removes grease & oil buildup, restores suction.","Filters cleaned, exterior degreased.","Budget friendly service."]},
   {name:"Chimney Repair & Check-up", img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", rating:"4.5 (75 reviews)", time:"60 mins", points:["Suction, motor, noise, PCB issue repair.","All brands spare available.","Checkup fee adjusted in bill."]},
  ],
  Repair: [
   {name:"Chimney Check-up & Diagnosis", img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", rating:"4.5 (75 reviews)", time:"60 mins", points:["Accurate diagnosis of suction, motor or noise issues."]},
   {name:"Motor & PCB Repair", img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", rating:"4.6 (82 reviews)", time:"60 mins", points:["Motor, PCB, fan, blower replacement.","30-day warranty."]},
  ],
  Installation: [
   {name:"Chimney Installation", img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400", rating:"4.6 (67 reviews)", time:"1 hr 30 mins", points:["Safe setup with ducting & core cutting.","30-day warranty."]},
   {name:"Chimney Uninstallation", img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400", rating:"4.7 (64 reviews)", time:"60 mins", points:["Secure disconnection of power and ducting."]},
  ]
 }

 return (
 <>
 <style>{`body{margin:0; background:#f8f8f8; font-family:system-ui} *{box-sizing:border-box}`}</style>
 <div style={{maxWidth:800, margin:'0 auto', background:'#fff', minHeight:'100vh'}}>

  {/* HEADER */}
  <div style={{padding:'12px 16px', borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, background:'#fff', zIndex:20}}>
   <div><div style={{fontWeight:900, fontSize:19}}>NCR CHIMNEY <span style={{color:'#e11d48'}}>SERVICE</span></div><div style={{fontSize:10, color:'#666', fontWeight:700, letterSpacing:1}}>NOIDA & GHAZIABAD ONLY • {phone}</div></div>
   <a href={`tel:${phone}`} style={{background:'#e11d48', color:'#fff', padding:'10px 18px', borderRadius:8, textDecoration:'none', fontWeight:800}}>Call Now</a>
  </div>

  {/* TITLE */}
  <div style={{padding:'24px 16px 12px'}}>
   <h1 style={{fontSize:26, fontWeight:900, margin:0, lineHeight:1.2}}>Chimney Cleaning & Services in Noida & Ghaziabad</h1>
   <div style={{display:'flex', alignItems:'center', gap:8, marginTop:10}}><span style={{background:'#0f7a0f', color:'#fff', padding:'4px 10px', borderRadius:6, fontSize:13, fontWeight:700}}>★ 4.6</span><span style={{fontSize:13, color:'#555'}}>335 reviews • Trusted • Same Day Service • 10k+ Customers</span></div>
  </div>

  {/* TABS */}
  <div style={{padding:'0 16px'}}>
   <div style={{fontWeight:800, marginBottom:12, fontSize:16}}>What service do you need ?</div>
   <div style={{display:'flex', gap:8, paddingBottom:16, overflowX:'auto'}}>
    {Object.keys(data).map(t=>(
     <button key={t} onClick={()=>setTab(t)} style={{padding:'10px 22px', borderRadius:24, border: tab===t ? '1px solid #000' : '1px solid #ddd', background: tab===t ? '#000' : '#fff', color: tab===t ? '#fff' : '#000', fontWeight:800, fontSize:14, whiteSpace:'nowrap'}}>{t}</button>
    ))}
   </div>
  </div>

  {/* SERVICE CARDS */}
  <div style={{padding:16, background:'#f6f6f6'}}>
   {data[tab].map((s:any,i:number)=>(
    <div key={i} style={{background:'#fff', border:'1px solid #e8e8e8', borderRadius:16, padding:16, marginBottom:14, display:'flex', gap:14}}>
     <img src={s.img} style={{width:92, height:92, borderRadius:12, objectFit:'cover'}} />
     <div style={{flex:1}}>
      <div style={{fontWeight:800, fontSize:17}}>{s.name}</div>
      <div style={{fontSize:12, color:'#666', marginTop:4}}>★ {s.rating} • {s.time} • Noida & Gzb Only</div>
      <ul style={{margin:'10px 0 0', paddingLeft:16, color:'#444', fontSize:13, lineHeight:1.6}}>{s.points.map((p:string,j:number)=><li key={j}>{p}</li>)}</ul>
      <button onClick={()=>{setSelectedService(s.name); setShowForm(true)}} style={{display:'inline-block', marginTop:14, background:'#111', color:'#fff', padding:'10px 20px', borderRadius:8, border:'none', fontWeight:800}}>Book Now</button>
     </div>
    </div>
   ))}
  </div>

  {/* BIG SECTION 1 - HOW IT WORKS */}
  <div style={{padding:'32px 16px', background:'#fff'}}>
   <h2 style={{fontSize:20, fontWeight:900, margin:0}}>How Our Chimney Service Works</h2>
   <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, marginTop:20}}>
    <div style={{textAlign:'center', border:'1px solid #eee', borderRadius:12, padding:16}}><div style={{fontSize:28}}>📞</div><div style={{fontWeight:700, marginTop:6, fontSize:13}}>1. Call {phone}</div><div style={{fontSize:11, color:'#666', marginTop:4}}>Book on call / WhatsApp</div></div>
    <div style={{textAlign:'center', border:'1px solid #eee', borderRadius:12, padding:16}}><div style={{fontSize:28}}>🛠️</div><div style={{fontWeight:700, marginTop:6, fontSize:13}}>2. Expert Arrives</div><div style={{fontSize:11, color:'#666', marginTop:4}}>In 45 mins at doorstep</div></div>
    <div style={{textAlign:'center', border:'1px solid #eee', borderRadius:12, padding:16}}><div style={{fontSize:28}}>✨</div><div style={{fontWeight:700, marginTop:6, fontSize:13}}>3. Service Done</div><div style={{fontSize:11, color:'#666', marginTop:4}}>Suction tested, warranty</div></div>
   </div>
  </div>

  {/* BIG SECTION 2 - WHY CHOOSE US */}
  <div style={{padding:'32px 16px', background:'#f9f9f9', borderTop:'8px solid #f6f6f6'}}>
   <h2 style={{fontSize:20, fontWeight:900, margin:0}}>Why Choose NCR Chimney Service?</h2>
   <div style={{marginTop:16, display:'grid', gap:12}}>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14, display:'flex', gap:12}}><span style={{fontSize:20}}>✓</span><div><b style={{fontSize:14}}>Noida & Ghaziabad Only - Local Experts</b><div style={{fontSize:12, color:'#666', marginTop:2}}>We serve only Noida & Ghaziabad - Sector 62, 18, 15, 50, 150, 137, 76, 78, Indirapuram, Vaishali, Kaushambi, Crossing Republik, Raj Nagar, Vasundhara, Govindpuram, Shastri Nagar, Kavi Nagar.</div></div></div>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14, display:'flex', gap:12}}><span style={{fontSize:20}}>✓</span><div><b style={{fontSize:14}}>All Brands Service - Faber, Elica, Hindware, Kaff, Glen</b><div style={{fontSize:12, color:'#666', marginTop:2}}>Faber, Elica, Hindware, Kaff, Glen, Sunflame, Prestige, Pigeon, Inalsa, Kutchina, Blowhot, Bosch, Siemens, Hafele - sab brands ka repair & service.</div></div></div>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14, display:'flex', gap:12}}><span style={{fontSize:20}}>✓</span><div><b style={{fontSize:14}}>45 Min Arrival - Same Day Service - 30 Day Warranty</b><div style={{fontSize:12, color:'#666', marginTop:2}}>Same day service, verified technicians, transparent pricing, suction tested before we leave, 30-day service warranty.</div></div></div>
   </div>
  </div>

  {/* BIG SECTION 3 - BRANDS */}
  <div style={{padding:'32px 16px', background:'#fff'}}>
   <h2 style={{fontSize:18, fontWeight:900}}>All Chimney Brands We Service</h2>
   <div style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:12}}>
    {["Faber","Elica","Hindware","Kaff","Glen","Sunflame","Prestige","Pigeon","Inalsa","Kutchina","Blowhot","Bosch","Siemens","Hafele","Elica","Faber"].map(b=>(
     <span key={b} style={{border:'1px solid #ddd', padding:'6px 12px', borderRadius:20, fontSize:12, fontWeight:600}}>{b}</span>
    ))}
   </div>
  </div>

  {/* BIG SECTION 4 - REVIEWS */}
  <div style={{padding:'32px 16px', background:'#f9f9f9'}}>
   <h2 style={{fontSize:18, fontWeight:900}}>Customer Reviews - 4.6 ★ (335 reviews)</h2>
   <div style={{marginTop:16, display:'grid', gap:12}}>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14}}><div style={{fontWeight:700, fontSize:13}}>★ ★ ★ ★ ★ Rajesh - Sector 62 Noida</div><div style={{fontSize:12, color:'#666', marginTop:4}}>"Deep cleaning bahut acchi ki, suction ekdum new jaisi ho gayi. Technician time pe aaya."</div></div>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14}}><div style={{fontWeight:700, fontSize:13}}>★ ★ ★ ★ ★ Priya - Indirapuram</div><div style={{fontSize:12, color:'#666', marginTop:4}}>"Elica chimney repair 1 ghante me ho gaya. Genuine spare lagaya. Thank you NCR Service!"</div></div>
    <div style={{background:'#fff', border:'1px solid #eee', borderRadius:12, padding:14}}><div style={{fontWeight:700, fontSize:13}}>★ ★ ★ ★ ★ Amit - Vaishali Ghaziabad</div><div style={{fontSize:12, color:'#666', marginTop:4}}>"Best chimney service in Noida Ghaziabad. Call kiya 45 min me aa gaye. Price bhi sahi."</div></div>
   </div>
  </div>

  {/* BIG SECTION 5 - FAQ */}
  <div style={{padding:'32px 16px', background:'#fff'}}>
   <h2 style={{fontSize:18, fontWeight:900}}>Frequently Asked Questions</h2>
   <div style={{marginTop:12}}>
    <div style={{borderBottom:'1px solid #eee', padding:'14px 0'}}><b style={{fontSize:14}}>Q: Aap kaunse areas me service dete ho?</b><div style={{fontSize:12, color:'#666', marginTop:4}}>A: Only Noida & Ghaziabad - All sectors Noida 62, 18, 15, 50, 150, Indirapuram, Vaishali, Kaushambi, Crossing Republik, Raj Nagar, Vasundhara etc.</div></div>
    <div style={{borderBottom:'1px solid #eee', padding:'14px 0'}}><b style={{fontSize:14}}>Q: Kitne time me technician ayega?</b><div style={{fontSize:12, color:'#666', marginTop:4}}>A: 45 minutes me same day service. Call {phone}</div></div>
    <div style={{borderBottom:'1px solid #eee', padding:'14px 0'}}><b style={{fontSize:14}}>Q: Kaunse brands ka service karte ho?</b><div style={{fontSize:12, color:'#666', marginTop:4}}>A: All brands - Faber, Elica, Hindware, Kaff, Glen, Sunflame, Prestige, Pigeon, Inalsa, Kutchina, Blowhot, Bosch, Siemens, Hafele etc.</div></div>
    <div style={{borderBottom:'1px solid #eee', padding:'14px 0'}}><b style={{fontSize:14}}>Q: Warranty milti hai?</b><div style={{fontSize:12, color:'#666', marginTop:4}}>A: Haan 30-day service warranty milti hai.</div></div>
   </div>
  </div>

  {/* FOOTER - 30 LINKS */}
<footer style={{background:'#f3f4f6', padding:'40px 20px', fontSize:12, color:'#6b7280', marginTop:20}}>
  <p style={{fontWeight:'bold', marginBottom:16, fontSize:14, color:'black'}}>Our Service Areas (30 Locations):</p>
  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
    <a href="/faber-chimney-service-jaypee-greens-greater-noida">Faber Jaypee Greens</a>
    <a href="/faber-chimney-service-sector-150-noida">Faber Sector 150</a>
    <a href="/faber-chimney-service-jaypee-wishtown-sector-128-noida">Faber Wishtown 128</a>
    <a href="/faber-chimney-service-indirapuram-ghaziabad">Faber Indirapuram</a>
    <a href="/faber-chimney-service-vaishali-sector-5-ghaziabad">Faber Vaishali Sec 5</a>
    <a href="/faber-chimney-service-raj-nagar-ghaziabad">Faber Raj Nagar</a>
    <a href="/glen-chimney-service-jaypee-greens-greater-noida">Glen Jaypee Greens</a>
    <a href="/glen-chimney-service-sector-150-noida">Glen Sector 150</a>
    <a href="/glen-chimney-service-jaypee-wishtown-sector-128-noida">Glen Wishtown 128</a>
    <a href="/glen-chimney-service-indirapuram-ghaziabad">Glen Indirapuram</a>
    <a href="/glen-chimney-service-vaishali-sector-5-ghaziabad">Glen Vaishali Sec 5</a>
    <a href="/glen-chimney-service-raj-nagar-ghaziabad">Glen Raj Nagar</a>
    <a href="/hafele-chimney-service-jaypee-greens-greater-noida">Hafele Jaypee Greens</a>
    <a href="/hafele-chimney-service-sector-150-noida">Hafele Sector 150</a>
    <a href="/hafele-chimney-service-jaypee-wishtown-sector-128-noida">Hafele Wishtown 128</a>
    <a href="/hafele-chimney-service-indirapuram-ghaziabad">Hafele Indirapuram</a>
    <a href="/hafele-chimney-service-vaishali-sector-5-ghaziabad">Hafele Vaishali Sec 5</a>
    <a href="/hafele-chimney-service-raj-nagar-ghaziabad">Hafele Raj Nagar</a>
    <a href="/kaff-chimney-service-jaypee-greens-greater-noida">Kaff Jaypee Greens</a>
    <a href="/kaff-chimney-service-sector-150-noida">Kaff Sector 150</a>
    <a href="/kaff-chimney-service-jaypee-wishtown-sector-128-noida">Kaff Wishtown 128</a>
    <a href="/kaff-chimney-service-indirapuram-ghaziabad">Kaff Indirapuram</a>
    <a href="/kaff-chimney-service-vaishali-sector-5-ghaziabad">Kaff Vaishali Sec 5</a>
    <a href="/kaff-chimney-service-raj-nagar-ghaziabad">Kaff Raj Nagar</a>
    <a href="/siemens-chimney-service-jaypee-greens-greater-noida">Siemens Jaypee Greens</a>
    <a href="/siemens-chimney-service-sector-150-noida">Siemens Sector 150</a>
    <a href="/siemens-chimney-service-jaypee-wishtown-sector-128-noida">Siemens Wishtown 128</a>
    <a href="/siemens-chimney-service-indirapuram-ghaziabad">Siemens Indirapuram</a>
    <a href="/siemens-chimney-service-vaishali-sector-5-ghaziabad">Siemens Vaishali Sec 5</a>
    <a href="/siemens-chimney-service-raj-nagar-ghaziabad">Siemens Raj Nagar</a>
  </div>
</footer>

  <div style={{textAlign:'center', fontSize:10, color:'#bbb', padding:'20px 0 100px'}}>© NCR Chimney Service • {phone} • Noida & Ghaziabad ONLY • All Brands • 10k+ Happy Customers</div>

 
{showForm && (
<div style={{position:'fixed', inset:0, zIndex:100000, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', padding:16}}>
<div style={{background:'#fff', width:'100%', maxWidth:400, borderRadius:16, padding:20}}>
<div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<h3 style={{margin:0}}>Book {selectedService}</h3>
<button onClick={()=>setShowForm(false)} style={{border:'none', background:'#eee', borderRadius:20, width:30, height:30, fontWeight:900}}>X</button>
</div>
<div style={{marginTop:16, display:'flex', flexDirection:'column', gap:12}}>
<input placeholder="Your Name" style={{padding:12, borderRadius:8, border:'1px solid #ddd'}} />
<input placeholder="Mobile Number" style={{padding:12, borderRadius:8, border:'1px solid #ddd'}} />
<input value={selectedService} readOnly style={{padding:12, borderRadius:8, border:'1px solid #ddd', background:'#f5f5f5'}} />
<a href={`https://wa.me/91${phone}?text=Hi, I want to book ${selectedService}`} style={{background:'#ff6600', color:'#fff', padding:12, borderRadius:8, textAlign:'center', textDecoration:'none', fontWeight:800}}>Submit on WhatsApp</a>
</div>
</div>
</div>
)}
  <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#fff', borderTop:'1px solid #ddd', padding:10, display:'flex', gap:10, maxWidth:800, margin:'0 auto', zIndex:30}}>
   <a href={`tel:${phone}`} style={{flex:1, background:'#000', color:'#fff', textAlign:'center', padding:14, borderRadius:10, textDecoration:'none', fontWeight:900}}>Call: {phone}</a>
   <a href={`https://wa.me/91${phone}`} style={{flex:1, background:'#25D366', color:'#fff', textAlign:'center', padding:14, borderRadius:10, textDecoration:'none', fontWeight:900}}>WhatsApp</a>
  </div>
 </div>
 </>
 )
}
