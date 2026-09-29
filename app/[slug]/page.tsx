"use client"
import { useState, useEffect, useRef } from "react"

const areaInfo:any = {
  "jaypee-greens": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk", map: "Jaypee Greens Greater Noida" },
  "sector-150": { full: "Sector 150 Noida", pin: "201310", near: "Sports City", map: "Sector 150 Noida" },
  "wishtown-128": { full: "Wishtown Sector 128", pin: "201304", near: "JP Hospital", map: "Jaypee Wishtown Sector 128" },
  "indirapuram": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall", map: "Indirapuram Ghaziabad" },
  "vaishali-sec-5": { full: "Vaishali Sector 5", pin: "201010", near: "Vaishali Metro", map: "Vaishali Sector 5 Ghaziabad" },
  "raj-nagar": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC", map: "Raj Nagar Ghaziabad" }
}

export default function Page({ params }: any){
 const slug = (params?.slug || "siemens-sector-150").toLowerCase()
 const brandRaw = slug.split("-")[0] || "siemens"
 const areaKey = slug.split("-").slice(1).join("-") || "sector-150"
 const areaData = areaInfo[areaKey] || { full: areaKey.replace(/-/g," "), pin: "201301", near: "NCR", map: areaKey }
 const Brand = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1)
 const area = areaData.full
 const isSiemens = brandRaw==="siemens"
 const formRef = useRef<any>(null)
 const [showPopup, setShowPopup] = useState(false)
 const [showNum, setShowNum] = useState(false)
 const [typed, setTyped] = useState("")
 const phone="8796284796"
 const hide="8796XXXX96"
 const fullTyped = `We fix ${Brand} chimney noise, not working, low suction, deep cleaning in ${area} PIN ${areaData.pin} same day visit near ${areaData.near}.`

 useEffect(()=>{
   document.title=`${Brand} Chimney Service Repair in ${area} - ${areaData.pin}`
   const t=setTimeout(()=>setShowPopup(true),4000)
   let i=0
   const typeInt=setInterval(()=>{ setTyped(fullTyped.slice(0,i)); i++; if(i>fullTyped.length) clearInterval(typeInt) },25)
   return()=>{ clearTimeout(t); clearInterval(typeInt) }
 },[fullTyped])

 const scrollToForm=()=>{ formRef.current?.scrollIntoView({behavior:'smooth'}); setShowPopup(false) }
 const handleCall=()=>{ setShowNum(true); window.location.href=`tel:${phone}` }

 return(
 <div style={{maxWidth:860,margin:'0 auto',background:'#fff',fontFamily:'system-ui',paddingBottom:110}}>
  {/* RUNNING NUMBER TOP */}
  <div style={{background:isSiemens?'#dc2626':'#111',color:'#fff',fontSize:11,fontWeight:700,padding:'6px 0',overflow:'hidden',whiteSpace:'nowrap'}}>
    <div style={{display:'inline-block',animation:'marquee 18s linear infinite'}}>📞 CALL {hide} FOR {Brand.toUpperCase()} CHIMNEY SERVICE REPAIR IN {area.toUpperCase()} PIN {areaData.pin} • 30 MIN VISIT NEAR {areaData.near.toUpperCase()} • {Brand.toUpperCase()} NOISE REPAIR • NOT WORKING • DEEP CLEANING • INSTALLATION • &nbsp;&nbsp;&nbsp; 📞 CALL {hide} FOR {Brand.toUpperCase()} SERVICE IN {area.toUpperCase()} • </div>
  </div>

  {/* HEADER - NICE BUTTON */}
  <div style={{background:'#fff',borderBottom:'2px solid #111',color:'#111',padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,zIndex:50}}>
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <div style={{width:38,height:38,background:isSiemens?'#dc2626':'#111',color:'#fff',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>🍳</div>
      <div><div style={{fontWeight:900,fontSize:15}}>{Brand.toUpperCase()} CHIMNEY SERVICE REPAIR</div><div style={{fontSize:10,color:'#666'}}>{area.toUpperCase()} • PIN {areaData.pin}</div></div>
    </div>
    <button onClick={()=>{setShowNum(true); setShowPopup(true)}} style={{background:isSiemens?'#dc2626':'#111',color:'#fff',padding:'11px 18px',borderRadius:30,fontWeight:900,border:0,fontSize:13,display:'flex',alignItems:'center',gap:6,boxShadow:'0 6px 16px rgba(0,0,0,0.2)',animation:'pulse 2s infinite'}}>
      <span style={{width:8,height:8,background:'#22c55e',borderRadius:10,display:'inline-block'}}></span> Call {showNum?phone:hide}
    </button>
  </div>

  <div style={{padding:20}}>
    <h1 style={{fontSize:28,fontWeight:900,lineHeight:1.15,margin:'8px 0',color:'#111'}}>{Brand} Chimney Service Repair in {area} - Pincode {areaData.pin} - 30 Min Visit</h1>
    <p style={{fontSize:14,color:'#333',background:'#f8fafc',padding:12,borderRadius:12,borderLeft:`4px solid ${isSiemens?'#dc2626':'#000'}`}}>Professional <b>{Brand} chimney service repair in {area}</b> near {areaData.near}. We repair not working, heavy noise, low suction, auto clean failure, oil leakage, motor burning, PCB failure same day in PIN {areaData.pin}.</p>

    {/* CARDS NO PRICE */}
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12,marginTop:20}}>
      {[
        {t:`${Brand} Deep Cleaning`,d:'Oil, grease, filter, blower wash',i:'🧹',b:'Most Booked'},
        {t:`${Brand} Repair`,d:'Motor, PCB, Noise, Touch',i:'🔧',b:'Warranty'},
        {t:`${Brand} Installation`,d:'Duct, core cut, fitting',i:'🏠',b:'Same Day'},
      ].map(c=>(
        <div key={c.t} style={{border:'1px solid #e5e7eb',borderRadius:16,padding:14,background:'#fff',boxShadow:'0 4px 12px rgba(0,0,0,0.06)',position:'relative'}}>
          <div style={{position:'absolute',top:8,right:8,background:'#dcfce7',color:'#15803d',fontSize:8,fontWeight:800,padding:'2px 6px',borderRadius:10}}>{c.b}</div>
          <div style={{fontSize:26}}>{c.i}</div><div style={{fontWeight:900,fontSize:13,marginTop:8}}>{c.t}</div><div style={{fontSize:11,color:'#666',marginTop:4}}>{c.d}</div>
          <button onClick={scrollToForm} style={{marginTop:12,width:'100%',padding:'8px 0',borderRadius:8,border:0,background:'#111',color:'#fff',fontWeight:800,fontSize:11}}>Book Now</button>
        </div>
      ))}
    </div>

    {/* TYPEWRITER NICHE */}
    <div style={{marginTop:22,background:'#111',color:'#22c55e',padding:14,borderRadius:12,fontFamily:'monospace',fontSize:13,lineHeight:1.6,minHeight:70}}>
      <span style={{color:'#888'}}>&gt; {Brand} Live Status: </span>{typed}<span style={{animation:'blink 1s infinite'}}>█</span>
    </div>

    {/* FORM */}
    <div ref={formRef} style={{marginTop:22,border:`3px solid ${isSiemens?'#dc2626':'#111'}`,borderRadius:20,padding:18,background:'#fff'}}>
      <div style={{fontWeight:900,fontSize:18}}>📅 Book {Brand} Chimney Service Repair in {area}</div>
      <div style={{fontSize:12,color:'#666'}}>PIN {areaData.pin} - 30 Min Visit - Number Hidden</div>
      <form onSubmit={(e)=>{e.preventDefault(); setShowNum(true); setShowPopup(true)}} style={{display:'grid',gap:12,marginTop:14}}>
        <input required placeholder="Full Name" style={{padding:14,borderRadius:12,border:'1px solid #ddd'}}/>
        <input required placeholder="Mobile Number - Hidden Safe" style={{padding:14,borderRadius:12,border:'1px solid #ddd'}}/>
        <select style={{padding:14,borderRadius:12,border:'1px solid #ddd'}}><option>{Brand} Service Repair in {area}</option><option>{Brand} Noise Repair in {area}</option><option>{Brand} Not Working in {area}</option><option>{Brand} Deep Cleaning in {area}</option></select>
        <button type="submit" style={{background:isSiemens?'#dc2626':'#111',color:'#fff',padding:16,borderRadius:12,fontWeight:900,border:0}}>BOOK NOW - {hide}</button>
      </form>
    </div>

    {/* LONG CONTENT */}
    <div style={{marginTop:26,fontSize:13.5,lineHeight:1.9,color:'#222'}}>
      <h2 style={{fontSize:19,fontWeight:900}}>{Brand} Chimney Service in {area} - Complete Repair Guide</h2>
      <p><b>{Brand} chimney service repair in {area} PIN {areaData.pin}</b> daily near {areaData.near}. We fix not working, noise, low suction, oil leakage, auto clean fail same day. Our team covers {area} apartments, villas, builder floors.</p>
      <h3 style={{fontSize:16,fontWeight:800,marginTop:18}}>{Brand} Chimney Noise Repair in {area}</h3>
      <p>{Brand} noise is common in {area} high-rise. Noise from loose blower, dust bearing, oil jam. We do balancing, oiling, cleaning in 1 hour in PIN {areaData.pin}.</p>
      <h3 style={{fontSize:16,fontWeight:800,marginTop:18}}>{Brand} Chimney Not Working in {area}</h3>
      <p>If {Brand} not working in {area}, check power, MCB. If still not, call us - we check wiring, fuse, PCB, motor continuity in {areaData.near}.</p>
      <h3 style={{fontSize:16,fontWeight:800,marginTop:18}}>{Brand} Deep Cleaning in {area}</h3>
      <p>Every 3-4 months deep cleaning needed. We disassemble filter, blower, oil tray and chemical wash. Suction 100% restored in {area}.</p>
      <p style={{marginTop:18}}>We cover Jaypee Greens, Sector 150, Wishtown 128, Indirapuram, Vaishali Sector 5, Raj Nagar. {Brand} service repair in all Noida Ghaziabad PIN {areaData.pin}.</p>
    </div>

    {/* BIG HEADING */}
    <div style={{marginTop:26}}>
      <h2 style={{fontSize:22,fontWeight:900,background:isSiemens?'#dc2626':'#111',color:'#fff',padding:'14px 16px',borderRadius:12}}>{Brand} Chimney Noise Repair in {area} - Repair Service</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:12}}>
        {[
          `${Brand.toLowerCase()} chimney service in ${area}`,
          `${Brand.toLowerCase()} chimney repair in ${area}`,
          `${Brand.toLowerCase()} chimney noise repair in ${area}`,
          `${Brand.toLowerCase()} chimney not working in ${area}`,
          `${Brand.toLowerCase()} chimney deep cleaning in ${area}`,
          `${Brand.toLowerCase()} chimney installation in ${area}`,
          `${Brand.toLowerCase()} chimney service repair in ${area}`,
          `${Brand.toLowerCase()} chimney service in ${area} noida`,
        ].map(k=><div key={k} style={{background:'#f9fafb',border:'1px solid #eee',padding:12,borderRadius:10,fontSize:12,fontWeight:600}}>{k}</div>)}
      </div>
    </div>

    <div style={{marginTop:24}}>
      <iframe title="map" width="100%" height="280" style={{border:0,borderRadius:16}} src={`https://maps.google.com/maps?q=${encodeURIComponent(areaData.map)}&z=14&output=embed`}></iframe>
    </div>

    {/* DISCLAIMER LAST */}
    <div style={{marginTop:28,borderTop:'2px solid #111',paddingTop:14,fontSize:10,color:'#666',lineHeight:1.6}}>
      <b>DISCLAIMER - WE ARE INDEPENDENT SERVICE PROVIDER</b><br/>
      We are independent service provider in {area} PIN {areaData.pin}. We are NOT authorized center of {Brand}. {Brand} trademark belongs to owner. Names used for reference to describe expertise for {Brand} service repair in {area} Noida Ghaziabad {areaData.near}. For brand authorized service contact brand. Our service fast affordable with 90 days warranty. Call {hide} to book {Brand} service repair in {area}.
    </div>
  </div>

  {/* PREMIUM POPUP - CALL + BOOK + HIDE */}
  {showPopup && (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.75)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200,padding:18}}>
      <div style={{background:'#fff',borderRadius:22,padding:22,maxWidth:380,width:'100%'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}><div style={{width:44,height:44,background:'#f3f4f6',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>🍳</div><button onClick={()=>setShowPopup(false)} style={{border:0,background:'#f3f4f6',width:32,height:32,borderRadius:20,fontWeight:900}}>✕</button></div>
        <div style={{fontWeight:900,fontSize:20,marginTop:12}}>{Brand} Service Repair in {area}</div>
        <div style={{fontSize:12,color:'#666'}}>PIN {areaData.pin} • 30 Min Visit • {areaData.near}</div>
        <div style={{background:'#f9fafb',borderRadius:12,padding:12,marginTop:14,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><div style={{fontSize:11,color:'#666'}}>Number Hidden</div><div style={{fontWeight:900,fontSize:17}}>{showNum?phone:hide}</div></div>
          <button onClick={()=>setShowNum(!showNum)} style={{fontSize:11,padding:'6px 12px',borderRadius:8,border:'1px solid #ddd',background:'#fff',fontWeight:700}}>{showNum?'Hide':'Reveal'}</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:16}}>
          <button onClick={handleCall} style={{padding:14,borderRadius:12,border:0,background:'#111',color:'#fff',fontWeight:900}}>📞 Call {showNum?phone:hide}</button>
          <button onClick={scrollToForm} style={{padding:14,borderRadius:12,border:0,background:isSiemens?'#dc2626':'#16a34a',color:'#fff',fontWeight:900}}>📅 Book Now</button>
        </div>
        <div style={{fontSize:10,color:'#999',textAlign:'center',marginTop:10}}>Privacy: Number hidden • Click Reveal</div>
      </div>
    </div>
  )}

  {/* BOTTOM */}
  <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'2px solid #111',padding:10,display:'flex',gap:10,maxWidth:860,margin:'0 auto',zIndex:60}}>
    <button onClick={handleCall} style={{flex:1,background:'#111',color:'#fff',padding:15,borderRadius:12,fontWeight:900,border:0}}>{showNum?`Call ${phone}`:`Call ${hide}`}</button>
    <button onClick={scrollToForm} style={{flex:1,background:isSiemens?'#dc2626':'#16a34a',color:'#fff',padding:15,borderRadius:12,fontWeight:900,border:0}}>Book Now</button>
  </div>

  <style>{`@keyframes marquee{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}} @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,0.7)}70%{box-shadow:0 0 0 12px rgba(0,0,0,0)}100%{box-shadow:0 0 0 0 rgba(0,0,0,0)}} @keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}`}</style>
 </div>
 )
}
