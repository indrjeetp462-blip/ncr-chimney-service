"use client"
import { useState, useEffect, useRef } from "react"

const areaInfo:any = {
  "jaypee-greens": { full: "Jaypee Greens Greater Noida", pin: "201310", near: "Pari Chowk" },
  "sector-150": { full: "Sector 150 Noida", pin: "201310", near: "Sports City" },
  "wishtown-128": { full: "Wishtown Sector 128", pin: "201304", near: "JP Hospital" },
  "indirapuram": { full: "Indirapuram Ghaziabad", pin: "201014", near: "Shipra Mall" },
  "vaishali-sec-5": { full: "Vaishali Sector 5", pin: "201010", near: "Vaishali Metro" },
  "raj-nagar": { full: "Raj Nagar Ghaziabad", pin: "201002", near: "RDC" }
}

export default function Page({ params }: any){
 const slug = (params?.slug || "kaff-vaishali-sec-5").toLowerCase()
 const brandRaw = slug.split("-")[0] || "kaff"
 const areaKey = slug.split("-").slice(1).join("-") || "vaishali-sec-5"
 const areaData = areaInfo[areaKey] || { full: areaKey.replace(/-/g," "), pin: "201301", near: "NCR" }
 const Brand = brandRaw.charAt(0).toUpperCase()+brandRaw.slice(1)
 const area = areaData.full
 const formRef = useRef<any>(null)
 const [showPopup, setShowPopup] = useState(false)
 const [showNum, setShowNum] = useState(false)
 const [typed, setTyped] = useState("")
 const phone="8796284796"
 const hide="8796XXXX96"
 const fullText = `Professional ${Brand} chimney service repair in ${area} near ${areaData.near}. We repair not working, heavy noise, low suction, auto clean failure, oil leakage, motor burning, PCB failure same day in PIN ${areaData.pin}.`

 useEffect(()=>{
   document.title=`${Brand} Chimney Service Not Working in ${area} - ${areaData.pin}`
   const t=setTimeout(()=>setShowPopup(true),4000)
   let i=0
   const ti=setInterval(()=>{ setTyped(fullText.slice(0,i)); i++; if(i>fullText.length) clearInterval(ti) },60)
   return()=>{ clearTimeout(t); clearInterval(ti) }
 },[fullText])

 const scrollToForm=()=>{ formRef.current?.scrollIntoView({behavior:'smooth'}); setShowPopup(false) }
 const handleCall=()=>{ setShowNum(true); window.location.href=`tel:${phone}` }

 return(
 <div style={{maxWidth:860,margin:'0 auto',background:'#fff',fontFamily:'system-ui',paddingBottom:110,overflowX:'hidden'}}>
  {/* FIXED TOP - NO HILNA */}
  <div style={{background:'#dc2626',color:'#fff',fontSize:13,fontWeight:800,padding:'10px 14px',textAlign:'center',letterSpacing:0.3}}>
    📞 CALL {hide} FOR {Brand.toUpperCase()} SERVICE IN {area.toUpperCase()} PIN {areaData.pin} • 30 MIN VISIT
  </div>

  {/* HEADER */}
  <div style={{background:'#fff',borderBottom:'3px solid #111',padding:'14px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,zIndex:50}}>
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <div style={{width:44,height:44,background:'#dc2626',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,color:'#fff'}}>🍳</div>
      <div><div style={{fontWeight:900,fontSize:15,color:'#dc2626',lineHeight:1.1}}>{Brand.toUpperCase()} CHIMNEY<br/>SERVICE REPAIR</div><div style={{fontSize:11,color:'#666',fontWeight:700}}>{area.toUpperCase()} • PIN {areaData.pin}</div></div>
    </div>
    <button onClick={()=>{setShowNum(true); setShowPopup(true)}} style={{background:'#111',color:'#fff',padding:'12px 18px',borderRadius:30,fontWeight:900,border:0,fontSize:14}}>Call {showNum?phone:hide}</button>
  </div>

  <div style={{padding:16}}>
    {/* RED BOX TITLE - KAFF CHIMNEY SERVICE NOT WORKING */}
    <div style={{background:'#dc2626',color:'#fff',padding:'18px 18px',borderRadius:16,boxShadow:'0 8px 20px rgba(220,38,38,0.3)'}}>
      <h1 style={{fontSize:26,fontWeight:900,lineHeight:1.2,margin:0,color:'#fff'}}>{Brand} Chimney Service Not Working in {area} - Pincode {areaData.pin} - 30 Min Visit</h1>
      <div style={{marginTop:8,fontSize:12,background:'rgba(255,255,255,0.2)',display:'inline-block',padding:'4px 10px',borderRadius:20}}>Professional {Brand} Service Repair • {areaData.near}</div>
    </div>

    {/* TYPEWRITER - PROFESSIONAL SLOW */}
    <div style={{fontSize:16,color:'#111',background:'#fff7ed',padding:16,borderRadius:14,border:'1px solid #fed7aa',marginTop:14,minHeight:110,lineHeight:1.7}}>
      {typed}<span style={{animation:'blink 1s infinite',fontWeight:900,color:'#dc2626'}}>|</span>
    </div>

    {/* SERVICE CARD BIG - FIXED FIT - NO SCROLL HILNA */}
    <div style={{display:'grid',gridTemplateColumns:'1fr',gap:14,marginTop:18}}>
      {[
        {t:`${Brand} Deep Cleaning Service`,d:'Complete oil, grease, filter, blower chemical wash. Heavy oil removal and suction restore 100 percent in PIN '+areaData.pin+'.',i:'🧹',b:'Most Booked'},
        {t:`${Brand} Not Working Repair`,d:'Chimney not working, no power, no suction, switch fail, motor burn, PCB fail, touch not working fix same day in '+area+'.',i:'⚡',b:'90 Days Warranty'},
        {t:`${Brand} Installation Service`,d:'New chimney ducting, core cutting, fitting, clamp installation same day service near '+areaData.near+' in '+area+'.',i:'🏠',b:'Same Day Visit'},
      ].map(c=>(
        <div key={c.t} style={{border:'2px solid #111',borderRadius:20,padding:18,background:'#fff',display:'flex',gap:14,alignItems:'center',boxShadow:'0 6px 18px rgba(0,0,0,0.08)'}}>
          <div style={{width:60,height:60,background:'#fef2f2',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,flexShrink:0}}>{c.i}</div>
          <div style={{flex:1}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontWeight:900,fontSize:17,color:'#dc2626'}}>{c.t}</div><div style={{background:'#dcfce7',color:'#15803d',fontSize:10,fontWeight:900,padding:'3px 8px',borderRadius:20}}>{c.b}</div></div>
            <div style={{fontSize:13,color:'#555',marginTop:6,lineHeight:1.6}}>{c.d}</div>
          </div>
        </div>
      ))}
    </div>

    {/* BOOK FORM - SERVICE CARD KE NICHE */}
    <div ref={formRef} style={{marginTop:20,border:'3px solid #dc2626',borderRadius:20,padding:18,background:'#fff',boxShadow:'0 8px 24px rgba(220,38,38,0.12)'}}>
      <div style={{fontWeight:900,fontSize:19,color:'#dc2626'}}>📅 Book {Brand} Service Not Working in {area}</div>
      <div style={{fontSize:13,color:'#666',marginTop:4}}>PIN {areaData.pin} • Technician in 30 Minutes • Number Hidden {hide}</div>
      <form onSubmit={(e)=>{e.preventDefault(); setShowNum(true); setShowPopup(true)}} style={{display:'grid',gap:12,marginTop:14}}>
        <input required placeholder="Your Full Name" style={{padding:15,borderRadius:12,border:'2px solid #e5e7eb',fontSize:15}}/>
        <input required placeholder="Mobile Number" style={{padding:15,borderRadius:12,border:'2px solid #e5e7eb',fontSize:15}}/>
        <input placeholder={`${area} Full Address - ${areaData.near}`} style={{padding:15,borderRadius:12,border:'2px solid #e5e7eb',fontSize:15}}/>
        <select style={{padding:15,borderRadius:12,border:'2px solid #e5e7eb',fontSize:15}}><option>{Brand} Service Not Working in {area}</option><option>{Brand} Deep Cleaning in {area}</option><option>{Brand} Installation in {area}</option><option>{Brand} Noise Repair in {area}</option></select>
        <button type="submit" style={{background:'#dc2626',color:'#fff',padding:16,borderRadius:12,fontWeight:900,border:0,fontSize:16}}>BOOK NOW - {hide}</button>
      </form>
      <div style={{fontSize:11,color:'#888',marginTop:10,textAlign:'center'}}>✓ 30 Min Visit • ✓ 90 Days Warranty • ✓ Original Parts</div>
    </div>

    {/* LONG PROFESSIONAL CONTENT */}
    <div style={{marginTop:24,fontSize:15,lineHeight:1.9,color:'#111'}}>
      <h2 style={{fontSize:20,fontWeight:900,color:'#dc2626'}}>{Brand} Chimney Service Not Working in {area} - Expert Repair</h2>
      <p><b>{Brand} chimney service not working in {area} PIN {areaData.pin}</b> is available daily near {areaData.near}. Our expert team provides complete {Brand} chimney service repair for not working, heavy noise, low suction, oil leakage, auto clean failure, motor burning, PCB failure same day.</p>
      <p><b>{Brand} Chimney Not Working Repair in {area}:</b> {Brand} not working is most common complaint. Reasons power failure, switch failure, capacitor, PCB, motor burning due to oil. Our technician in {area} checks power cable, fuse, PCB continuity, motor winding and repairs on spot. Original {Brand} spare ready.</p>
      <p><b>{Brand} Deep Cleaning in {area}:</b> Every 3-4 months cleaning needed. Full disassembly, chemical wash of baffle filter, mesh filter, blower fan, motor housing, oil tray. Suction 100 percent restored.</p>
      <p><b>{Brand} Noise Repair in {area}:</b> Heavy noise due to loose blower, dust bearing, oil jam. We do balancing, oiling, cleaning in 1 hour same day in PIN {areaData.pin}.</p>
      <p>We cover Jaypee Greens, Sector 150, Wishtown 128, Indirapuram, Vaishali Sector 5, Raj Nagar, Kaushambi, Crossing Republik, Noida Extension. {Brand} service repair available in all societies PIN {areaData.pin}. Call {hide} for booking.</p>
    </div>

    <div style={{marginTop:22}}>
      <h2 style={{fontSize:20,fontWeight:900,background:'#111',color:'#fff',padding:'14px 16px',borderRadius:12}}>{Brand} Chimney Not Working Repair in {area}</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:12}}>
        {[
          `${Brand.toLowerCase()} chimney service in ${area}`,
          `${Brand.toLowerCase()} chimney not working in ${area}`,
          `${Brand.toLowerCase()} chimney service not working in ${area}`,
          `${Brand.toLowerCase()} chimney noise repair in ${area}`,
          `${Brand.toLowerCase()} chimney deep cleaning in ${area}`,
          `${Brand.toLowerCase()} chimney installation in ${area}`,
        ].map(k=><div key={k} style={{background:'#f9fafb',border:'1px solid #eee',padding:12,borderRadius:10,fontSize:13,fontWeight:700}}>{k}</div>)}
      </div>
    </div>

    <div style={{marginTop:22}}>
      <iframe title="map" width="100%" height="300" style={{border:0,borderRadius:16}} src={`https://maps.google.com/maps?q=${encodeURIComponent(area)}&z=14&output=embed`}></iframe>
    </div>

    <div style={{marginTop:24,borderTop:'3px solid #111',paddingTop:14,fontSize:11,color:'#666',lineHeight:1.7}}>
      <b>DISCLAIMER - WE ARE INDEPENDENT SERVICE PROVIDER</b><br/>We are independent service provider in {area} PIN {areaData.pin}. We are NOT authorized center of {Brand}. {Brand} trademark belongs to owner. Used for reference to describe expertise for {Brand} service repair in {area}. Call {hide} for booking.
    </div>
  </div>

  {showPopup && (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.8)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200,padding:18}}>
      <div style={{background:'#fff',borderRadius:22,padding:22,maxWidth:380,width:'100%'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}><div style={{width:48,height:48,background:'#fef2f2',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24}}>🍳</div><button onClick={()=>setShowPopup(false)} style={{border:0,background:'#f3f4f6',width:36,height:36,borderRadius:20,fontWeight:900}}>✕</button></div>
        <div style={{fontWeight:900,fontSize:20,marginTop:12}}>{Brand} Service Not Working in {area}</div>
        <div style={{fontSize:12,color:'#666'}}>PIN {areaData.pin} • 30 Min Visit • {areaData.near}</div>
        <div style={{background:'#f9fafb',borderRadius:12,padding:12,marginTop:14,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><div style={{fontSize:11,color:'#666'}}>Number Hidden</div><div style={{fontWeight:900,fontSize:18}}>{showNum?phone:hide}</div></div>
          <button onClick={()=>setShowNum(!showNum)} style={{fontSize:11,padding:'6px 12px',borderRadius:8,border:'1px solid #ddd',background:'#fff',fontWeight:700}}>{showNum?'Hide':'Reveal'}</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:16}}>
          <button onClick={handleCall} style={{padding:14,borderRadius:12,border:0,background:'#111',color:'#fff',fontWeight:900}}>📞 Call</button>
          <button onClick={scrollToForm} style={{padding:14,borderRadius:12,border:0,background:'#dc2626',color:'#fff',fontWeight:900}}>📅 Book Now</button>
        </div>
      </div>
    </div>
  )}

  <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'3px solid #111',padding:10,display:'flex',gap:10,maxWidth:860,margin:'0 auto',zIndex:60}}>
    <button onClick={handleCall} style={{flex:1,background:'#111',color:'#fff',padding:15,borderRadius:12,fontWeight:900,border:0}}>{showNum?`Call ${phone}`:`Call ${hide}`}</button>
    <button onClick={scrollToForm} style={{flex:1,background:'#dc2626',color:'#fff',padding:15,borderRadius:12,fontWeight:900,border:0}}>Book Now</button>
  </div>

  <style>{`@keyframes blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}`}</style>
 </div>
 )
}
