"use client"
import { useState, useEffect } from "react"

export default function Home(){
 const [tab, setTab] = useState("Service")
 const [pop, setPop] = useState(false)
 useEffect(()=>{ setTimeout(()=>setPop(true), 3000) }, [])
 const phone = "8796284796"

 const data:any = {
  Service: [
   {name:"Deep Chimney Service", img:"/deep.jpg", rating:"4.6 (59 reviews)", time:"1 hr 15 mins", points:["Full internal clean — blower, filters & grease trap deep-cleaned.","Suction tested before we leave."]},
   {name:"Basic Chimney Service", img:"/basic.jpg", rating:"4.5 (70 reviews)", time:"60 mins", points:["Removes grease & oil buildup, restores suction.","Filters cleaned, exterior degreased."]},
   {name:"Chimney Repair & Check-up", img:"/repair.jpg", rating:"4.5 (75 reviews)", time:"60 mins", points:["Suction, motor, noise, PCB issue repair.","All brands spare available."]},
  ],
  Repair: [
   {name:"Chimney Check-up & Diagnosis", img:"/repair.jpg", rating:"4.5 (75 reviews)", time:"60 mins", points:["Accurate diagnosis of suction, motor or noise issues.","Checkup fee adjusted in final bill."]},
   {name:"Motor & PCB Repair", img:"/repair.jpg", rating:"4.6 (82 reviews)", time:"60 mins", points:["Motor, PCB, fan, blower replacement.","30-day service warranty."]},
  ],
  Installation: [
   {name:"Chimney Installation", img:"/deep.jpg", rating:"4.6 (67 reviews)", time:"1 hr 30 mins", points:["Safe, secure chimney setup with ducting.","Backed by 30-day warranty."]},
   {name:"Chimney Uninstallation", img:"/deep.jpg", rating:"4.7 (64 reviews)", time:"60 mins", points:["Secure disconnection of power and ducting."]},
  ]
 }

 return (
 <>
 <style>{`body{margin:0; background:#f8f8f8; font-family:system-ui} *{box-sizing:border-box}`}</style>
 <div style={{maxWidth:800, margin:'0 auto', background:'#fff', minHeight:'100vh'}}>

  <div style={{padding:'12px 16px', borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, background:'#fff', zIndex:20}}>
   <div><div style={{fontWeight:900, fontSize:18}}>NCR CHIMNEY <span style={{color:'#e11d48'}}>SERVICE</span></div><div style={{fontSize:10, color:'#666', letterSpacing:1, fontWeight:700}}>NOIDA & GHAZIABAD ONLY • {phone}</div></div>
   <a href={`tel:${phone}`} style={{background:'#e11d48', color:'#fff', padding:'10px 18px', borderRadius:8, textDecoration:'none', fontWeight:800, fontSize:14}}>Call Now</a>
  </div>

  <div style={{padding:'20px 16px 12px'}}>
   <h1 style={{fontSize:24, fontWeight:900, margin:0, lineHeight:1.2}}>Chimney Cleaning & Services in<br/>Noida & Ghaziabad</h1>
   <div style={{display:'flex', alignItems:'center', gap:8, marginTop:8}}><span style={{background:'#0f7a0f', color:'#fff', padding:'3px 8px', borderRadius:6, fontSize:12, fontWeight:700}}>★ 4.6</span><span style={{fontSize:13, color:'#555'}}>335 reviews • Trusted • Same Day Service</span></div>
  </div>

  <div style={{padding:'0 16px'}}>
   <div style={{fontWeight:800, marginBottom:10, fontSize:15}}>What service do you need ?</div>
   <div style={{display:'flex', gap:8, paddingBottom:14, overflowX:'auto'}}>
    {Object.keys(data).map(t=>(
     <button key={t} onClick={()=>setTab(t)} style={{padding:'9px 20px', borderRadius:22, border: tab===t ? '1px solid #000' : '1px solid #ddd', background: tab===t ? '#000' : '#fff', color: tab===t ? '#fff' : '#000', whiteSpace:'nowrap', fontWeight:700, fontSize:14}}>{t}</button>
    ))}
   </div>
  </div>

  <div style={{padding:16, background:'#f6f6f6'}}>
   {data[tab].map((s:any,i:number)=>(
    <div key={i} style={{background:'#fff', border:'1px solid #e8e8e8', borderRadius:16, padding:14, marginBottom:14, display:'flex', gap:14, boxShadow:'0 1px 3px rgba(0,0,0,0.04)'}}>
     <img src={s.img} alt={s.name} style={{width:88, height:88, borderRadius:10, objectFit:'cover', flexShrink:0, background:'#eee'}} />
     <div style={{flex:1}}>
      <div style={{fontWeight:800, fontSize:16}}>{s.name}</div>
      <div style={{fontSize:12, color:'#666', marginTop:4}}>★ {s.rating} • {s.time} • Noida & Gzb Only</div>
      <ul style={{margin:'8px 0 0', paddingLeft:14, color:'#444', fontSize:13, lineHeight:1.5}}>{s.points.map((p:string,j:number)=><li key={j}>{p}</li>)}</ul>
      <a href={`tel:${phone}`} style={{display:'inline-block', marginTop:12, background:'#111', color:'#fff', padding:'9px 22px', borderRadius:8, textDecoration:'none', fontWeight:800, fontSize:14}}>Book Now</a>
     </div>
    </div>
   ))}
  </div>

  <div style={{padding:16, background:'#fff'}}>
   <h2 style={{fontSize:13, fontWeight:800}}>Noida & Ghaziabad Only - All Brands Chimney Service - {phone}</h2>
   <div style={{fontSize:9.5, color:'#999', lineHeight:1.8, textAlign:'justify', border:'1px solid #f0f0f0', padding:10, borderRadius:8, marginTop:8, maxHeight:280, overflowY:'auto'}}>
    Faber chimney service Noida Ghaziabad 8796284796, Faber chimney repair Noida Sector 62 18 15 50 150 Indirapuram Vaishali Kaushambi Crossing Republik Raj Nagar Vasundhara, Elica chimney service Noida Ghaziabad, Hindware chimney service, Kaff chimney service, Glen chimney service, Sunflame, Prestige, Pigeon, Inalsa, Kutchina, Blowhot, Bosch, Siemens, Hafele chimney service Noida Ghaziabad only, chimney service near me, chimney cleaning near me, chimney repair near me, kitchen chimney service, best chimney service Noida Ghaziabad, chimney motor repair, PCB repair, suction problem, noise problem, auto clean not working, filter cleaning, duct cleaning, deep cleaning, basic cleaning, check up, installation, AMC, 45 min arrival, same day service, 30 day warranty, 335 reviews 4.6 star, NCR chimney service, Gaur City, Noida Extension, Vaishali, Indirapuram, Vasundhara, Kaushambi, Raj Nagar, Crossing Republik, Shastri Nagar, Govindpuram, Kavi Nagar, Loni, Shalimar Garden, Modinagar, chimney service contact {phone}.
   </div>
  </div>

  <div style={{textAlign:'center', fontSize:9, color:'#bbb', padding:'12px 0 90px'}}>© NCR Chimney Service • {phone} • Noida & Ghaziabad ONLY • All Brands</div>

  {pop && (
   <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'flex-end', justifyContent:'center', padding:16, zIndex:99}} onClick={()=>setPop(false)}>
    <div style={{background:'#fff', borderRadius:20, padding:20, width:'100%', maxWidth:360}} onClick={e=>e.stopPropagation()}>
     <div style={{display:'flex', justifyContent:'space-between'}}><div style={{fontWeight:900, fontSize:18}}>📞 Chimney Service?</div><div onClick={()=>setPop(false)} style={{background:'#eee', width:28, height:28, borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontWeight:700}}>✕</div></div>
     <div style={{color:'#666', fontSize:13, marginTop:6}}>Noida & Ghaziabad Only • 45 Min Me Technician</div>
     <a href={`tel:${phone}`} style={{display:'block', background:'#000', color:'#fff', textAlign:'center', padding:16, borderRadius:12, marginTop:14, textDecoration:'none', fontWeight:900}}>Call Now: {phone}</a>
     <a href={`https://wa.me/91${phone}?text=Hi, Chimney Service chahiye`} style={{display:'block', background:'#25D366', color:'#fff', textAlign:'center', padding:14, borderRadius:12, marginTop:8, textDecoration:'none', fontWeight:800}}>WhatsApp Now</a>
    </div>
   </div>
  )}

  <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#fff', borderTop:'1px solid #ddd', padding:10, display:'flex', gap:10, maxWidth:800, margin:'0 auto', zIndex:30}}>
   <a href={`tel:${phone}`} style={{flex:1, background:'#000', color:'#fff', textAlign:'center', padding:14, borderRadius:10, textDecoration:'none', fontWeight:900}}>Call: {phone}</a>
   <a href={`https://wa.me/91${phone}`} style={{flex:1, background:'#25D366', color:'#fff', textAlign:'center', padding:14, borderRadius:10, textDecoration:'none', fontWeight:900}}>WhatsApp</a>
  </div>
  <div style={{height:80}}></div>
 </div>
 </>
 )
}
