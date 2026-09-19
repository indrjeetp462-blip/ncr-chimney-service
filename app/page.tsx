"use client"
import { useState, useEffect } from "react"

export default function Home(){
 const [tab, setTab] = useState("Service")
 const [pop, setPop] = useState(false)
 useEffect(()=>{ const t=setTimeout(()=>setPop(true), 3000); return ()=>clearTimeout(t) }, [])
 const phone = "8796284796"

 const services = {
  Service: [
   {name:"Deep Chimney Service", img:"https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200", rating:"4.6 (59 reviews)", time:"1 hr 15 mins", points:["Full internal clean — blower, filters & grease trap deep-cleaned.","Suction tested before we leave."]},
   {name:"Basic Chimney Service", img:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200", rating:"4.5 (70 reviews)", time:"60 mins", points:["Removes grease & oil buildup, restores suction.","Filters cleaned, exterior degreased."]}
  ],
  Repair: [
   {name:"Chimney Check-up & Diagnosis", img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200", rating:"4.5 (75 reviews)", time:"60 mins", points:["Accurate diagnosis of suction, motor or noise issues.","Checkup fee adjusted in final bill."]},
   {name:"Chimney Motor Repair", img:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200", rating:"4.6 (82 reviews)", time:"60 mins", points:["Motor not working, slow suction, noise issue fixed.","All brands motor replacement available."]},
  ],
  "Installation": [
   {name:"Chimney Installation", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200", rating:"4.6 (67 reviews)", time:"1 hr 30 mins", points:["Safe, secure chimney setup with ducting.","Backed by 30-day service warranty."]},
   {name:"Chimney Uninstallation", img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=200", rating:"4.7 (64 reviews)", time:"60 mins", points:["Secure disconnection of power and ducting."]}
  ]
 }

 return (
 <>
 <style>{`body{margin:0; background:#f8f8f8; font-family:system-ui} *{box-sizing:border-box}`}</style>
 <div style={{maxWidth:800, margin:'0 auto', background:'#fff', minHeight:'100vh'}}>

  <div style={{padding:'12px 16px', borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, background:'#fff', zIndex:20}}>
   <div style={{fontWeight:900, fontSize:18}}>NCR CHIMNEY <span style={{color:'#e11d48'}}>SERVICE</span> <div style={{fontSize:10, color:'#666', letterSpacing:1}}>NOIDA & GHAZIABAD ONLY • {phone}</div></div>
   <a href={`tel:${phone}`} style={{background:'#e11d48', color:'#fff', padding:'8px 16px', borderRadius:6, textDecoration:'none', fontWeight:700}}>Call Now</a>
  </div>

  <div style={{padding:20}}>
   <h1 style={{fontSize:22, fontWeight:800, margin:0}}>Chimney Cleaning & Services in Noida & Ghaziabad</h1>
   <div style={{display:'flex', alignItems:'center', gap:6, marginTop:6}}><span style={{background:'#0f7a0f', color:'#fff', padding:'2px 6px', borderRadius:4, fontSize:12}}>★ 4.6</span><span style={{fontSize:13, color:'#555'}}>335 reviews • Trusted • Same Day Service</span></div>
  </div>

  <div style={{padding:'0 16px'}}>
   <div style={{fontWeight:700, marginBottom:10}}>What service do you need ?</div>
   <div style={{display:'flex', gap:8, borderBottom:'1px solid #eee', paddingBottom:12, overflowX:'auto'}}>
    {Object.keys(services).map(t=>(
     <button key={t} onClick={()=>setTab(t)} style={{padding:'8px 16px', borderRadius:20, border: tab===t ? '1px solid #000' : '1px solid #ddd', background: tab===t ? '#000' : '#fff', color: tab===t ? '#fff' : '#000', whiteSpace:'nowrap', fontWeight:600, fontSize:13}}>{t}</button>
    ))}
   </div>
  </div>

  <div style={{padding:16, background:'#f8f8f8'}}>
   {(services as any)[tab].map((s:any,i:number)=>(
    <div key={i} style={{background:'#fff', border:'1px solid #e5e5e5', borderRadius:12, padding:16, marginBottom:12, display:'flex', gap:12}}>
     <img src={s.img} style={{width:80, height:80, borderRadius:8, objectFit:'cover'}} />
     <div style={{flex:1}}>
      <div style={{fontWeight:800, fontSize:15}}>{s.name}</div>
      <div style={{fontSize:12, color:'#666', marginTop:4}}>★ {s.rating} • {s.time} • Noida & Gzb Only</div>
      <ul style={{margin:'8px 0 0', paddingLeft:14, color:'#555', fontSize:12, lineHeight:1.5}}>{s.points.map((p:string,j:number)=><li key={j}>{p}</li>)}</ul>
      <div style={{marginTop:10}}><a href={`tel:${phone}`} style={{display:'inline-block', background:'#000', color:'#fff', padding:'7px 18px', borderRadius:6, textDecoration:'none', fontWeight:700, fontSize:13}}>Book Now</a></div>
     </div>
    </div>
   ))}
  </div>

  {/* TRUST */}
  <div style={{padding:16, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, textAlign:'center', fontSize:11, fontWeight:700}}>
   <div style={{border:'1px solid #eee', padding:10, borderRadius:8}}>✓ 30-Day Warranty</div>
   <div style={{border:'1px solid #eee', padding:10, borderRadius:8}}>✓ Verified Pro</div>
   <div style={{border:'1px solid #eee', padding:10, borderRadius:8}}>✓ 45 Min Arrival</div>
  </div>

  {/* SEO 2000 WORDS - ALL BRANDS + ALL AREAS */}
  <div style={{padding:16, borderTop:'8px solid #f8f8f8'}}>
   <h2 style={{fontSize:14, fontWeight:800}}>NCR Chimney Service - Noida & Ghaziabad Only - All Brands Service Center</h2>
   <div style={{fontSize:10, color:'#888', lineHeight:1.7, textAlign:'justify', marginTop:8, maxHeight:300, overflowY:'auto', border:'1px solid #eee', padding:10}}>
    chimney service noida ghaziabad 8796284796 faber chimney service noida faber chimney service ghaziabad faber chimney repair noida faber chimney cleaning noida faber chimney installation noida faber service center noida ghaziabad faber kitchen chimney service near me elica chimney service noida elica chimney service ghaziabad elica chimney repair noida elica chimney cleaning ghaziabad elica service center noida ghaziabad hindware chimney service noida hindware chimney service ghaziabad hindware chimney repair noida ghaziabad hindware chimney cleaning kaff chimney service noida kaff chimney service ghaziabad kaff chimney repair kaff service center noida ghaziabad glen chimney service noida glen chimney service ghaziabad glen chimney repair noida glen chimney cleaning sunflame chimney service noida sunflame chimney service ghaziabad prestige chimney service noida prestige chimney service ghaziabad pigeon chimney service noida pigeon chimney service ghaziabad inalsa chimney service noida inalsa chimney service ghaziabad kutchina chimney service noida kutchina chimney service ghaziabad blowhot chimney service noida blowhot chimney service ghaziabad bosch chimney service noida bosch chimney service ghaziabad siemens chimney service noida siemens chimney service ghaziabad hafele chimney service noida hafele chimney service ghaziabad kitchen chimney service near me chimney cleaning near me chimney repair near me chimney service near me chimney installation near me chimney motor repair noida chimney PCB repair noida chimney suction problem chimney noise problem chimney auto clean not working chimney filter cleaning chimney duct cleaning chimney deep cleaning chimney basic service chimney check up chimney installation uninstallation best chimney service noida best chimney service ghaziabad same day chimney service 45 min chimney service noida extension chimney service noida sector 62 chimney service noida sector 18 chimney service noida sector 15 chimney service noida sector 50 chimney service noida sector 150 chimney service noida sector 137 chimney service noida sector 76 chimney service noida sector 78 chimney service noida sector 135 chimney service noida sector 74 chimney service noida sector 19 chimney service noida sector 27 chimney service noida sector 12 chimney service noida sector 19 chimney service indirapuram chimney service vaishali chimney service vasundhara chimney service kaushambi chimney service crossing republik chimney service raj nagar extension chimney service shastri nagar chimney service kavi nagar chimney service govindpuram chimney service rajendra nagar chimney service loni chimney service shalimar garden chimney service modinagar chimney service muradnagar chimney service lohiya nagar chimney service gaur city chimney service gaur chowk chimney service noida city centre chimney service greater noida chimney service noida extension chimney service ghaziabad extension chimney service chimney cleaning service noida ghaziabad kitchen chimney repair service centre all brands chimney service centre faber elica hindware kaff glen sunflame prestige pigeon inalsa kutchina blowhot bosch siemens hafele chimney service noida ghaziabad only 8796284796 call now whatsapp now book chimney service online chimney service at doorstep chimney motor replacement chimney blower cleaning chimney grease trap cleaning chimney suction tested chimney service warranty verified professionals transparent pricing chimney AMC service chimney annual maintenance chimney filter replacement chimney ducting work chimney carbon filter chimney baffle filter chimney mesh filter chimney installation with ducting chimney core cutting chimney oil collector cleaning chimney auto clean function repair chimney push button repair chimney touch control repair chimney motion sensor repair chimney LED light repair chimney installation charges chimney cleaning charges chimney repair charges chimney service cost noida ghaziabad low cost chimney service professional chimney service trusted chimney service 10k customers 4.8 star chimney service chimney service contact number 8796284796 ncr chimney service noida ghaziabad.
   </div>
  </div>

  <div style={{textAlign:'center', fontSize:10, color:'#aaa', padding:10, borderTop:'1px solid #eee'}}>© NCR Chimney Service • 8796284796 • Serving Only Noida & Ghaziabad • All Brands</div>

  {/* POPUP CALL NOW */}
  {pop && (
   <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'flex-end', justifyContent:'center', padding:16, zIndex:99}} onClick={()=>setPop(false)}>
    <div style={{background:'#fff', borderRadius:20, padding:20, width:'100%', maxWidth:360, animation:'pop .3s'}} onClick={e=>e.stopPropagation()}>
     <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><div style={{fontWeight:900, fontSize:18}}>📞 Chimney Service?</div><div onClick={()=>setPop(false)} style={{background:'#eee', width:28, height:28, borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}}>✕</div></div>
     <div style={{color:'#666', fontSize:13, marginTop:6}}>Noida & Ghaziabad Only • 45 Mins Me Technician</div>
     <div style={{background:'#fffbe6', border:'1px dashed #eab308', borderRadius:8, padding:8, marginTop:12, fontSize:11, textAlign:'center'}}>Faber • Elica • Hindware • Kaff • Glen • All Brands • {phone}</div>
     <a href={`tel:${phone}`} style={{display:'block', background:'#000', color:'#fff', textAlign:'center', padding:16, borderRadius:12, marginTop:14, textDecoration:'none', fontWeight:900, fontSize:16}}>📞 Call Now: {phone}</a>
     <a href={`https://wa.me/91${phone}?text=Hi, Chimney Service chahiye Noida/Ghaziabad me`} style={{display:'block', background:'#25D366', color:'#fff', textAlign:'center', padding:14, borderRadius:12, marginTop:8, textDecoration:'none', fontWeight:800}}>WhatsApp Now</a>
     <div style={{textAlign:'center', fontSize:10, color:'#999', marginTop:8}}>Sector 62, 18, Indirapuram, Vaishali, Crossing, Raj Nagar, Vasundhara</div>
    </div>
   </div>
  )}

  <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#fff', borderTop:'1px solid #ddd', padding:10, display:'flex', gap:8, maxWidth:800, margin:'0 auto', zIndex:30}}>
   <a href={`tel:${phone}`} style={{flex:1, background:'#000', color:'#fff', textAlign:'center', padding:14, borderRadius:8, textDecoration:'none', fontWeight:800}}>Call: {phone}</a>
   <a href={`https://wa.me/91${phone}`} style={{flex:1, background:'#25D366', color:'#fff', textAlign:'center', padding:14, borderRadius:8, textDecoration:'none', fontWeight:800}}>WhatsApp</a>
  </div>
  <div style={{height:70}}></div>

 </div>
 </>
 )
}
