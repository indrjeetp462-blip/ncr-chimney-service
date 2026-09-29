"use client"
import { useState, useEffect } from "react"

const areaInfo:any = {
  "jaypee-greens": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk", para: "Premium villas me Faber Hafele oil clogging." },
  "sector-150": { full: "Sector 150 Noida", pin: "201310", near: "Sports City", para: "Kaff Glen suction problem common." },
  "wishtown-128": { full: "Wishtown Sector 128", pin: "201304", near: "JP Hospital", para: "High-rise me noise complaint zyada." },
  "indirapuram": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall", para: "Faber Hindware service daily." },
  "vaishali-sec-5": { full: "Vaishali Sector 5", pin: "201010", near: "Vaishali Metro", para: "Glen Faber repair zyada." },
  "raj-nagar": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC Kavi Nagar", para: "Siemens Kaff PCB repair." }
}

export default function Page({ params }: any){
 const slug = params.slug || "faber-jaypee-greens"
 const parts = slug.split("-")
 const brandRaw = parts[0]
 const areaKey = parts.slice(1).join("-")
 const areaData = areaInfo[areaKey] || { full: areaKey.replace(/-/g," "), pin: "201301", near: "Local", para: "Expert service" }
 const BrandCap = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1)
 const area = areaData.full
 const mainTitle = BrandCap + " Chimney Service in " + area
 useEffect(()=>{ document.title = mainTitle + " - Pincode " + areaData.pin },[mainTitle, areaData.pin])
 const [tab, setTab] = useState("Service")
 const phone="8796284796"
 const greenLink={color:'#15803d',fontWeight:700,textDecoration:'none'} as any
 return(
 <>
 <div style={{maxWidth:800,margin:'0 auto',background:'#fff',minHeight:'100vh',fontFamily:'system-ui'}}>
  <div style={{padding:12,borderBottom:'1px solid #eee',display:'flex',justifyContent:'space-between'}}>
   <div><div style={{fontWeight:900}}>{BrandCap.toUpperCase()} SERVICE</div><div style={{fontSize:10,color:'#666'}}>{area.toUpperCase()} PIN {areaData.pin}</div></div>
   <a href={"tel:"+phone} style={{background:'#e11d48',color:'#fff',padding:'6px 10px',borderRadius:6,textDecoration:'none',fontWeight:800}}>Call Now</a>
  </div>
  <div style={{padding:24}}>
   <h1 style={{fontSize:22,fontWeight:900,margin:0}}>{mainTitle} - Pincode {areaData.pin} - 30 Min Visit</h1>
   <p style={{fontSize:13,color:'#444',background:'#f9fafb',padding:12,borderRadius:10,borderLeft:'4px solid #e11d48'}}>{areaData.para} {BrandCap} specialist team {area} me {areaData.near} me not working, noise, repair sab solve.</p>
   <div style={{display:'flex',gap:8,marginTop:16,overflowX:'auto'}}>
    {["Service","Repair","Installation"].map(t=>(<button key={t} onClick={()=>setTab(t)} style={{padding:'10px 22px',borderRadius:24,border:tab===t?'1px solid #000':'1px solid #ddd',background:tab===t?'#000':'#fff',color:tab===t?'#fff':'#000',fontWeight:800}}>{t}</button>))}
   </div>
  </div>
  <div style={{padding:16,background:'#f6f6f6'}}>
    <div style={{background:'#fff',border:'1px solid #e8e8e8',borderRadius:16,padding:16}}>
      <div style={{fontWeight:800}}>{tab} in {area}</div>
      <div style={{fontSize:12,color:'#666'}}>{area} PIN {areaData.pin} - {areaData.near}</div>
    </div>
  </div>
  <div style={{padding:20}}>
    <h2 style={{fontSize:14,fontWeight:900}}>24 Keywords - {BrandCap} Service in {area}</h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:10,fontSize:11}}>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>faber chimney service in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>faber chimney not working in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>faber chimney repair in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>faber chimney noise in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>glen chimney service in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>glen chimney not working in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>glen chimney repair in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>glen chimney noise in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>kaff chimney service in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>kaff chimney not working in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>kaff chimney repair in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>kaff chimney noise in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>siemens chimney service in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>siemens chimney not working in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>siemens chimney repair in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>siemens chimney noise in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>hafele chimney service in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>hafele chimney not working in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>hafele chimney repair in {area}</div>
      <div style={{background:'#f3f4f6',padding:8,borderRadius:8}}>hafele chimney noise in {area}</div>
      <div style={{background:'#e0f2fe',padding:8,borderRadius:8}}>chimney service in {area}</div>
      <div style={{background:'#e0f2fe',padding:8,borderRadius:8}}>chimney repair in {area}</div>
      <div style={{background:'#e0f2fe',padding:8,borderRadius:8}}>chimney installation in {area}</div>
      <div style={{background:'#e0f2fe',padding:8,borderRadius:8}}>chimney cleaning in {area}</div>
    </div>
  </div>
  <footer style={{background:'#f3f4f6',padding:20,fontSize:12}}>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
      {["faber-jaypee-greens","faber-sector-150","faber-wishtown-128","faber-indirapuram","faber-vaishali-sec-5","faber-raj-nagar","glen-jaypee-greens","glen-sector-150","glen-wishtown-128","glen-indirapuram","glen-vaishali-sec-5","glen-raj-nagar","hafele-jaypee-greens","hafele-sector-150","hafele-wishtown-128","hafele-indirapuram","hafele-vaishali-sec-5","hafele-raj-nagar","kaff-jaypee-greens","kaff-sector-150","kaff-wishtown-128","kaff-indirapuram","kaff-vaishali-sec-5","kaff-raj-nagar","siemens-jaypee-greens","siemens-sector-150","siemens-wishtown-128","siemens-indirapuram","siemens-vaishali-sec-5","siemens-raj-nagar"].map(s=> <a key={s} href={"/"+s} style={greenLink}>{s.replace(/-/g,' ')}</a>)}
    </div>
  </footer>
  <div style={{textAlign:'center',padding:10,fontSize:10,color:'#bbb'}}>© {BrandCap} Service PIN {areaData.pin}</div>
  <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'1px solid #ddd',padding:10,display:'flex',gap:10,maxWidth:800,margin:'0 auto'}}><a href={"tel:"+phone} style={{flex:1,background:'#000',color:'#fff',textAlign:'center',padding:14,borderRadius:10,textDecoration:'none',fontWeight:900}}>Call</a><a href={"https://wa.me/91"+phone+"?text="+BrandCap+" chimney service in "+area} style={{flex:1,background:'#25D366',color:'#fff',textAlign:'center',padding:14,borderRadius:10,textDecoration:'none',fontWeight:900}}>WhatsApp</a></div>
 </div>
 </>
 )
}
