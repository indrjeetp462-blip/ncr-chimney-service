"use client"
import { useState, useEffect } from "react"

const areaInfo: any = {
 "jaypee-greens": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk, Surajpur", para: "Jaypee Greens me premium villas me Faber, Hafele chimneys me oil clogging zyada hota hai." },
 "sector-150": { full: "Sector 150 Noida", pin: "201310", near: "Sports City, Purvanchal", para: "Sector 150 me Kaff, Glen chimney suction problem common hai, ducting lambi hai." },
 "wishtown-128": { full: "Wishtown Sector 128 Noida", pin: "201304", near: "Klassic, Kube, JP Hospital", para: "Wishtown 128 high-rise me noise complaint zyada aati hai." },
 "indirapuram": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall, Jaipuria", para: "Indirapuram me Faber, Hindware service daily hoti hai." },
 "vaishali-sec-5": { full: "Vaishali Sector 5 Ghaziabad", pin: "201010", near: "Vaishali Metro, Mahagun Mall", para: "Vaishali Sec 5 me rental flats me Glen, Faber repair zyada hota hai." },
 "raj-nagar": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC, Kavi Nagar", para: "Raj Nagar me Siemens, Kaff old models ka PCB, motor repair zyada hota hai." }
}

function TypeWriter({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0); const [subIndex, setSubIndex] = useState(0); const [deleting, setDeleting] = useState(false); const [text, setText] = useState("");
  useEffect(() => { const c=texts[index]; if(!deleting && subIndex===c.length){setTimeout(()=>setDeleting(true),1200);return;} if(deleting && subIndex===0){setDeleting(false);setIndex((p)=>(p+1)%texts.length);return;} const t=setTimeout(()=>{setSubIndex(p=>deleting?p-1:p+1);setText(c.substring(0,deleting?subIndex-1:subIndex+1));},deleting?25:40);return()=>clearTimeout(t);},[subIndex,index,deleting,texts]);
  return <span>{text}<span style={{borderLeft:"2px solid #000", marginLeft:2}}>|</span></span>;
}

export default function Page({ params }: { params: { slug: string } }){
 const slug = params.slug || "faber-jaypee-greens"
 const parts = slug.split('-')
 const brandRaw = parts[0]
 const areaKey = parts.slice(1).join('-')
 const areaData = areaInfo[areaKey] || { full: areaKey.replace(/-/g,' ').replace(/\b\w/g:(l:any)=>l.toUpperCase()), pin: "201301", near: "Local", para: `Expert ${brandRaw} service in ${areaKey}.` }
 const BrandCap = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1)
 const area = areaData.full
 const mainTitle = `${BrandCap} Chimney Service in ${area}`
 const seoTitles = [`${BrandCap} Chimney Service in ${area}`, `${BrandCap} Chimney Not Working in ${area}`, `${BrandCap} Chimney Repair in ${area}`, `${BrandCap} Chimney Noise in ${area} - 45 Min Service`]
 useEffect(()=>{ document.title = `${mainTitle} - Pincode ${areaData.pin} | 30 Min Visit | 4.6★` },[mainTitle, areaData.pin])
 const [tab, setTab] = useState("Service"); const [showForm, setShowForm] = useState(false); const [selectedService, setSelectedService] = useState(""); const [showCallPopup, setShowCallPopup] = useState(false); const phone="8796284796";
 useEffect(()=>{ const timer=setTimeout(()=>setShowCallPopup(true),5000);return()=>clearTimeout(timer);},[])
 const greenLink={color:'#15803d',fontWeight:700,textDecoration:'none'} as any;
 return (
 <>
 <style>{`body{margin:0;background:#f8f8f8;font-family:system-ui} *{box-sizing:border-box}`}</style>
 <div style={{maxWidth:800,margin:'0 auto',background:'#fff',minHeight:'100vh'}}>
  <div style={{padding:'12px 14px',borderBottom:'1px solid #eee',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,background:'#fff',zIndex:20}}>
   <div><div style={{fontWeight:900,fontSize:19}}>{BrandCap.toUpperCase()} <span style={{color:'#e11d48'}}>SERVICE</span></div><div style={{fontSize:10.5,color:'#666',fontWeight:800}}>{area.toUpperCase()} • PIN {areaData.pin}</div></div>
   <a href={`tel:${phone}`} style={{background:'#e11d48',color:'#fff',padding:'6px 10px',borderRadius:6,textDecoration:'none',fontWeight:800,fontSize:11,textAlign:'center'}}>Call<br/>Now</a>
  </div>
  <div style={{padding:'24px 16px 12px'}}>
   <h1 style={{fontSize:23,fontWeight:900,margin:0,lineHeight:1.25}}>{mainTitle} - Pincode {areaData.pin} - 30 Min Visit | Professional Technician in {areaData.near}</h1>
   <p style={{fontSize:13,color:'#444',lineHeight:1.6,marginTop:10,background:'#f9fafb',padding:12,borderRadius:10,borderLeft:'4px solid #e11d48'}}>{areaData.para} {BrandCap} specialist team {area} me <b>{areaData.near}</b> me {BrandCap.toLowerCase()} chimney not working, noise, repair, service sab 1 hour me solve karti hai.</p>
   <div style={{display:'flex',alignItems:'center',gap:8,marginTop:10}}><span style={{background:'#0f7a0f',color:'#fff',padding:'4px 10px',borderRadius:6,fontSize:13,fontWeight:700}}>★ 4.6</span><span style={{fontSize:12,color:'#555'}}>{BrandCap} Expert in {area} • 335 reviews • 10k+ Customers</span></div>
  </div>
  <div style={{padding:'0 16px'}}>
   <div style={{fontWeight:800,marginBottom:12,fontSize:15,minHeight:48,color:'#e11d48'}}><TypeWriter texts={seoTitles} /></div>
   <div style={{display:'flex',gap:8,paddingBottom:16,overflowX:'auto'}}>
    {["Service","Repair","Installation"].map(t=>(<button key={t} onClick={()=>setTab(t)} style={{padding:'10px 22px',borderRadius:24,border:tab===t?'1px solid #000':'1px solid #ddd',background:tab===t?'#000':'#fff',color:tab===t?'#fff':'#000',fontWeight:800,fontSize:14,whiteSpace:'nowrap'}}>{t}</button>))}
   </div>
  </div>
  <div style={{padding:'24px 16px',background:'#fff',borderTop:'8px solid #f6f6f6'}}>
    <h2 style={{fontSize:15,fontWeight:900,margin:0}}>24 Keywords - {BrandCap} Service in {area}</h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:14,fontSize:11.5}}>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>faber chimney service</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>faber chimney not working</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>faber chimney repair</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>faber chimney noise</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>glen chimney service</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>glen chimney not working</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>glen chimney repair</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>glen chimney noise</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>kaff chimney service</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>kaff chimney not working</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>kaff chimney repair</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>kaff chimney noise</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>siemens chimney service</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>siemens chimney not working</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>siemens chimney repair</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>siemens chimney noise</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>hafele chimney service</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>hafele chimney not working</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>hafele chimney repair</b> in {area}</div>
      <div style={{background:'#f3f4f6',padding:'8px 10px',borderRadius:8,border:'1px solid #eee'}}><b>hafele chimney noise</b> in {area}</div>
      <div style={{background:'#e0f2fe',padding:'8px 10px',borderRadius:8,border:'1px solid #bae6fd'}}><b>chimney service</b> in {area} {areaData.pin}</div>
      <div style={{background:'#e0f2fe',padding:'8px 10px',borderRadius:8,border:'1px solid #bae6fd'}}><b>chimney repair</b> in {area}</div>
      <div style={{background:'#e0f2fe',padding:'8px 10px',borderRadius:8,border:'1px solid #bae6fd'}}><b>chimney installation</b> in {area}</div>
      <div style={{background:'#e0f2fe',padding:'8px 10px',borderRadius:8,border:'1px solid #bae6fd'}}><b>chimney cleaning</b> in {area} {areaData.pin}</div>
    </div>
  </div>
  <footer style={{background:'#f3f4f6',padding:'20px',fontSize:12}}>
    <p style={{fontWeight:'bold',marginBottom:12,fontSize:13}}>Our Service Areas (30 Locations):</p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
      {["faber-jaypee-greens","faber-sector-150","faber-wishtown-128","faber-indirapuram","faber-vaishali-sec-5","faber-raj-nagar","glen-jaypee-greens","glen-sector-150","glen-wishtown-128","glen-indirapuram","glen-vaishali-sec-5","glen-raj-nagar","hafele-jaypee-greens","hafele-sector-150","hafele-wishtown-128","hafele-indirapuram","hafele-vaishali-sec-5","hafele-raj-nagar","kaff-jaypee-greens","kaff-sector-150","kaff-wishtown-128","kaff-indirapuram","kaff-vaishali-sec-5","kaff-raj-nagar","siemens-jaypee-greens","siemens-sector-150","siemens-wishtown-128","siemens-indirapuram","siemens-vaishali-sec-5","siemens-raj-nagar"].map(s=> <a key={s} href={`/${s}`} style={{color:'#15803d',fontWeight:700,textDecoration:'none'}}>{s.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase())}</a>)}
    </div>
  </footer>
  <div style={{textAlign:'center',fontSize:10,color:'#bbb',padding:'10px 0 100px'}}>© {BrandCap} Service • {area} PIN {areaData.pin} • 10k+ Customers</div>
  {showForm && (<div style={{position:'fixed',inset:0,zIndex:100000,background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'center',padding:16}}><div style={{background:'#fff',width:'100%',maxWidth:400,borderRadius:16,padding:20}}><h3 style={{margin:0}}>{selectedService}</h3><a href={`https://wa.me/91${phone}?text=Hi, I need ${BrandCap} chimney service in ${area} PIN ${areaData.pin}`} style={{display:'block',marginTop:16,background:'#25D366',color:'#fff',padding:12,borderRadius:8,textAlign:'center',textDecoration:'none',fontWeight:800}}>Book on WhatsApp</a><button onClick={()=>setShowForm(false)} style={{marginTop:10,width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',background:'#fff'}}>Close</button></div></div>)}
  <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'1px solid #ddd',padding:10,display:'flex',gap:10,maxWidth:800,margin:'0 auto',zIndex:30}}><a href={`tel:${phone}`} style={{flex:1,background:'#000',color:'#fff',textAlign:'center',padding:14,borderRadius:10,textDecoration:'none',fontWeight:900}}>Call {BrandCap}</a><a href={`https://wa.me/91${phone}?text=${BrandCap} chimney service in ${area}`} style={{flex:1,background:'#25D366',color:'#fff',textAlign:'center',padding:14,borderRadius:10,textDecoration:'none',fontWeight:900}}>WhatsApp</a></div>
 </div>
 </>
 )
   }
